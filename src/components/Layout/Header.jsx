import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-9" src="./logo.svg" />
        <h1 className="font-medium uppercase text-[18px]">SmartCash</h1>
      </Link>

      <nav className="flex gap-4">
        <Link className="hover:text-[#64C99D] transition duration-300" to="/about">Sobre</Link>
        <Link className="hover:text-[#64C99D] transition duration-300" to="/project">Projeto</Link>
        <Link className="hover:text-[#64C99D] transition duration-300" to="/contact">Contato</Link>
      </nav>
    </header>
  )
}
