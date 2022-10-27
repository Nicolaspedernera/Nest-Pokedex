import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {PokemonResponse} from "./components/PokemonResponse";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <PokemonResponse />
    </main>
  );
}

export default App;
