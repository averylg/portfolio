import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import textbox from "../styles/textbox.module.css";
import Navbar from "../components/Navbar.js";
import navStyles from "../styles/navbar.module.css";
import imageStyles from "../styles/images.module.css";
import pfp from "../public/images/face.jpg";
import Project from "../components/Project.js";
import ps from "../styles/projects.module.css";
import Description from "../components/Description.js";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <Navbar className={navStyles.bigRectangle} />
        <div className={styles.main}>
          <div className={textbox.headerBox}>
            <h1 className={textbox.headerText}>Avery Greer</h1>
            <div className={imageStyles.positioning}>
              <Image
                src={pfp}
                width={pfp.width / 10}
                height={pfp.height / 10}
                className={imageStyles.pfp}
                alt="Image of me"
              />
            </div>
          </div>
          <div className={textbox.bodyParagraph}>
            <h2 className={textbox.bpTextTitle}>Welcome to my portfolio!</h2>
            <p className={textbox.bpText}>
              My name is Avery Greer. I'm a software and video
              game developer currently studying Computer Science at the Georgia
              Institute of Technology with threads in Media and Intelligence.
              Feel free to take a look at some of my
              past projects!
            </p>
          </div>
          <div class={ps.gallery}>
            <Project
              name="DisasterGuard"
              imgName={ps.disasterGuard}
              page="/disasterguard"
            />
            <Project
              name="One Mil-Lion"
              imgName={ps.oneMilLion}
              page="/one-mil-lion"
            />
            <Project
              name="Discord Movie Bot"
              imgName={ps.discordBot}
              page="/movie-bot"
            />
            <Project
              name="Evolution: Arcade Map Capture Plugin"
              imgName={ps.evolution}
              page="/evolution"
            />
            <Project name="Portfolio" page="/site-description" />
            <Project name="Paravoid" imgName={ps.paravoid} page="/paravoid" />
            <Project
              name="Side-By-Side"
              imgName={ps.sbs2}
              page="/side-by-side"
            />
            <Project
              name="SFML Pong Clone"
              imgName={ps.pong}
              page="/sfml-pong"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
