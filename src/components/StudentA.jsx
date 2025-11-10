import React from 'react';
import StudentProfile from './StudentProfile.jsx';
import stu1 from './stu1.jpg';

const studentA = {
	company: {
		name: 'Bluestock',
		logoUrl: 'https://bluestock.in/static/assets/logo/logo.webp'
	},
	name: 'Tushar Kukreti',
	dateOfBirth: '2003-05-29',
	role: 'MERN Full Stack Development intern at Bluestock',
	duration: '1 July 2025 to 30 August 2025',
	photoUrl: stu1
};

export default function StudentA() {
	return <StudentProfile studentData={studentA} />;
}
