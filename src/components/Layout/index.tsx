import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';

export default function Layout () {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
                    A casa do código da massa
				</div>
			</header>
			<div>
				<Outlet />
			</div>
		</>
	);
}