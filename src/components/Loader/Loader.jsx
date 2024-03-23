import { RotatingLines } from 'react-loader-spinner';
import {} from './Loader.css';
export const Loader = () => {
  return (
    <div className="RotatingLines">
      <RotatingLines
        strokeColor="wheat"
        strokeWidth="8"
        animationDuration="2"
        width="196"
        visible={true}
      />
    </div>
  );
};
export default Loader;
