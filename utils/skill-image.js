import css from '../src/assets/svg/skills/css.svg';
import html from '../src/assets/svg/skills/html.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import mongoDB from '../src/assets/svg/skills/mongoDB.svg';
import nextJS from '../src/assets/svg/skills/nextJS.svg';
import react from '../src/assets/svg/skills/react.svg';
import tailwind from '../src/assets/svg/skills/tailwind.svg';
import typescript from '../src/assets/svg/skills/typescript.svg';
import vitejs from '../src/assets/svg/skills/vitejs.svg';
import git from '../src/assets/svg/skills/git.svg';
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'git':
      return git;
    default:
      break;
  }
}
