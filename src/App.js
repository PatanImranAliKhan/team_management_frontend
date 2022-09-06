import IndexHome from "./components/IndexHome/IndexHome";
import IndexHeader from "./components/Authenticate/IndexHeader/IndexHeader";
import Login from "./components/Authenticate/Login/Login";
import Signup from "./components/Authenticate/Signup/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><IndexHeader /><IndexHome/> </>} />
          <Route path="/login" element={<><IndexHeader /><Login/> </>} />
          <Route path="/signup" element={<><IndexHeader /><Signup /> </>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
