import { Link } from 'react-router-dom';
import {} from './Favorit.css';
const Favorite = () => {
  return (
    <div>
      <p className="favorite">
        Please select your favorite cars in the{' '}
        <Link to="/catalog">Сatalog</Link>.
      </p>
    </div>
  );
};

export default Favorite;
