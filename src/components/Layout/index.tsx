import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function Layout () {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
                    A casa do código da massa
				</div>
			</header>
			<div className={stylesTema.container}>
				<Outlet />
			</div>
		</>
	);
}