import Header from "./header";
import SearchBar from "./searchBar";
import Cards from "./cards";

function Profile() {
  return (
    <section
      className="
        min-h-[calc(100vh-64px)]
        w-full
        flex justify-center

        bg-gradient-to-br
        from-blue-100 via-white to-indigo-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
      "
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          max-w-sm
          md:max-w-md
          lg:max-w-lg

          px-3
          sm:px-4
          md:px-6

          py-4

          bg-white/80
          dark:bg-zinc-900/80

          backdrop-blur-xl
          rounded-2xl
          shadow-xl
        "
      >
        <Header />
        <SearchBar />
        <Cards />
      </div>
    </section>
  );
}

export default Profile;
