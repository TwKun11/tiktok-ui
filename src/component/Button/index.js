import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    text = false,
    disabled = false,
    small = false,
    rounded = false,
    large = false,
    outline = false,
    rightIcon = false,
    leftIcon = false,
    className,
    children,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    const classes = cx('wrapper', { primary, outline, small, large, text, disabled, rounded, [className]: className });
    const props = { onClick, passprops };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
