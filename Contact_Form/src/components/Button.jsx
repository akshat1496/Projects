
import styles from './Button.module.css'
import PropTypes from 'prop-types'

 function Button({isMail,icon,text,...rest}) {
    return (
        <button {...rest} className={isMail?styles.mail_btn:styles.Primary_btn}>
            {icon}
            {text}
        </button>
    )
}
Button.propTypes ={
    icon: PropTypes.element,
    text: PropTypes.string,
    isMail:PropTypes.bool
};
export default Button;
