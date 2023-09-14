import "./scss/App.scss";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
