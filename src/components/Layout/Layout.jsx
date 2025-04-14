import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Outlet />

      <footer>
        <p>Todos os direitos reservados. &copy; Diogo 2025</p>
      </footer>
    </div>
  )
}
