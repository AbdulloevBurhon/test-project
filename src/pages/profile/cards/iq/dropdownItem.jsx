import { useNavigate } from "react-router-dom";

function DropdownItem({ text }) {
  const navigate = useNavigate();

  const slug = text.toLowerCase(); // Frontend → frontend

  return (
    <button
      onClick={() => navigate(`/profile/iq/${slug}`)} // ✅ ПЕРЕХОД
      className="
        w-full
        text-left

        px-4 py-2.5

        text-sm
        sm:text-base

        text-zinc-800
        dark:text-zinc-200

        hover:bg-zinc-100
        dark:hover:bg-zinc-800

        transition
      "
    >
      {text}
    </button>
  );
}

export default DropdownItem;
