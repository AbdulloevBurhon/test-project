import { Trophy } from "lucide-react";

function TrophyBox({ value }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400 font-semibold">
      <Trophy size={18} />
      <span>{value}</span>
    </div>
  );
}

export default TrophyBox;
