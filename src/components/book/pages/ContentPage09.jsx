import { BrowserBar, InnerLine, PageBadge } from '../VisualAccents'
import PageFrame from '../PageFrame'
import image1 from '../../../assets/unity.PNG'
import image2 from '../../../assets/unreal.PNG'



function ContentPage09() {
  return (
    <PageFrame
      ariaLabel="Pagina de conteudo 9"
      className="bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]"
    >
      <BrowserBar />
      <InnerLine />

      <div className="relative z-20 flex h-[calc(100%-58px)] flex-col gap-3 px-[52px] pb-[92px] pt-[58px] max-lg:px-[26px] max-lg:pb-[76px] max-lg:pt-[42px]">
        <h2 className="mb-4 font-display text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.06] text-[#0d120c]">
            Animação e Audiovisual (O Movimento e a Narrativa)
          </h2>
        <p className="m-0 max-w-[38ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.55] text-[#293015] text-justify">
          <strong>Objetivo:</strong> Capacitar os estudantes em diferentes meios de comunicação, usando recursos multimidiáticos na produção de projetos práticos.
        </p>
        <p className="m-0 max-w-[38ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.55] text-[#293015] text-justify">
          <strong>Foco:</strong> Explorar ferramentas tecnológicas e conhecimentos operacionais aplicados à produção artística, cultural e multimídia.
        </p>
        <p className="m-0 max-w-[38ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.55] text-[#293015] text-justify">
          <strong>Disciplinas Chave:</strong> Linguagem Audiovisual, Fotografia Digital, Animação 2D e 3D, Videografismo, Edição Audiovisual e Rigging 3D.
        </p>
      </div>

      <footer className="absolute inset-x-0 bottom-[18px] z-30 flex items-end justify-between gap-4 px-[52px] max-lg:flex-col max-lg:items-start max-lg:px-[26px]">
        <small className="max-w-[30ch] text-[0.82rem] leading-[1.35] text-[#5e6654] max-lg:max-w-none">
          Passe a mão no sensor para esquerda ou direita para virar.
        </small>
      </footer>
      <PageBadge>Pagina 9</PageBadge>
    </PageFrame>
  )
}

export default ContentPage09