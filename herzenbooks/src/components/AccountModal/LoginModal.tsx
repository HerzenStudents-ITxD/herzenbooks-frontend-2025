import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { loginUser } from '../../realApi/authApi';
import { useNavigate } from 'react-router-dom';
import { setTokens } from '../../realApi/tokenService';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
  onLoginSuccess?: () => void;
}

export const LoginModal = ({ 
  isOpen, 
  onClose, 
  onRegisterClick,
  onLoginSuccess 
}: LoginModalProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await loginUser({ 
        loginData: username,
        password 
      });
      
      // Сохраняем токены
      setTokens(result.accessToken, result.refreshToken);

      // Перенаправляем на страницу аккаунта
      navigate('/account');

      // Вызываем onLoginSuccess если он передан
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess();
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'неверный логин или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/35" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-[rgb(239,242,245)] p-6">
          <Dialog.Title className="text-2xl font-bold" style={{ fontFamily: 'Akrobat' }}>
            вход в аккаунт
          </Dialog.Title>
          
          <form onSubmit={handleSubmit} className="mt-4 text-2sm space-y-4">
            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}
            
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логин"
              className="w-full p-2 bg-white rounded shadow-sm"
              required
              autoComplete="username"
            />
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="пароль"
              className="w-full p-2 bg-white rounded shadow-sm"
              required
              autoComplete="current-password"
            />
            
            <button type="button" className='text-sm'>
              ● я не помню пароль
            </button>

            <div className='flex flex-row gap-4 items-center'>
              <button
                type="submit"
                disabled={isLoading}
                className="w-55 h-12 text-white py-1 text-2xl bg-[rgb(43,64,143)] rounded-full disabled:opacity-50"
                style={{ fontFamily: 'Akrobat' }}
              >
                {isLoading ? 'вход...' : 'войти'}
              </button>

              <div className='flex flex-col text-2sm items-center'>
                <h1>Нет аккаунта?</h1>
                <button 
                  type="button"
                  onClick={onRegisterClick}
                  className="text-[rgb(43,64,143)] hover:text-[rgb(27,32,49)]"
                >
                  зарегистрироваться
                </button>
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};