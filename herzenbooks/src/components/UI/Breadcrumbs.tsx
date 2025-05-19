import { useLocation, useNavigate } from "react-router-dom";

const pathTranslations: Record<string, string> = {
  catalog: "каталог",
  cart: "корзина",
  account: "аккаунт",
  book: "описание книги"
};

export function Breadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const pathnames = location.pathname.split("/").filter(Boolean); // Удаляем пустые строки

  // Если мы на главной странице, не показываем хлебные крошки
  if (pathnames.length === 0) {
    return null;
  }

  // Функция для получения отображаемого имени пути
  const getDisplayName = (path: string) => {
    // Проверяем, есть ли перевод в словаре
    return pathTranslations[path.toLowerCase()] || path;
  };

  return (
    <nav className="flex w-5/6 mt-15 mx-auto items-start mb-4">
      <ol className="flex items-center gap-2 text-m text-black">
        <li>
          <button 
            onClick={() => navigate("/")}
            className=" "
          >
            главная страница
          </button>
        </li>

        {pathnames.map((path, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const displayName = getDisplayName(path);

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
                  className=" "
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