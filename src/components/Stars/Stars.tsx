import { Star } from '../Star/Star';
import classes from './stars.module.css';

type StarsProps = {
    count?: number;

}

export const Stars: React.FC<StarsProps> = ({ count=0 }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null; 
    }

    const stars = Array.from({ length: count }, (_, index) => (
        <li 
          className={classes['star-element']}
          key={index}
          >
            <Star />
        </li>
        ));
  return (
    <ul className={`${classes['card-body-stars']} ${classes['u-clearfix']}`}>
        {stars}
    </ul>

  )
}
