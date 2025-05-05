import React from 'react';
import { CartItem as CartItemType } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

