import bootstrap from '../src/assets/svg/skills/bootstrap.svg';
import css from '../src/assets/svg/skills/css.svg';
import docker from '../src/assets/svg/skills/docker.svg';
import firebase from '../src/assets/svg/skills/firebase.svg';
import html from '../src/assets/svg/skills/html.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import mongoDB from '../src/assets/svg/skills/mongoDB.svg';
import mysql from '../src/assets/svg/skills/mysql.svg';
import nextJS from '../src/assets/svg/skills/nextJS.svg';
import php from '../src/assets/svg/skills/php.svg';
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
    case 'docker':
      return docker;
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
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'php':
      return php;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    default:
      break;
  }
}
