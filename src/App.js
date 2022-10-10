import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import VerifyEmail from './pages/Auth/VerifyEmail'
import Signup from "./pages/Auth/Signup";
import Outgoing from "./pages/Admin/Outgoing";
import Incoming from "./pages/Admin/Incoming";
import RequestPage from "./pages/Admin/RequestPage";
import { ProtectedRoute } from "./pages/Auth/ProtectRoutes";
import Accountsettings from "./pages/Admin/Accountsettings";
import Forgotpass from "./pages/Auth/Forgotpass";
import ClientDashboard from "./pages/Client/ClientDashboard";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
            <Route path='/forgotpass' element={<Forgotpass />} />

            <Route path="admin/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path="admin/incoming" element={
                <ProtectedRoute>
                    <Incoming />
                </ProtectedRoute>
            } />
            <Route path="admin/request" element={
                <ProtectedRoute>
                    <RequestPage />
                </ProtectedRoute>
            } />
            <Route path="admin/outgoing" element={
                <ProtectedRoute>
                    <Outgoing />
                </ProtectedRoute>
            } />
            <Route path="admin/accountsettings" element={
                <ProtectedRoute>
                    <Accountsettings />
                </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <ClientDashboard />
                </ProtectedRoute>
            } />
            
        </Routes>
    )
}

export default App;
