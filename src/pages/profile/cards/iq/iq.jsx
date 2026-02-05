import { ChevronLeft, Brain, Search, Monitor, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/button/button";
import Input from "../../../../components/ui/input/input";
import CategoryHeader from "./сategoryHeader";

function Iq() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="relative flex items-center h-12 sm:h-20">
        {/* BACK BUTTON */}
        <Button
          onClick={() => navigate("/profile")}
          variant="secondary"
          size="icon"
          className="absolute"
        >
          <ChevronLeft size={22} />
        </Button>

        {/* TITLE */}
        <h1 className="flex items-center gap-2 mx-auto text-lg font-semibold sm:text-xl text-zinc-900 dark:text-white">
          {/* ИКОНКА */}
          <Brain size={22} className="text-blue-600 dark:text-blue-400" />
          {/* ТЕКСТ */}
          IQ Tests
        </h1>
      </div>

      {/* CONTENT */}
      <div className="px-3 py-2 text-black sm:px-6 dark:text-white">
        <div className="px-1.5 py-1.5 sm:px-6 mb-4 ">
          <Input
            type="search"
            placeholder="Поиск..."
            leftIcon={Search}
            className="h-8 sm:h-12"
          />
        </div>
        {/* <div>
          <div className="flex items-center justify-between py-2">
            <h1>Сфера It</h1>
            <div>
              <div>
                <Monitor />
              </div>
              <div>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <CategoryHeader title="Сфера IT" items={["Frontend", "Backend"]} />

          <CategoryHeader title="GameDev" items={["Unity", "Unreal"]} />
        </div>
      </div>
    </div>
  );
}

export default Iq;
