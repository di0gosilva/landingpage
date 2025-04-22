export default function Project() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 py-6 px-2 lg:text-lg">
      <div className="text-2xl font-medium text-center">
        <h1>SMARTCASH</h1>
        <h1>Controlador Financeiro Pessoal</h1>
      </div>

      <div className="flex flex-col gap-1 max-w-[800px] w-full">
        <p>Muitas pessoas enfrentam dificuldades para acompanhar seus gastos mensais e manter um controle eficiente das finanças pessoais. Embora existam planilhas e aplicativos disponíveis, nem sempre são práticos ou personalizados para a realidade do usuário.</p>

        <p>Pensando nisso, desenvolvi um sistema web de controle financeiro que facilita o registro e o acompanhamento de receitas e despesas de forma simples, rápida e acessível. Diferente de planilhas tradicionais, a plataforma permite ao usuário visualizar seu saldo atualizado, visualizar gastos por categoria através de um gráfico e ter uma visão clara de sua saúde financeira mensal – tudo em um ambiente intuitivo e direto ao ponto.</p>

        <p>O projeto é voltado principalmente para estudantes, jovens adultos e qualquer pessoa que queira começar a organizar melhor sua vida financeira sem complicações, usando um sistema prático feito sob medida para necessidades reais do dia a dia.</p>
      </div>

      <div className="relative w-full max-w-[500px] mx-auto overflow-hidden rounded-lg shadow-lg my-1">
        <img className="w-full flex-shrink-0" src="./public/capa.svg" alt="" />
      </div>
      <a
        href="https://di0gosilva.github.io/site-controle-financeiro/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#85E2B9] hover:bg-[#64C99D] text-black font-medium py-2 px-4 rounded-md shadow transition duration-300"
      >
        Abrir Projeto
      </a>
    </main>
  )
}
