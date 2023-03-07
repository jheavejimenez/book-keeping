import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Bookkeeper/Dashboard";
import Login from "./pages/Auth/Login";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import Signup from "./pages/Auth/Signup";
import Outgoing from "./pages/Bookkeeper/Outgoing";
import Incoming from "./pages/Bookkeeper/Incoming";
import RequestPage from "./pages/Bookkeeper/RequestPage";
import { ProtectedRoute } from "./pages/Auth/ProtectRoutes";
import AccountSettings from "./pages/Bookkeeper/AccountSettings";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ClientDashboard from "./pages/Client/ClientDashboard";
import ClientIncoming from "./pages/Client/ClientIncoming";
import ClientOutgoing from "./pages/Client/ClientOutgoing";
import ClientSettings from "./pages/Client/ClientSettings";
import PageNotFound from "./pages/Error/PageNotFound";
import ForbiddenPage from "./pages/Error/ForbiddenPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AuditTrail from "./pages/Admin/AuditTrail";
import Users from "./pages/Admin/Users";
import Searchpage from "./pages/Search/SearchpageClient";
import SearchpageBookkeeping from "./pages/Search/SearchpageBookkeeper";
import Archive from "./pages/Admin/Archive";

function App() {
  
  


  return (
    <Routes>
      
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-pass" element={<ForgotPassword />} />
      <Route path="error-404" element={<PageNotFound />} />
      <Route path="error-403" element={<ForbiddenPage />} />
      

      <Route
        path="admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin/audit-trail"
        element={
          <ProtectedRoute>
            <AuditTrail />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin/archives"
        element={
          <ProtectedRoute>
            <Archive />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookkeeper/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookkeeper/search"
        element={
          <ProtectedRoute>
            <SearchpageBookkeeping />
          </ProtectedRoute>
        }
      />
      

      <Route
        path="bookkeeper/incoming"
        element={
          <ProtectedRoute>
            <Incoming />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookkeeper/request"
        element={
          <ProtectedRoute>
            <RequestPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookkeeper/outgoing"
        element={
          <ProtectedRoute>
            <Outgoing />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookkeeper/account-settings"
        element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/incoming"
        element={
          <ProtectedRoute>
            <ClientIncoming />
          </ProtectedRoute>
        }
      />
      <Route
        path="/outgoing"
        element={
          <ProtectedRoute>
            <ClientOutgoing />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account-settings"
        element={
          <ProtectedRoute>
            <ClientSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <Searchpage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  );
}

export default App;
