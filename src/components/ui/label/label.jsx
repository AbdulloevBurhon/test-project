function Label({ htmlFor, children, error }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block mb-1.5 text-sm font-medium
        ${error ? "text-red-500" : "text-zinc-700 dark:text-zinc-200"}
      `}
    >
      {children}
    </label>
  );
}

export default Label;
