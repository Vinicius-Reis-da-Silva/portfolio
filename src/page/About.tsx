import { Card } from "../components/Card";

export function About() {
  return (
    <div className="min-w-80 max-w-screen-md">
      <div>
        <h2 className="text-prussian-900 font-bold text-4xl text-left mt-10 mb-9">
          Sobre Me
        </h2>
        <p className="text-lg text-left text-storm-dust-500">
          Olá, meu nome é <strong>Vinicius Reis da Silva</strong> sou estudante do curso de Engenharia de 
          Computação na Universidade Federal do Pará. Atualmente, estou me
          especializando na área de desenvolvimento Full Stack, utilizando tecnologias 
          como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong> e <strong>Tailwind</strong> para o 
          Front-end. No Back-end, trabalho com <strong>NodeJS</strong> junto ao <strong>Fastify</strong> e também trabalho com <strong>Spring Boot Java</strong>, e utilizo bancos de 
          dados <strong>SQLite</strong> e <strong>MySQL</strong> com o <strong>ORM Prisma</strong>. Além disso, também desenvolvo alguns 
          projetos mobile em <strong>React Native</strong>, utilizando <strong>Expo</strong>. 
        </p>
      </div>
      <div>
        <h2 className="text-prussian-900 font-bold text-4xl text-left mt-10 mb-9">
          Experiência de Trabalho
        </h2>
        <Card 
          title="DevOps Developer" 
          status="Estágio"
          info="TT & T Soluções em Informatica LTDA" 
          location="Remoto" 
          date="Jul 2023 - o momento"
        />
      </div>
      <div>
        <h2 className="text-prussian-900 font-bold text-4xl text-left mt-10 mb-9">
          Formação Acadêmica
        </h2>
        <Card 
          title="Bacharel em Engenharia de Computação" 
          status="9º Semestre"
          info="Universidade Federal do Pará - UFPA" 
          location="Castanhal-PA" 
          date="Ago 2018 - Dec 2023"
        />
      </div>
    </div>
  );
}