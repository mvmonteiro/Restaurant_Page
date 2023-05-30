import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					{/* adiciona uma rota com o layout padrão em toda página ali dentro */}
					<Route path='/' element={<Layout />}>
						{/* cada uma das páginas que irá utilizar o layout padrão de header */}
						<Route index element={<Home />} />	
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}