import { Routes, Route } from "react-router-dom"
// Components
import Login from "./Components/Login";
import AuthContextProvider from "./Context/AuthContextProvider";
import Chats from "./Components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
