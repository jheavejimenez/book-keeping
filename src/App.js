import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Incoming from "./pages/Admin/Incoming";
import ProtectedRoute from "./context/PrivateRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path="/incoming" element={<ProtectedRoute><Incoming/></ProtectedRoute>}/>
        </Routes>
    );
}

export default App;
