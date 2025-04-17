import { useLocation, useNavigate } from "react-router-dom";
//?????? переделать надо
const pathTranslations: Record<string, string> = {
  catalog: "каталог",
  cart: "корзина",
  account: "аккаунт",
};

export function Breadcrumbs() {
  // хук для получения текущего пути
  const location = useLocation();
  // хук для программной навигации
  const navigate = useNavigate();
  
  const pathnames = location.pathname.split("/");

  const isHomePage = pathnames.length === 0;
  
  const isBookPage = pathnames[0] === "book" && pathnames.length > 1;

  if (isHomePage) {
    return null;
  }

  // Функция для получения отображаемого имени пути
  const getDisplayName = (path: string) => {
    // Для страницы книги используем название книги из API
    if (path === "book") return null;
    
    // Проверяем, есть ли перевод в словаре
    return pathTranslations[path] || path;
  };

  return (
    <nav className="flex w-5/6 mt-15 mx-auto items-start mb-4">
      <ol className="flex items-center gap-2 text-m text-black">
        <li>
          <button 
            onClick={() => navigate("/")}
            className="hover:text-blue-500"
          >
            главная страница
          </button>
        </li>

               {pathnames.map((path, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const displayName = getDisplayName(path);

          // зачем то пропускаем "book" в пути (для страницы книги)
          if (!displayName) return null;

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="font-medium">
                  {displayName}
                </span>
              ) : (
                <button
                  onClick={() => navigate(routeTo)}
                  className=""
                >
                  {displayName}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}