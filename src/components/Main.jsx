import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';
import { motion } from 'framer-motion';
import { YinYang } from '../data/AllSvg';
import Me from '../assets/Images/me.png';

// con en main container le pasamos los estilos por props de styled
const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100%;
	height: 100vh;
	overflow: hidden;
	position: relative;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Karla', sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;
	@media only screen and (max-width: 550px) {
		font-size: 0.9rem;
		top: 2.25rem;
	}
	@media only screen and (max-width: 420px) {
		font-size: 0.9rem;
		top: 7rem;
		right: 0rem;
		transform: rotate(90deg);
	}
`;

const WORK = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transition: translate(-50%, -50%);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
	@media only screen and (max-width: 550px) {
		font-size: 0.9rem;
	}
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;

	@media only screen and (max-width: 550px) {
		font-size: 0.9rem;
		color: ${(props) => props.theme.text};
	}
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
	@media only screen and (max-width: 550px) {
		font-size: 0.9rem;
	}
`;

const rotate = keyframes`

from{
	transform: rotate(0)
}

to{
	transform: rotate(360deg)
}

`;

const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? '85%' : '50%')};
	left: ${(props) => (props.click ? '92%' : '50%')};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;
	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
		width: ${(props) => (props.click ? '120px' : '200px')};
		height: ${(props) => (props.click ? '120px' : '200px')};
	}

	& > :last-child {
		padding-top: 1rem;
		display: ${(props) => (props.click ? 'none' : 'inline-block')};
	}

	@media only screen and (max-width: 800px) {
		& > :first-child {
			width: ${(props) => (props.click ? '100px' : '150px')};
			height: ${(props) => (props.click ? '100px' : '150px')};
		}
	}

	@media only screen and (max-width: 550px) {
		display: none;
	}
`;

const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	background: #000;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? '50%' : '0%')};
	height: ${(props) => (props.click ? '100%' : '0%')};
	z-index: 1;
	transition: height 0.5s ease, width 1s ease 0.5s;
	@media only screen and (max-width: 550px) {
		display: none;
	}
`;

const Img = styled.img`
	display: none;

	@media only screen and (max-width: 550px) {
		display: flex;
		width: 350px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto auto;
	}

	@media only screen and (max-width: 420px) {
		width: 250px;
	}
`;

const Main = () => {
	const [click, setClick] = useState(false);
	const [clickAbout, setClickAbout] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const handleClickk = () => {
		setClickAbout(true);
	};

	const meoooow = () => {
		setTimeout(() => {}, []);
	};

	return (
		<MainContainer>
			<DarkDiv click={click} />
			<Container>
				<PowerButton />
				<LogoComponent click={click} />
				<SocialIcons click={click} clickAbout={clickAbout} />
				<Center click={click}>
					<YinYang onClick={() => handleClick()} />
					<span>click here</span>
				</Center>
				<Contact target="_blank" to={{ pathname: 'mailto:tomasdnlaranda@gmail.com' }}>
					<motion.h2
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
					>
						Say hi..
					</motion.h2>
				</Contact>
				<WORK to="/work" click={click} onClick={() => meoooow()}>
					<motion.h2
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
					>
						Work
					</motion.h2>
				</WORK>
				<BottomBar>
					<ABOUT to="/about" click={click} onClick={handleClickk}>
						<motion.h2
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
						>
							About
						</motion.h2>
					</ABOUT>
					<SKILLS to="/skills">
						<motion.h2
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
						>
							My Skills.
						</motion.h2>
					</SKILLS>
				</BottomBar>
			</Container>
			<Img src={Me} alt={Me} />
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};

export default Main;
