import React from 'react';
import stu2 from './stu2.jpg';
import StudentProfile from './StudentProfile.jsx';

const studentB = {
	company: {
		name: 'Bluestock',
		logoUrl: 'https://bluestock.in/static/assets/logo/logo.webp'
	},
	name: 'Aman Yadav',
	dateOfBirth: '2003-07-03',
	role: 'MERN Full Stack Development intern at Bluestock',
	duration: '1 July 2025 to 30 August 2025',
	photoUrl: stu2
};

export default function StudentB() {
	return <StudentProfile studentData={studentB} />;
}
