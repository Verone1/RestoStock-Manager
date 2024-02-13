import { Routes, Route } from "react-router-dom";

import Frontend from "./frontend"
import Catalogue from "./pages/catalogue";
import Create from "./pages/create";
import Message from "./pages/message"
import CreateAM from "./pages/createAM";
import Modify from "./pages/modify";
import Report from "./pages/report";
import Approval from "./pages/approval";

function App() {
  return (
    <div className="app">
      <Frontend />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/create" element={<Create />} />
        <Route path="/createam" element={<CreateAM />} />
        <Route path="/message" element={<Message />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/report" element={<Report />} />
        <Route path="/approval" element={<Approval />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
