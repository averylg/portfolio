import Navbar from "../components/Navbar.js";
import Specs from "../components/Specs.js";

export default function PortfolioDesc() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Portfolio"
        language="HTML/CSS, JavaScript"
        library="Next.js"
        desc="This. I created this portfolio in Next.js, a framework based on React, and coded custom CSS elements to style up the website."
        url="/"
        siteName="Homepage"
      />
    </div>
  );
}
