import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavDashBoard from 'src/components/Navbar/NavDash';
import Sidebar from 'src/components/Sidebar';
import { useToggle } from 'usehooks-ts';

const DashboardLayout = () => {
  const [show, toggle, setShow] = useToggle(false);
  return (
    <Fragment>
      <NavDashBoard show={show} toggle={toggle} />
      <Sidebar show={show} setShow={setShow} />
      <section className='p-4 sm:ml-64 bg-[#f5f7ff] min-h-screen dark:bg-[#231f1f]'>
        <Outlet></Outlet>
      </section>
    </Fragment>
  );
};

export default DashboardLayout;
