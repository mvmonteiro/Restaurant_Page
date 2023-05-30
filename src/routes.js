import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					{/* adiciona uma rota com o layout padrão em toda página ali dentro */}
					<Route path='/' element={<Layout />}>
						{/* cada uma das páginas que irá utilizar o layout padrão de header */}
						<Route index element={<Home />} />	
						<Route path='cardapio' element={<Cardapio />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}