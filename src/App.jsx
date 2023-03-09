import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
