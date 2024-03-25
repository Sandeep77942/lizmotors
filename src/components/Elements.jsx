import styles from './../Main.module.css'
import PropTypes from 'prop-types'
    function Elements({name, color, text, size='0.8rem'}) {
        return (
            <div>
                <h1 className={styles.elements} style={{backgroundColor:`${color}`,color:`${text}`,fontSize:`${size}`}}>{name}</h1>
            </div>
        );
    }

    Elements.propTypes = {
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        size: PropTypes.string
    };

export default Elements