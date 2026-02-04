import { Outlet } from "react-router-dom";
import Header from "./header/header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 w-full">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4 sm:px-6 lg:px-8
            py-6
          "
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
