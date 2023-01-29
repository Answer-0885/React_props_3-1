import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import Star from './Star';
import "../App.css"

const Stars = ({ count }) => {
    const ratingValid = count > 5 || count < 1;
    const countStars = new Array(count).fill();

    return ratingValid ? null : (
      <ul className="card-body-stars u-clearfix">
        {countStars.map(() => (
          <li key={nanoid()}>
            <Star />
          </li>
        ))}
      </ul>
    );
  };

 Stars.defaultProps = {
   count: 0,
 }

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stars;