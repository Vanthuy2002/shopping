import Typography from '../Typography';

const BlankItem = () => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td colSpan={4} className='py-10'>
        <Typography className='text-xl text-center text-gray-600' as='p'>
          No products in cart
        </Typography>
      </td>
    </tr>
  );
};

export default BlankItem;
