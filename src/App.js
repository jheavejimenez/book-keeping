import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Incoming from "./pages/Admin/Incoming";
<<<<<<< HEAD
import ProtectedRoute from "./context/PrivateRoute";
=======
import RequestPage from "./pages/Admin/RequestPage";

>>>>>>> d20684887e0f8d3b9a3723ecaf81bb2157470b71

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
<<<<<<< HEAD
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path="/incoming" element={<ProtectedRoute><Incoming/></ProtectedRoute>}/>
=======
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/request" element={<RequestPage/>}/>
            <Route path="/incoming" element={<Incoming/>}/>
            
>>>>>>> d20684887e0f8d3b9a3723ecaf81bb2157470b71
        </Routes>
    );
}

export default App;
