import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentA from './components/StudentA.jsx';
import StudentB from './components/StudentB.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-slate-50">

				<Routes>
					<Route path="/student-a" element={<StudentA />} />
					<Route path="/student-b" element={<StudentB />} />
					<Route
						path="/"
						element={
							<div className="max-w-4xl mx-auto px-6 py-20 text-center text-slate-700">
								<h2 className="text-xl font-semibold mb-4">Choose a student profile</h2>
								<div className="flex justify-center gap-4">
									<Link to="/student-a" className="px-4 py-2 bg-slate-100 rounded">Student A</Link>
									<Link to="/student-b" className="px-4 py-2 bg-slate-100 rounded">Student B</Link>
								</div>
							</div>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}


