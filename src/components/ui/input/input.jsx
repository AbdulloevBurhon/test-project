import { forwardRef, useState } from "react";

const Input = forwardRef(
  (
    {
      className = "",
      error,
      shake,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [show, setShow] = useState(false);

    const isPassword = type === "password";

    return (
      <div className="relative w-full">
        {/* Left Icon */}
        {LeftIcon && (
          <span
            className="
              absolute
              left-3 top-1/2
              -translate-y-1/2
              text-zinc-400
              pointer-events-none
            "
          >
            <LeftIcon size={18} />
          </span>
        )}

        {/* Input */}
        <input
          ref={ref}
          type={isPassword && show ? "text" : type}
          {...props}
          className={`
            w-full
            py-2.5

            ${LeftIcon ? "pl-10" : "pl-3"}
            ${isPassword || RightIcon ? "pr-10" : "pr-3"}

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

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((p) => !p)}
            className="
              absolute
              right-3 top-1/2
              -translate-y-1/2
              text-zinc-400
              hover:text-zinc-600
              dark:hover:text-zinc-300
            "
          >
            {show ? "🙈" : "👁️"}
          </button>
        )}

        {/* Custom Right Icon */}
        {!isPassword && RightIcon && (
          <span
            className="
              absolute
              right-3 top-1/2
              -translate-y-1/2
              text-zinc-400
            "
          >
            <RightIcon size={18} />
          </span>
        )}
      </div>
    );
  },
);

export default Input;
