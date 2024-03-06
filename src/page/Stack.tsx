import htmlLogo from "../assets/image-stack/html-logo.svg";
import cssLogo from "../assets/image-stack/css-logo.svg";
import javaLogo from "../assets/image-stack/java-logo.svg";
import typescriptLogo from "../assets/image-stack/typescript-logo.svg";
import reactLogo from "../assets/image-stack/react-logo.svg";
import springLogo from "../assets/image-stack/spring-logo.svg";
import tailwindLogo from "../assets/image-stack/tailwind-logo.svg";
import expoLogo from "../assets/image-stack/expo-logo.svg";
import nodeLogo from "../assets/image-stack/node-logo.svg";
import prismaLogo from "../assets/image-stack/prisma-logo.svg";
import gitLogo from "../assets/image-stack/git-logo.svg";
import mysqlLogo from "../assets/image-stack/mysql-logo.svg";

export function Stack() {
  return (
    <div className="text-storm-dust-500 text-left">
      <h2 className="text-prussian-900 font-bold text-4xl text-left mt-10 mb-6">
        Minhas Tech Stack
      </h2>
      <p>Tecnologias com as quais tenho trabalhado recentemente</p>
      <div className="grid grid-cols-6 gap-3 mt-5">
        <img src={htmlLogo} alt="Logo do HTML5" />
        <img src={cssLogo} alt="Logo do CSS3" />
        <img src={javaLogo} alt="Logo do Java" />
        <img src={typescriptLogo} alt="Logo do TypeScript" />
        <img src={reactLogo} alt="Logo do React" />
        <img src={springLogo} alt="Logo do Spring boot" />
        <img src={tailwindLogo} alt="Logo do Tailwind" />
        <img src={expoLogo} alt="Logo do Expo" />
        <img src={nodeLogo} alt="Logo do NodeJS" />
        <img src={prismaLogo} alt="Logo do Prisma ORM" />
        <img src={gitLogo} alt="Logo do Git" />
        <img src={mysqlLogo} alt="Logo do MySQL" />        
      </div>
    </div>
  );
}