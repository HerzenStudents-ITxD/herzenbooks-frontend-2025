import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export const RegisterModal = ({ isOpen, onClose, onLoginClick }: RegisterModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/35" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-[rgb(239,242,245)] p-6">
          <Dialog.Title className="text-2xl font-bold" style={{ fontFamily: 'Akrobat' }}>
            регистрация
          </Dialog.Title>
          
          <form className="mt-4 text-2sm space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="имя"
              className="w-full p-2 bg-white rounded shadow-sm"
            />
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

            <div className="flex w-95 gap-4">
              <button
                type="button"
                onClick={() => setIsChecked(!isChecked)}
                className={`w-5 h-3 mt-2 rounded-full border-2  border-[rgb(43,64,143)] ${isChecked ? 'bg-[rgb(43,64,143)]' : 'bg-white'}`}
              />
              <h1 className='text-sm'>Я согласен на обработку моих персональных данных  в соответствии с политикой конфиденциальности</h1>
            </div>

            <div className='flex justify-center gap-6 mt-2'>
              <button
                type="submit"
                className="w-75 h-12 text-white py-1 text-2xl bg-[rgb(43,64,143)] rounded-full"
                style={{ fontFamily: 'Akrobat' }} >
                зарегистрироваться
              </button>
            </div>
          </form>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
};