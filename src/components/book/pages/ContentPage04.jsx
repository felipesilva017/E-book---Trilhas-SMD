import image1 from '../../../assets/console-de-jogos.PNG'
import image2 from '../../../assets/jogo-de-rpg.PNG'
import image3 from '../../../assets/desenvolvimento-de-jogos.PNG'
import { BrowserBar, InnerLine, PageBadge } from '../VisualAccents'
import PageFrame from '../PageFrame'

function ContentPage04() {
  return (
    <PageFrame
      ariaLabel="Pagina de conteudo 4"
      className="bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]"
    >
      <BrowserBar />
      <InnerLine />

      <div className="relative z-20 flex h-[calc(100%-58px)] flex-col gap-6 px-[52px] pb-[136px] pt-[58px] max-lg:px-[26px] max-lg:pb-[124px] max-lg:pt-[42px]">
        <div className="max-w-[68ch]">
          <h2 className="m-0 font-display text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.06] text-[#0d120c]">
            Jogos Digitais (A Criação de Mundos)
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-3 lg:pr-6">
            <p className="m-0 max-w-[46ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.6] text-[#293015] text-justify">
              E se as regras do mundo pudessem ser reescritas por você? A trilha de Jogos Digitais equilibra a matemática da programação com a sensibilidade da arte e da cultura. Mais do que entretenimento, você projeta universos inteiros, define a psicologia do jogador e domina as ferramentas que transformam códigos e polígonos em experiências interativas inesquecíveis.
            </p>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="flex w-full max-w-[150px] flex-col gap-2">
              <div className="relative min-h-[63px] rounded-[20px] border-[4px] border-[#1a1a1a] bg-[linear-gradient(180deg,#ffffff_0%,#f3f3f3_100%)] p-2 shadow-[0_10px_0_rgba(0,0,0,0.12)]">
                <img
                  src={image1}
                  alt="Ilustracao do personagem principal"
                  className="block h-full w-full object-contain"
                />
              </div>
              <div className="relative min-h-[63px] rounded-[20px] border-[4px] border-[#1a1a1a] bg-[linear-gradient(180deg,#ffffff_0%,#f3f3f3_100%)] p-2 shadow-[0_10px_0_rgba(0,0,0,0.12)]">
                  <img
                  src={image2}
                  alt="Ilustracao do personagem principal"
                  className="block h-full w-full object-contain"
                />
              </div>
              <div className="relative min-h-[63px] rounded-[20px] border-[4px] border-[#1a1a1a] bg-[linear-gradient(180deg,#ffffff_0%,#f3f3f3_100%)] p-2 shadow-[0_10px_0_rgba(0,0,0,0.12)]">
                  <img
                  src={image3}
                  alt="Ilustracao do personagem principal"
                  className="block h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-[18px] z-30 flex items-end justify-between gap-4 px-[52px] max-lg:flex-col max-lg:items-start max-lg:px-[26px]">
        <small className="max-w-[30ch] text-[0.82rem] leading-[1.35] text-[#5e6654] max-lg:max-w-none">
          Passe a mão no sensor para esquerda ou direita para virar.
        </small>
      </footer>
      <PageBadge>Pagina 4</PageBadge>
    </PageFrame>
  )
}

export default ContentPage04