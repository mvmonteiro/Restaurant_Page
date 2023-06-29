import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy( () => import('pages/Cardapio'));
const Layout = lazy( () => import('components/Layout'));
const Home = lazy( () => import('pages/Home'));
const NotFound = lazy( () => import('pages/NotFound'));
const Prato = lazy( () => import('pages/Prato'));
const Sobre = lazy( () => import('pages/Sobre'));

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Suspense fallback={<p>Carregando...</p>}>
					<Routes>
						{/* adiciona uma rota com o layout padrão em toda página ali dentro */}
						<Route path='/' element={<Layout />}>
							{/* cada uma das páginas que irá utilizar o layout padrão de header */}
							<Route index element={<Home />} />	
							<Route path='cardapio' element={<Cardapio />} />
							<Route path='sobre' element={<Sobre />} />
						</Route>
						<Route path='prato/:id' element={<Prato />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
				<Footer />
			</Router>
		</main>
	);
}