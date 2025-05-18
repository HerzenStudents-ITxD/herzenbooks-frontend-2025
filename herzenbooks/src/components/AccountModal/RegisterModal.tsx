import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { CreateUserRequest } from '../../realApi/usersServiceApi';
import { UsersServiceApi } from '../../realApi/usersServiceApi';
import { loginUser } from '../../realApi/authApi';


interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onRegisterSuccess?: () => void;
}

export const RegisterModal = ({ 
  isOpen, 
  onClose, 
  onLoginClick,
  onRegisterSuccess 
}: RegisterModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    lastName: '',
    middleName: ''
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!isChecked) {
      setError('Необходимо согласие на обработку персональных данных');
      return;
    }

    if (!formData.email || !formData.password || !formData.firstName) {
      setError('Заполните обязательные поля');
      return;
    }

    setIsLoading(true);

    try {
      const userData: CreateUserRequest = {
        login: formData.email,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName || '',
        middleName: formData.middleName || '',
        isAdmin: false,
        communication: {
          type: 'Email',
          value: formData.email
        },
        password: formData.password // Добавляем пароль в запрос
      };

      const api = new UsersServiceApi();
      
      // Обрабатываем ответ API правильно
      const response = await api.user.createUser(userData);

      // Проверяем наличие данных и ошибок в ответе
      if (response.data && !response.error) {
        // Успешная регистрация - пробуем войти
        try {
          const loginResponse = await loginUser({
            loginData: formData.email,
            password: formData.password
          });

          if (loginResponse) {
            onClose();
            onRegisterSuccess?.();
          }
        } catch (loginError) {
          setError('Регистрация успешна! Теперь вы можете войти.');
          onLoginClick(); // Предлагаем войти
        }
      } else {
        // Обрабатываем ошибки API
        const apiError = response.error;
        let errorMessage = 'Ошибка регистрации';
        
        if (typeof apiError === 'string') {
          errorMessage = apiError;
        } else if (apiError?.message) {
          errorMessage = apiError.message;
        } else if (Array.isArray(apiError?.errors)) {
          errorMessage = apiError.errors.join(', ');
        }

        setError(errorMessage);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка при регистрации');
      console.error('Registration error:', err);
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
            Регистрация
          </Dialog.Title>
          
          <form onSubmit={handleSubmit} className="mt-4 text-2sm space-y-4">
            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}
            
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Имя*"
              className="w-full p-2 bg-white rounded shadow-sm"
              required
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Фамилия"
              className="w-full p-2 bg-white rounded shadow-sm"
            />

            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Отчество"
              className="w-full p-2 bg-white rounded shadow-sm"
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail*"
              className="w-full p-2 bg-white rounded shadow-sm"
              required
            />
            
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль* (минимум 6 символов)"
              className="w-full p-2 bg-white rounded shadow-sm"
              required
              minLength={6}
            />

            <div className="flex items-start gap-4">
              <button
                type="button"
                onClick={() => setIsChecked(!isChecked)}
                className={`w-5 h-5 mt-1 rounded border-2 flex items-center justify-center border-[rgb(43,64,143)] ${isChecked ? 'bg-[rgb(43,64,143)]' : 'bg-white'}`}
              >
                {isChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <span className='text-sm flex-1'>
                Я согласен на обработку моих персональных данных в соответствии с политикой конфиденциальности*
              </span>
            </div>

            <div className='flex justify-center gap-6 mt-2'>
              <button
                type="submit"
                disabled={isLoading}
                className="w-75 h-12 text-white py-1 text-2xl bg-[rgb(43,64,143)] rounded-full disabled:opacity-50"
                style={{ fontFamily: 'Akrobat' }}
              >
                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
            </div>

            <div className="text-center text-sm mt-4">
              Уже есть аккаунт?{' '}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLoginClick();
                }}
                className="text-[rgb(43,64,143)] hover:text-[rgb(27,32,49)] font-medium"
              >
                Войти
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};