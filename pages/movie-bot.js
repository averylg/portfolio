import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function MovieBot() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Movie Bot"
        language="Python"
        library="Discord.py, PyMongo (MongoDB Python wrapper)"
        desc="This was a bot that I created for my friends' Discord server to search for and poll movies and shows to watch. First, you run a command
        to search for a particular movie title, and the bot makes a call to the Open Movie Database API. The user can choose from the results
        that the bot presents to add a title to the watchlist. The watchlist contains the chosen movie and show titles and their vote counts
        and is stored on a MongoDB database. Users can then view the watchlist and cast their votes for movies and shows to watch. Ultimately,
        I want to branch this bot off to do more than just movie polling, and thus this bot is still being maintained and updated."
      />
    </div>
  )
}