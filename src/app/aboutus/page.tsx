import { BgImg } from "@/components/BgImg"
import Image from "next/image"

export default function AboutUs() {
  return (
    <BgImg href="/img/background/dicsecundario.png">
      <div className="items-center px-28 ">
        <h1 className="py-8 text-center text-4xl uppercase text-blue-400">
          Sobre Nós
        </h1>
        <div className="block">
          <div className="grid grid-cols-2 items-center gap-x-16 px-16 py-8">
            <div className="text-justify">
              <p>
                Tudo começou em uma aula de Libras na UNIFEI (Universidade
                Federal de Itajubá), em agosto de 2022, quando a professora
                Carol Sales notou que seus alunos haviam dificuldades em
                encontrar sinais específicos, que representassem seus cursos de
                formação. Assim, ela teve a brilhante ideia de iniciar uma
                pesquisa intitulada "O banco de sinais usado como ferramenta
                facilitadora na aprendizagem para alunos ouvintes na disciplina
                de Libras" para auxiliar seus alunos.
              </p>
            </div>
            <div className="">
              <Image
                alt="Unifei main building"
                src="/img/about/unifei_main.png"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="block">
          <div className="grid grid-cols-2 items-center gap-x-16 px-16 py-8">
            <div className="">
              <Image
                alt="Librex team"
                src="/img/about/librex_team.png"
                width={600}
                height={300}
              />
            </div>

            <div className="text-justify">
              <p>
                  Um desses alunos voluntários também era parte de um projeto de
                extensão da Unifei, Ex Machina, que tem como objetivo melhorar a
                qualidade de vida de pessoas com deficiência a partir de
                pesquisas e desenvolvimento de materiais de Tecnologia
                Assistiva. Esse aluno apresentou apresentou o projeto Ex Machina
                à professora e sugeriu uma parceria para o desenvolvimento de um
                site para a pesquisa, surgindo assim, o <strong>Librex</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="grid grid-cols-2 items-center gap-x-16 px-16 py-8">
            <div className="text-justify">
              <p>
                Hoje, o projeto <strong>Ex Machina</strong> é o responsável pelo desenvolvimento
                do Librex, enquanto os alunos voluntários e a professora seguem
                no desenvolvimento da pesquisa e do banco de dados de sinais do
                site.
              </p>
            </div>
            <div className="">
              <Image
                alt="ExMachina logo"
                src="/img/about/exmachina_logo.png"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </BgImg>
  )
}
