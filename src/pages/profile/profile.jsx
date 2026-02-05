import { Outlet, useLocation } from "react-router-dom";

import Header from "./header";
import SearchBar from "./searchBar";

function Profile() {
  const location = useLocation();

  // Проверяем: мы на /profile ?
  const isMain = location.pathname === "/profile";

  return (
    <section className="flex justify-center w-full min-h-screen sm:px-4 md:px-6 bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Если главная профиля → показываем контейнер */}
      {isMain ? (
        <div className="w-full max-w-sm px-3 py-2 shadow-xl sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:px-4 sm:py-3 md:px-6 md:py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl">
          <Header />
          <SearchBar />

          <Outlet />
        </div>
      ) : (
        // Если внутренняя страница → полный экран
        <div className="w-full min-h-screen px-1 md:px-8">
          <Outlet />
        </div>
      )}
    </section>
  );
}

export default Profile;
