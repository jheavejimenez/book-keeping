import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    );
}

export default App;
