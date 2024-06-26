import ToggleTheme from "../ToggleTheme/ToggleTheme";

function Header({ user }) {
  return(
    <div className="p-5 w-full sm:m-5 sm:rounded-xl bg-alura-200 dark:bg-dark-200 flex justify-between items-center">
      <span className="text-gray-100">Olá, { user || "Usuário" }</span>
      <h1 className="text-gray-100 text-2xl sm:text-4xl hover:scale-110">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  )
}

export default Header;
