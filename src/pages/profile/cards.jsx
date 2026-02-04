import { Mail, Globe } from "lucide-react";
import CardList from "./cardList";

function Cards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <CardList
        title="Общий чат"
        icon={<Mail size={26} />}
        color="from-blue-600 to-indigo-600"
      />

      <CardList
        title="Личные чаты"
        icon={<Globe size={26} />}
        color="from-purple-600 to-fuchsia-600"
      />
    </div>
  );
}

export default Cards;
