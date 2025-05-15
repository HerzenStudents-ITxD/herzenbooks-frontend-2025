import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const LoginModal = ({ isOpen, onClose, onRegisterClick }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/35" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full  max-w-md rounded-xl bg-[rgb(239,242,245)] p-6">
          <Dialog.Title className="text-2xl font-bold"style={{ fontFamily: 'Akrobat' }}>вход в аккаунт</Dialog.Title>
          
          <form className="mt-4 text-2sm space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail"
              className="w-full p-2 bg-white rounded shadow-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="пароль"
              className="w-full p-2 bg-white rounded shadow-sm"
            />
            <button className='text-sm'> я не помню пароль</button>

            <div className='flex flex-row gap-5'>
                <button
                    type="submit"
                     className="w-55 h-12 text-white py-1 text-2xl bg-[rgb(43,64,143)] rounded-full"style={{ fontFamily: 'Akrobat' }}
                >
                    войти
                </button>

            <   div className=' flex flex-col text-2sm items-center'>
                     <h1>нет аккаунта?</h1>
                     <button 
                        type="button"
                        onClick={onRegisterClick}
                        className=" text-[rgb(43,64,143)] hover:text-[rgb(27,32,49)]"
                         >
                        зарегистрироваться
                    </button>
                </div>

            </div>
          </form>
          
          <div className="mt-4 flex justify-between">

            
          </div>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
};