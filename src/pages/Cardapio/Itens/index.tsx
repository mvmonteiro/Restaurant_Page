import { useEffect, useState } from 'react';
import Item from './Item';
import menu from 'data/cardapio.json';
import styles from './Itens.module.scss';
import { Cardapio } from 'types/Prato';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

const Itens = ( { busca, filtro, ordenador }: Props ) => {
	const [lista, setLista] = useState(menu);

	function testaBusca (title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro (id: number) {
		if (filtro !== null)
			return filtro === id;
		else
			return true;
	}

	function ordenar (novaLista: Cardapio) {
		switch(ordenador) {
		case 'porcao':
			return novaLista.sort( (a, b) => a.size > b.size ? 1 : -1);
		case 'qtd_pessoas':
			return novaLista.sort( (a, b) => a.serving > b.serving ? 1 : -1);
		case 'preco':
			return novaLista.sort( (a, b) => a.price > b.price ? 1 : -1);
		default:
			return novaLista;
		}
	}

	useEffect( () => {
		const novaLista = menu.filter( (item) => testaBusca(item.title) && testaFiltro(item.category.id));
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);

	return(
		<div className={styles.itens}>
			{lista.map( (item) => (
				<Item 
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
};

export default Itens;