import { Outlet } from 'react-router-dom';
import MainHeader from '../header/MainHeader';
import Footer from '../footer/Footer';

const Contents = () => {
  return (
    <>
      <MainHeader />
      <div className="h-full min-h-[100vh] w-full bg-bg-20 pb-[17rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Contents;
