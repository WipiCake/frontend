import ScrollToTop from './components/common/ScrollToTop';
import { Route, Routes } from 'react-router';
import Contents from './components/body/Contents';
import MainContent from './components/body/MainContent';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import Mypage from './pages/mypage';
import VerifyPage from './pages/mypage/VerifyPage';
import EditPage from './pages/mypage/EditPage';
import WishlistPage from './pages/mypage/WishlistPage';
import CancelReturnPage from './pages/mypage/CancelReturnPage';
import OrdersPage from './pages/mypage/OrdersPage';
import AddressPage from './pages/mypage/AddressPage';
import './global.css';
import ProductDetail from './pages/productDetail/ProductDetail';
import Find from './pages/find/Find';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<MainContent />} />
        <Route path="/" element={<Contents />}>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/veryify" element={<VerifyPage />} />
          <Route path="/mypage/edit" element={<EditPage />} />
          <Route path="/mypage/wishlist" element={<WishlistPage />} />
          <Route path="/mypage/cancel-return" element={<CancelReturnPage />} />
          <Route path="/mypage/orders" element={<OrdersPage />} />
          <Route path="/mypage/address" element={<AddressPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
