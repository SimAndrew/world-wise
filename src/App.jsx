import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product.jsx';
import HomePage from './pages/HomePage.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './pages/AppLayout.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="login" element={<Login />} />
				<Route path="app" element={<AppLayout />}>
					<Route index element={<p>List of cities default</p>} />

					<Route path="cities" element={<h1>List of cities</h1>} />
					<Route path="countries" element={<h1>Countries</h1>} />
					<Route path="form" element={<h1>Form</h1>} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
