import { ChevronLeft, Brain, Search } from "lucide-react";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import Button from "../../../../components/ui/button/button";
import Input from "../../../../components/ui/input/input";
import CategoryHeader from "./сategoryHeader";

function Iq() {
  const navigate = useNavigate();
  const { category } = useParams();

  const titles = {
    frontend: "Вопросы по Frontend",
    backend: "Вопросы по Backend",
    unity: "Вопросы по Unity",
    unreal: "Вопросы по Unreal",
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="relative flex items-center h-12 sm:h-20">
        {/* BACK */}
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          size="icon"
          className="absolute"
        >
          <ChevronLeft size={22} />
        </Button>

        {/* TITLE */}
        <h1 className="flex items-center gap-2 mx-auto text-lg font-semibold sm:text-xl text-zinc-900 dark:text-white">
          <Brain size={22} className="text-blue-600 dark:text-blue-400" />

          {category ? titles[category] || "IQ Tests" : "IQ Tests"}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="px-3 py-2 sm:px-6 dark:text-white">
        {/* SEARCH — только на главной */}
        {!category && (
          <div className="px-1.5 py-1.5 sm:px-6 mb-4">
            <Input
              type="search"
              placeholder="Поиск..."
              leftIcon={Search}
              className="h-8 sm:h-12"
            />
          </div>
        )}

        {/* CATEGORIES — только на главной */}
        {!category && (
          <div className="flex flex-col gap-2">
            <CategoryHeader title="Сфера IT" items={["Frontend", "Backend"]} />

            <CategoryHeader title="GameDev" items={["Unity", "Unreal"]} />
          </div>
        )}

        {/* QUESTIONS */}
        {category && (
          <div className="">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default Iq;
