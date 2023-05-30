import cardapio from 'data/cardapio.json';
import styles from './home.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/images/nossa_casa.png';

export default function Home() {
	// item com o array de cardapio -> aqui posso alterar sem fazer alteração no .json
	let pratosRecomendados = [...cardapio];
	// faz um sorte randomicos dos itens e pega os 3 primeiros itens
	pratosRecomendados = pratosRecomendados.sort( () => 0.5 - Math.random()).splice(0, 3);

	return (
		<section>
			<h3 className={stylesTema.titulo}>
        Recomendações da cozinha
			</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao}>
                        Ver mais
						</button>
					</div>
				))} 
			</div>
			<h3 className={stylesTema.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do Aluroni" />
				<div className={styles.nossaCasa__endereco}>Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP</div>
			</div>

		</section>
	);
}