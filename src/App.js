import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import VerifyEmail from './pages/Auth/VerifyEmail'
import Signup from "./pages/Auth/Signup";
import Incoming from "./pages/Admin/Incoming";
import PrivateRoute from "./context/PrivateRoute";
import RequestPage from "./pages/Admin/RequestPage";
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Outgoing from "./pages/Admin/Outgoing";


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //       setCurrentUser(user)
    //     })
    //   }, [])

    return (

        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
            <Routes>
                <Route exact path='/' element={
                    <Login />
                } />
                <Route path="/signup" element={
                    <Signup />
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/incoming" element={
                    <PrivateRoute>
                        <Incoming />
                    </PrivateRoute>
                } />
                <Route path="/request" element={
                    <PrivateRoute>
                        <RequestPage />
                    </PrivateRoute>
                } />
                <Route path="/outgoing" element={
                    <PrivateRoute>
                        <Outgoing />
                    </PrivateRoute>
                } />


                <Route path='/verify-email' element={<VerifyEmail />} />
            </Routes>
        </AuthProvider>

    );
}

export default App;
