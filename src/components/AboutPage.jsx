import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { darkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import ParticulesComponent from '../subComponents/ParticulesComponent';
import astronaut from '../assets/Images/spaceman.png';
import { keyframes } from 'styled-components';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 2.5,
		},
	},
};

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`;

const SpaceMan = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;

	img {
		width: 100%;
		height: auto;
	}

	animation: ${float} 4s ease infinite;
`;

const Main = styled(motion.div)`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	padding: 2rem;
	width: 50vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(0.4rem + 1vw);
	backdrop-filter: blur(4px);

	position: absolute;
	left: calc(5rem + 5vw);
	top: 7.5rem;

	font-family: 'Ubutntu Mono', monospace;
	font-style: italic;

	@media only screen and (max-width: 500px) {
		top: 14rem;
		padding: 1rem !important;
		width: 50vw;
		height: 45vh !important;
	}

	@media only screen and (max-width: 400px) {
		left: 5rem;
		font-size: calc(0.5rem + 1vw);
	}
`;

const AboutPage = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
				<ParticulesComponent theme="dark" />
				<Main variants={container} initial="hidden" animate="show">
					I am a front-end developer located in Argentina, Buenos Aires. I love creating simple but
					beautiful websites with a great user experience, I challenge myself to grow and learn new
					techniques every day.
					<br />
					<br />
					I am interested in the whole frontend stack. I like to try new things and build great
					projects.
					<br />
					<br />I believe that everything is an Art when you put your conscience into it, and it is
					incredible what can come out of a cup of coffee and passion
				</Main>

				<BigTitle text="ABOUT" top="10%" left="5%" />
				<SpaceMan>
					<img src={astronaut} alt="spaceman" />
				</SpaceMan>
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
