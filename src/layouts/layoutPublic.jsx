import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {
  return (
   <div className="container">
        <Outlet />
        <footer>Footer</footer>
    </div>
  );
}

export default LayoutPublic;