import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookPreviewData } from '../api/fakeApi';

// Функция для загрузки состояния из LocalStorage
const loadStateFromStorage = (): CartState => {
  if (typeof window !== 'undefined') { // Проверка на серверном рендеринге
    try {
      const savedState = localStorage.getItem('cartState');
      return savedState ? JSON.parse(savedState) : { items: [], orders: [] };
    } catch (error) {
      console.error('Failed to parse cart state from localStorage', error);
      return { items: [], orders: [] };
    }
  }
  return { items: [], orders: [] };
};

export interface CartItem extends BookPreviewData {
  quantity: number;
}

export type OrderStatus = 'processing' | 'ready' | 'completed';

export interface OrderItem extends Omit<CartItem, 'cover' | 'department'> {
  orderDate: string;
  status: OrderStatus;
}

interface CartState {
  items: CartItem[];
  orders: OrderItem[];
}

const initialState: CartState = loadStateFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<BookPreviewData>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveStateToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveStateToLocalStorage(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        saveStateToLocalStorage(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveStateToLocalStorage(state);
    },
    createOrder: (state) => {
      const newOrders: OrderItem[] = state.items.map(item => ({
        id: item.id,
        title: item.title,
        author: item.author,
        price: item.price,
        quantity: item.quantity,
        publication_date: item.publication_date,
        orderDate: new Date().toISOString(),
        status: 'processing'
      }));
      state.orders.push(...newOrders);
      state.items = [];
      saveStateToLocalStorage(state);
    },
    updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: OrderStatus }>) => {
      const order = state.orders.find(o => o.id === action.payload.orderId);
      if (order) {
        order.status = action.payload.status;
        saveStateToLocalStorage(state);
      }
    },
    // Инициализация состояния из localStorage
    initCart: (_, action: PayloadAction<CartState>) => {
      return action.payload;
    }
  },
});

// Функция для сохранения состояния в localStorage
const saveStateToLocalStorage = (state: CartState) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartState', JSON.stringify(state));
    }
  } catch (error) {
    console.error('Failed to save cart state to localStorage', error);
  }
};

// Middleware для синхронизации между вкладками
export const cartSyncMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  if (action.type.startsWith('cart/') && action.type !== 'cart/initCart') {
    saveStateToLocalStorage(store.getState().cart);
  }
  return result;
};

// Action для инициализации корзины
export const initializeCart = () => (dispatch: any) => {
  const savedState = loadStateFromStorage();
  dispatch(cartSlice.actions.initCart(savedState));
};

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  createOrder,
  updateOrderStatus
} = cartSlice.actions;

export default cartSlice.reducer;