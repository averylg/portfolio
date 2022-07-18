import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function OutOfPocket() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Out of Pocket"
        language="C#"
        library="Unity 3D"
        desc="Out of Pocket is a narrative-driven game where the player plays pool with
        dice as the billiard balls, along with other experimental mechanics that the narrator
        wants to try. As a member of a 15-person team for this jam, I programmed the UI for
        the score in the game as well as the tutorial annotations for the click-and-drag
        mechanic for the pool stick and for the table-tilting mechanic."
        url="https://randomerz.itch.io/out-of-pocket"
        siteName="Out of Pocket - GMTK 2022 Entry"
      />
    </div>
  )
}