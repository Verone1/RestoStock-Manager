import { Routes, Route } from "react-router-dom";

import Catalogue from "./pages/catalogue";
import Frontend from "./frontend";
import Test from "./pages/test";

function App() {
  return (
    <div className="app">
      <Frontend />
      <Routes>
        <Route path="/" element={<Catalogue/>} />
        <Route path="/order" element={<Test/>} />
        <Route path="*" element={<h1>'page not found'</h1>} />
      </Routes>
    </div>
  );
}

export default App;