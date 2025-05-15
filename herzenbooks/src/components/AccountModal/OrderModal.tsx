import React from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white flex flex-col items-center p-8 rounded-lg w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Akrobat' }}>
          вы оформили заказ
        </h2>
        <p className="text-center w-65 mb-6 leading-5" style={{ fontFamily: 'Futuris' }}>
          всю информацию можно посмотреть в вашем аккаунте
        </p>
        <div className=''> 
            <img src="order.svg" alt="order" className="h-20"/>
        </div>

        <div className="flex justify-center mt-7">
          <button
            onClick={() => {
              onClose();
              navigate('/account');
            }}
            className="px-6 py-2  bg-[rgb(43,64,143)] text-white rounded-full hover:bg-[rgb(248,80,39)]"
            style={{ fontFamily: 'Akrobat' }}
          >
            перейти в аккаунт
          </button>
        </div>

      </div>

    </div>
  );
};

export default OrderModal;