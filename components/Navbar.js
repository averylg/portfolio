import navStyles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className={navStyles.bigRectangle}>
      <a href="/" className={navStyles.items}>Home</a>
      <a href="/resume" className={navStyles.items}>Experience</a>
      <a target="_blank" className={navStyles.items} href="https://github.com/averylg">GitHub</a>
      <a target="_blank" href="https://www.linkedin.com/in/agreer350/" className={navStyles.items}>LinkedIn</a>
      {/* <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={navStyles.items}>Link Four</a> */}
    </div>
  )
}