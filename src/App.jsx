import ScrollToTop from './components/common/ScrollToTop';
import { Route, Routes } from 'react-router';
import Contents from './components/body/Contents';
import MainContent from './components/body/MainContent';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import FindIdCommonForm from './pages/find-id/FindIdCommonForm';
import FindId from './pages/find-id/FindId';
import FindIdVerificationCode from './pages/find-id/FindIdVerificationCode';
import FindIdCompleted from './pages/find-id/FindIdCompleted';
import Mypage from './pages/mypage';
import VerifyPage from './pages/mypage/VerifyPage';
import EditPage from './pages/mypage/EditPage';
import WishlistPage from './pages/mypage/WishlistPage';
import CancelReturnPage from './pages/mypage/CancelReturnPage';
import OrdersPage from './pages/mypage/OrdersPage';
import AddressPage from './pages/mypage/AddressPage';
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
          <Route path="/find-id" element={<FindIdCommonForm />}>
            <Route path="" element={<FindId />} />
            <Route
              path="verification-code"
              element={<FindIdVerificationCode />}
            />
            <Route path="completed" element={<FindIdCompleted />} />
          </Route>
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
