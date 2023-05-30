import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

interface IOpcao {
    label: string;
    id: number;
}

interface Props {
    filtro: (number | null);
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ( { filtro, setFiltro }: Props ) => {
	function selecionaFiltro(opcao: IOpcao) {
		if(filtro === opcao.id)                         // se o valor do id já estiver no filtro, quer dizer que ele foi clicado uma vez
			return setFiltro(null);
		return setFiltro(opcao.id);                     // seta o qual o id do filtro que foi clicado -> tem um onClick no button
	}

	return (
		<div className={styles.filtros}>
			{filtros.map( (opcao) => (
				<button 
					key={opcao.id} 
					onClick={ () => {selecionaFiltro(opcao);}}
					className={classNames({
						[styles.filtros__filtro]: true,
						[styles['filtros__filtro--ativo']]: opcao.id === filtro
					})}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
};

export default Filtros;