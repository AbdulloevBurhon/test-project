import { useState } from "react";

import CategoryButton from "./CategoryButton";
import CategoryDropdown from "./сategoryDropdown";

function CategoryHeader({ title, items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <CategoryButton
        title={title}
        open={open}
        onClick={() => setOpen((p) => !p)}
      />

      <CategoryDropdown open={open} items={items} />
    </div>
  );
}

export default CategoryHeader;
