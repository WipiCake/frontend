import { Route, Routes } from 'react-router';
import Contents from './components/body/Contents';
import MainContent from './components/body/MainContent';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import FindId from './pages/find-id/FindId';
import Mypage from './pages/mypage';
import WishlistPage from './pages/mypage/WishlistPage';
import OrdersPage from './pages/mypage/OrdersPage';
import AddressPage from './pages/mypage/AddressPage';
import ScrollToTop from './components/common/ScrollToTop';
import './global.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Contents />}>
          <Route path="" element={<MainContent />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/wishlist" element={<WishlistPage />} />
          <Route path="/mypage/orders" element={<OrdersPage />} />
          <Route path="/mypage/address" element={<AddressPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
