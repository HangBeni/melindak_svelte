export function NavBar() {
  return (
    <nav className="flex justify-between bg-pink-300 px-5 py-2">
      <div>
        <a className="font-['Dancing_Script',_recursive] text-2xl" href="/">
          Melindák
        </a>
      </div>
      <div className="flex gap-6 justify-center items-center font-['Pacifico',_cursive] uppercase">
        <a href="/">Főoldal</a>
        <a href="/rolunk">Rólunk</a>
        <a href="/foglalas">Foglalas</a>
        <a href="/itt-szulettem">Itt születtem</a>
      </div>
    </nav>
  );
}
