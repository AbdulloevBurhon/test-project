import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-lg
    font-medium
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
    `,
    secondary: `
      bg-zinc-100 text-zinc-900
      hover:bg-zinc-200
      dark:bg-zinc-800 dark:text-white
      dark:hover:bg-zinc-700
      focus:ring-zinc-400
    `,
    outline: `
      border border-blue-600
      text-blue-600
      hover:bg-blue-50
      dark:hover:bg-zinc-900
      focus:ring-blue-500
    `,
    danger: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-500
    `,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
