import React from 'react';

const defaultStudent = {
	company: {
		name: 'Bluestock',
		logoUrl: 'https://bluestock.in/static/assets/logo/logo.webp'
	},
	name: 'Aarav Mehta',
	dateOfBirth: '2001-11-22',
	role: 'MERN Full Stack Development intern at Bluestock',
	duration: '1 July 2025 to 30 August 2025',
	photoUrl: 'https://dummyimage.com/400x400/1f2937/ffffff&text=Profile'
};

export default function StudentProfile({ studentData = defaultStudent }) {
	const student = studentData;
	return (
		<div className="min-h-screen bg-slate-50">
			<div className="max-w-4xl mx-auto px-6 py-10">
				<div className="flex justify-center mb-10">
					<img
						src={student.company.logoUrl}
						alt={`${student.company.name} logo`}
						className="h-14 w-auto object-contain"
					/>
				</div>

				<div className="bg-white shadow-sm rounded-xl border border-slate-200 p-6 md:p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h1 className="text-2xl font-semibold text-slate-900 mb-4">
								Student Profile
							</h1>
							<div className="space-y-3">
								<div>
									<div className="text-slate-500 text-sm">Name</div>
									<div className="text-slate-900 font-medium">{student.name}</div>
								</div>
								<div>
									<div className="text-slate-500 text-sm">Date of Birth</div>
									<div className="text-slate-900 font-medium">{student.dateOfBirth}</div>
								</div>
								<div>
									<div className="text-slate-500 text-sm">Role</div>
									<div className="text-slate-900 font-medium">{student.role}</div>
								</div>
								<div>
									<div className="text-slate-500 text-sm">Duration</div>
									<div className="text-slate-900 font-medium">{student.duration}</div>
								</div>
							</div>
						</div>

						<div className="flex md:justify-end justify-center">
							<img
								src={student.photoUrl}
								alt={`${student.name} profile`}
								className="h-48 w-48 rounded-full object-cover ring-4 ring-slate-100 shadow-md"
							/>
						</div>
					</div>
				</div>

				<div className="mt-6 text-center text-sm text-slate-500">
					© {new Date().getFullYear()} {student.company.name}
				</div>
			</div>
		</div>
	);
}


