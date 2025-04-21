export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 text-lg">
      <div class>
        <p>Desenvolvido por: Diogo Silva.</p>
        <p>Turma: DESI 2024/1</p>
        <p>Unidade: SENAI São José</p>
      </div>

      <p className="w-[800px]">- Criei esse projeto de controle financeiro como parte do trabalho final da disciplina de Lógica de Programação. Escolhi desenvolver um sistema para controle de gastos porque era algo que já fazia parte da minha rotina, porém utilizava apenas uma planilha no Google. A ideia de transformar isso em um site surgiu da vontade de facilitar o registro dos meus gastos mensais e ter um controle mais eficiente e prático sobre minhas finanças. Além disso, foi uma ótima oportunidade de aplicar na prática os conceitos aprendidos durante a matéria.</p>

      <div className="flex items-center">
        <p>Tecnologias utilizadas:</p>

        <img className="w-8 h-8 ml-1.5" src="./public/html.svg" alt="Imagem Logo HMTL" />
        <img className="w-7.5 h-7.5 ml-1.5 mr-2.5" src="./public/css.svg" alt="Imagem Logo CSS" />
        <img className="w-7" src="./public/js.svg" alt="Imagem Logo Javascript" />
      </div>
    </main>
  )
}
