import Carousel from "./Carousel"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-medium">SMARTCASH</h1>

      <div className="text-lg text-center -mt-2">
        <p>Chega de planilhas confusas.</p>
        <p>Organize suas finanças de forma inteligente.</p>
      </div>


      <Carousel />

      <button className="bg-[#85E2B9] hover:bg-[#64C99D] text-black font-medium py-2 px-4 rounded-md shadow transition duration-300">
        <Link to="/project">
          Saiba Mais
        </Link>
      </button>
    </main>
  )
}
