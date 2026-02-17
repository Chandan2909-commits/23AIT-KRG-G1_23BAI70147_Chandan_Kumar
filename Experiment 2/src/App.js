import{BrowserRouter ,Routes,Route}from"react-router-dom";
import Login from "./pages/login";
import Logs from "./pages/Logs";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummary from "./pages/DashboardSummary";
import ProtectedRoute from "./pages/ProtectedRoute";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route 
        path="/"
        element={
        <ProtectedRoute>
        <DashboardLayout/>
        </ProtectedRoute>
        }>
        <Route index element = {<DashboardSummary/>}/>
        <Route path= "summary" element = {<DashboardSummary/>}/>
        <Route path= "analytics" element = {<DashboardAnalytics/>}/>
        </Route>
        <Route path="/logs" element={<ProtectedRoute><Logs/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
