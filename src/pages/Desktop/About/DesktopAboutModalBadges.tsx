import styles from './DesktopAboutModal.module.css';

export const DesktopAboutModalBadges = () => {
  const { grid } = styles;

  return (
    <div className={grid}>
      <img
        alt="React"
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
      />
      <img
        alt="Vue"
        src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"
      />
      <img
        alt="Typescript"
        src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      />
      <img
        alt="Javascript"
        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      />
      <img
        alt="Node"
        src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
      />
      <img
        alt="Nest"
        src="https://img.shields.io/badge/Nest-EA286C?style=for-the-badge&logo=nestjs&logoColor=white"
      />
      <img
        alt="Git"
        src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
      />
      <img
        alt="HTML"
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
      />
      <img
        alt="CSS"
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
      />
      <img
        alt="MongoDB"
        src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
      />
    </div>
  );
};
