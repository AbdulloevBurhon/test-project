import { forwardRef } from "react";

const Input = forwardRef(({ className = "", error, shake, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`
          w-full
          px-3 py-2.5

          rounded-md

          bg-white
          dark:bg-zinc-900

          border-2
          ${error ? "border-red-400" : "border-zinc-300 dark:border-zinc-700"}

          text-zinc-900
          dark:text-white

          placeholder:text-zinc-400
          dark:placeholder:text-zinc-500

          shadow-sm
          dark:shadow-inner

          focus:outline-none
          focus:ring-2

          ${
            error
              ? "focus:ring-red-300/40"
              : "focus:ring-blue-500/40 dark:focus:ring-white/20"
          }

          transition-all
          duration-200

          ${shake ? "animate-shake" : ""}

          ${className}
        `}
    />
  );
});

export default Input;
