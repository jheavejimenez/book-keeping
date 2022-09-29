import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Incoming from "./pages/Admin/Incoming";
import RequestPage from "./pages/Admin/RequestPage";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/request" element={<RequestPage/>}/>
            <Route path="/incoming" element={<Incoming/>}/>
            
        </Routes>
    );
}

export default App;
