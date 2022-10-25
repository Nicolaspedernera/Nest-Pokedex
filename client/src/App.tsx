import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {RequestAPI} from "./components/RequestAPI";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <RequestAPI />
    </main>
  );
}

export default App;
