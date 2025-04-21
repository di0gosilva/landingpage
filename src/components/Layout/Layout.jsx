import { Outlet } from "react-router-dom";
import Header from "../Layout/Header"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D5E0DC]">
      <div className="mx-auto w-[1080px]">
        <Header />
      </div>

      <div className="flex flex-1 w-[1080px] mx-auto">
        <Outlet />
      </div>

      <footer className="h-10 flex items-center justify-between w-[1080px] mx-auto">
        <p>Todos os direitos reservados.</p>
        <p>&copy; Diogo Silva 2025</p>
      </footer>
    </div>
  )
}
