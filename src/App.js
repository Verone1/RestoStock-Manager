import { Routes, Route } from "react-router-dom";

import Frontend from "./frontend"
import Catalogue from "./pages/catalogue";
import Create from "./pages/create";
import Message from "./pages/message"
import CreateAM from "./pages/createAM";


function App() {
  return (
    <div className="app">
      <Frontend />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/create" element={<Create />} />
        <Route path="/createam" element={<CreateAM />} />
        <Route path="/message" element={<Message />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
