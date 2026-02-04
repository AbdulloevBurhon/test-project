function PageLayout({ children }) {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-4

        bg-gradient-to-br

        from-blue-100 via-white to-indigo-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
      "
    >
      <div
        className="
          w-full
          max-w-5xl
          rounded-2xl
          p-6 sm:p-10

          bg-white/70
          dark:bg-zinc-900/70

          backdrop-blur-xl
          shadow-xl
        "
      >
        {children}
      </div>
    </section>
  );
}

export default PageLayout;
