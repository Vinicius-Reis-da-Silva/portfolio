import logoImage from "../assets/logo.svg";
import whatsappLogo from "../assets/whatsapp-logo.svg";
import githubIcon from "../assets/githubIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import linkedin from "../assets/linkedinIcon.svg";

export function Contact() {
  return (
    <div>
      <h2
        className="text-prussian-900 font-bold text-left text-4xl py-16"
      >
        Contato
      </h2>
      <p className="text-5xl text-prussian-900 font-bold">
        Para qualquer dúvida, envie um e-mail:
      </p>
      <p
        className="mb-40 text-5xl font-bold font-DM bg-gradient-to-r leading-normal from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent"
      >
        <span>viniciusreisdev@gmail.com</span>
      </p>
      <div
        className="flex justify-between text-prussian-900 font-DM font-normal text-lg"
      >
        <img src={logoImage} alt="" />
        <div
         className="flex justify-between gap-11"
        >
          <a 
            href=""
            className="flex items-center gap-2"
          >
              <img 
                src={whatsappLogo} alt="" />
              <span>(91) 9 8334-9513</span>
          </a>

          <a 
            className="flex items-center"
            href=""
          >
            viniciusreisdev@gmail.com
          </a>

          <div 
            className="flex items-center gap-2 "
          >
            <a
              className="flex gap-5 fill-current text-prussian-900" 
              href="">
              <img
                className="w-8 h-8 fill-current text-prussian-900" 
                src={githubIcon} 
                alt="" 
              />
            </a>
            <a href="">
              <img src={twitterIcon} alt="" />
            </a>  
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>

      <hr className="w-full mt-6 mb-8 border-storm-dust-200 border-y-[1px]" />
      
      <footer>
        <ul
          className="flex gap-12 font-DM text-lg text-prussian-900 font-normal"
        >
          <li><a href="">Home</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Tecnologias</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Contatos</a></li>
        </ul>
      </footer>
    </div>
  );
}