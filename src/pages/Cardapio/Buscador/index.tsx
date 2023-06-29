import React, { useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ( { busca, setBusca }: Props ) => {
	// hook para aplicar memo no icone de buscador -> colocamos um [] porque nao precisamos que ele fique mudando
	const elemento = useMemo( () => <CgSearch size={20} color="#4C4D5E" />, []);


	return (
		<div className={styles.buscador}>
			<input 
				value={busca} 
				onChange={ (evento) => {setBusca(evento.target.value);}}
				placeholder="Buscar"
			/>
			{elemento}
		</div>
	);
};

export default Buscador;