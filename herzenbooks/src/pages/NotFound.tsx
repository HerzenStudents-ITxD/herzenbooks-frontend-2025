import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow  bg-[rgb(239,242,245)]"style={{ fontFamily: 'Akrobat' }}>

    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mb-4">Страница не найдена</p>
      <img src="not_found.svg" alt="" />
      <button 
        onClick={() => navigate('/')} 
        className=' w-32 h-10 mt-6 mb-10 text-lg bg-[rgb(43,64,143)] text-white hover:bg-[rgb(26,33,58)] hover:text-white transition-colors duration-200  rounded-full '> 
            на главную
        </button>
    </div>

    </main>
  );
};