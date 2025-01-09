import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Dashboard from './pages/Dashboard';
import Map from './pages/Map';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to='dashboard' />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='map' element={<Map />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
