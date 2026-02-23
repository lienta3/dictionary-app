import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1>Dictionary App</h1>
        <Dictionary defaultKeyword="sunrise" />
      </main>
      <footer>Coded by Lien Ta</footer>
    </div>
  );
}

export default App;
