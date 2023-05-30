import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

const Cardapio = () => {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');

	return (
		<section className={styles.cardapio}>
			<h3 className={styles.cardapio__texto}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
		</section>

	);
};

export default Cardapio;