import classNames from 'classnames/bind';
import styles from './AccontItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccontItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="Anh" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span> {data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname} </span>
            </div>
        </div>
    );
}

export default AccontItem;
