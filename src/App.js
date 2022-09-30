import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import VerifyEmail from './pages/Auth/VerifyEmail'
import Signup from "./pages/Auth/Signup";
import Incoming from "./pages/Admin/Incoming";
import PrivateRoute from "./context/PrivateRoute";
import RequestPage from "./pages/Admin/RequestPage";
import {useState, useEffect} from 'react'
import {AuthProvider} from './context/AuthContext'
import {onAuthStateChanged} from 'firebase/auth'
import {Navigate} from 'react-router-dom'
import {auth} from './utils/Firebase'


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
        })
      }, [])

    return (
   
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route exact path='/' element={
                !currentUser?.emailVerified 
                ? <Login/>
                : <Navigate to='/' replace/>
            }/>
            <Route path="/signup" element={
              !currentUser?.emailVerified 
              ? <Signup/>
              : <Navigate to='/' replace/>
            } />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            } />
            <Route path="/incoming" element={
                <PrivateRoute>
                    <Incoming/>
                </PrivateRoute>
            } />
            <Route path="/request" element={
                <PrivateRoute>
                    <RequestPage/>
                </PrivateRoute>
            } />


            <Route path='/verify-email' element={<VerifyEmail/>} /> 
          </Routes>  
        </AuthProvider>
    
    );
}

export default App;
