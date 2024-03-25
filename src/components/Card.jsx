// Remove the unused import statement for 'React'
import ProgressBar from './ProgressBar';
import styles from '../Main.module.css';
import PropTypes from 'prop-types';
Card.propTypes = {
    title: PropTypes.string.isRequired,
};
function Card({ title }) {
    return (
        <div className={styles.card}>
            <div className={styles.center}>{title}</div>
            
            <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
            <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
            <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
            <div>
                <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
                <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
                <ProgressBar bgcolor='darkblue' progress={70} height={20} name='Positive' number={13541} />
            </div>
            
            <div className={styles.lists}>
                <li>Total Reviews</li>
                <li>Positive Reviews</li>
                <li>Negative Reviews</li>
                <li>Comments</li>
            </div>
        </div>
    );
}

export default Card;