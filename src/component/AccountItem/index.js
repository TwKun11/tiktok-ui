import classNames from 'classnames/bind';
import styles from './AccontItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccontItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0035df6f029dd1523ddb4beae5170c6d.jpeg?x-expires=1702900800&x-signature=QdPSs%2BMwyyfxdhpHI6ENhio8v%2B8%3D"
                alt="Anh"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span> Lưu Mai Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> luumaianh</span>
            </div>
        </div>
    );
}

export default AccontItem;
