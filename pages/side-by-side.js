import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function SideBySide() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Side By Side"
        language="C#"
        library="Unity"
        desc="This was a 2.5-dimensional platformer game led by Yoon Lee, Erica Izzaguire, and Soham Kar. As a member of the programming
        team, I coded the chasing mechanic of the VedgeVog enemy as well as the hovering state and mechanic of the Bat enemy."
        url="https://vgdevgatech.wixsite.com/website/side-by-side"
        siteName="Side By Side VGDev Site and Download"
      />
    </div>
  )
}