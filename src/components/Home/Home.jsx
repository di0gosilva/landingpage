import Carousel from "./Carousel"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-medium">SMARTCASH</h1>
      <p className="text-lg">Chega de planilhas confusas. Organize suas finanças de forma inteligente.</p>
      <Carousel />
      <button className="bg-[#85E2B9] hover:bg-[#64C99D] text-white font-semibold py-2 px-4 rounded-md shadow transition duration-300">
        <Link to="/project">
          Saiba Mais
        </Link>
      </button>
    </main>
  )
}
