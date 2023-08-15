import { InputProps } from '.';
import Label from '../Label';

const FileUpload = (props: InputProps) => {
  return (
    <Label
      name='upload'
      className='text-white inline-block cursor-pointer my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
    >
      <input hidden id='upload' name='upload' type='file' {...props}></input>
      Upload Image
    </Label>
  );
};

export default FileUpload;
