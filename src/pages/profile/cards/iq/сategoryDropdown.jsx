import DropdownItem from "./dropdownItem";

function CategoryDropdown({ open, items = [] }) {
  return (
    <div
      className={`
        overflow-hidden
        transition-all duration-300 ease-in-out

        ${open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
      `}
    >
      <div className="bg-white border shadow-md dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-xl">
        {items.map((item) => (
          <DropdownItem key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryDropdown;
