import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../store/hooks';
import { LoginModal } from '../AccountModal/LoginModal';
import { RegisterModal } from '../AccountModal/RegisterModal';
//import { ProfileModal } from '../AccountModal/ProfileModal';

export const Header = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(state => state.cart.items);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const isAuthenticated = false; //  проверка авторизации
  
  const hasItems = cartItems.length > 0;

  const handleAccountClick = () => {
    if (isAuthenticated) {
      setActiveModal('profile');
    } else {
      setActiveModal('login');
    }
  };

  const closeModal = () => setActiveModal(null);

  return (
    <header className="flex flex-row mx-auto w-5/6 mt-6 justify-between lg:gap-20 gap-4">
      <button onClick={() => navigate("/")}>
        <img src="logo.svg" alt="LoGO" className="w-10 lg:w-25"/>
      </button>

      <div className='flex font- text-s w-10 lg:w-140 h-10 bg-white  shadow-lg' style={{ fontFamily: 'Futuris' }}>
        <input
          type="text"
          placeholder="поиск"
          className="w-full p-3"
        />
      </div>

      <button className="text-xl lg:text-2xl"
        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
        контакты
      </button>

      <button className="text-xl lg:text-2xl"
        onClick={() => navigate('/Catalog')}>
        каталог
      </button>

      <button className="text-xl lg:text-2xl relative"
        onClick={() => navigate('/Cart')}>
        корзина
        {hasItems && (
          <span className="absolute ml-3 mt-3 bg-[rgb(248,80,39)] rounded-full h-3 w-3" ></span>
        )}
      </button>

      <button 
        className="text-xl lg:text-2xl"
        onClick={handleAccountClick}
      >
        <img src="akk.svg" alt="acc" className="h-6 sl:h-4"/>
      </button>

      {/* Модальные окна */}
      <LoginModal 
        isOpen={activeModal === 'login'} 
        onClose={closeModal}
        onRegisterClick={() => setActiveModal('register')}
      />

<RegisterModal
        isOpen={activeModal === 'register'}
        onClose={() => setActiveModal(null)}
        onLoginClick={() => setActiveModal('login')}
      />

      {/* Кнопка очистки корзины 
       <RegisterModal 
        isOpen={activeModal === 'register'} 
        onClose={closeModal}
        onLoginClick={() => setActiveModal('login')}
      />
      
      <ProfileModal 
        isOpen={activeModal === 'profile'} 
        onClose={closeModal}
      />*/}

    </header>
  );
};