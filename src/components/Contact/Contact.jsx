import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("diogo_silva8@estudante.sesisenai.org.br")
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <main className="max-w-[1080px] w-full mx-auto relative flex flex-1 flex-col items-center justify-center gap-10 text-lg text-center px-3">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-medium">
        <a
          href="mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!"
          className="hover:text-[#64C99D] transition duration-300"
        >
          Enviar Email
        </a>
        </h1>

        <h1 className="text-4xl font-medium">|</h1>

        <button
          className="text-4xl font-medium hover:text-[#64C99D] hover:border-b-[#64C99D] transition duration-300 hover:cursor-pointer"
          onClick={handleCopy}
        >
          Copiar Email
        </button>

        {copied && (
            <span
              className="absolute top-2 right-1 bg-[#64C99D] p-2 rounded text-center mt-2 mr-4 text-xl"
            >
              Email Copiado!
            </span>
        )}
        </div>

        <div className="flex items-center gap-10">
          <a
            href="https://www.linkedin.com/in/diogo-silva-ba702495/"
            className="hover:text-[#64C99D] transition duration-300"
            rel='noreferrer'
            target='_blank'
          >
            <img className="w-10.5" src="./public/linkedin.svg" alt="Logo Linkedin" />
          </a>

          <a
            href="https://github.com/di0gosilva"
            className="hover:text-[#64C99D] transition duration-300"
            rel='noreferrer'
            target='_blank'
          >
            <img className="w-10" src="./public/github.svg" alt="Logo Github" />
          </a>
        </div>
      </main>
  )
}
