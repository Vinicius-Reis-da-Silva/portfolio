import logo from '../assets/logo.svg';
import githubIcon from '../assets/githubIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import linkedInIcon from '../assets/linkedinIcon.svg';
import imgPerfil from '../assets/perfil-img.png';

export function Home() {
  return (
    <>
      <header className='font-medium text-gray-500 flex items-center justify-between '>
        <div>
          <img src={logo} alt="Portifolio logo" className='w-24 h-16' />
        </div>
        <nav >
          <ul className='font-DM flex justify-between space-x-4 text-xl'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Tech Stack</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contatos</a>
            </li>
            <li>
              <img src={githubIcon} alt="GitHub Logo" />
            </li>
            <li>
              <img src={twitterIcon} alt="Twitter Logo" />
            </li>
            <li>
              <img src={linkedInIcon} alt="LinkedIn Logo" />
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex mt-12 p-4 justify-between items-center '>
        <div className=''>
          <h1 className='font-bold text-left text-6xl'>
            Oi 👋,
            <br />
            Meu nome é
            <strong
              className='bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block text-transparent bg-clip-text'
            >
              Vinicius Reis
            </strong>
            <br />
            Sou Desenvolvedor Full-Stack
          </h1>
        </div>
        <aside>
          <img src={imgPerfil} alt="Perfil Image" className='w-80' />
        </aside>
      </main>
    </>
  );
}