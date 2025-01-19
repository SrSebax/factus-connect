import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginView from '../views/LoginView';
import FacturasView from '../views/FacturasView';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/facturas" element={<FacturasView />} />
        <Route path="/" element={<LoginView />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
