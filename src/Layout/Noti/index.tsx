import { ToastContainer } from 'react-toastify';

const Toasty = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme='light'
    />
  );
};

export default Toasty;
