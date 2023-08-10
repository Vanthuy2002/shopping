import { useNavigate } from 'react-router-dom';

export const useURL = (path: string): (() => void) => {
  const navigate = useNavigate();
  return () => navigate(path);
};
