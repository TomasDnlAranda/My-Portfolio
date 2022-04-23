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
`;

const BLOG = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transition: translate(-50%, -50%);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
`;

const WORK = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: calc(1rem + 2vw);
	transition: translate(-50%, -50%);
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;
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
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
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
	}

	& > :last-child {
		padding-top: 1rem;
		display: ${(props) => (props.click ? 'none' : 'inline-block')};
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
`;

const Main = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<MainContainer>
			<DarkDiv click={click} />
			<Container>
				<PowerButton />
				<LogoComponent click={click} />
				<SocialIcons click={click} />
				<Center click={click}>
					<svg
						onClick={() => handleClick()}
						style={click ? { width: '120', height: '120' } : { width: '200', height: '200' }}
						fill="currentColor"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="yin-yang"
						class="svg-inline--fa fa-yin-yang fa-w-16"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 496 512"
					>
						<path
							fill="currentColor"
							d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
						></path>
					</svg>
					<span>click here</span>
				</Center>
				<Contact target="_blank" to={{ pathname: 'mailto:tomasdnlaranda@gmail.com' }}>
					<motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Say hi..
					</motion.h2>
				</Contact>
				<BLOG to="/blog">
					<motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Blog
					</motion.h2>
				</BLOG>
				<WORK to="/work" click={click}>
					<motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Work
					</motion.h2>
				</WORK>
				<BottomBar>
					<ABOUT to="/about" click={click}>
						<motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							About
						</motion.h2>
					</ABOUT>
					<SKILLS to="/skills">
						<motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							My Skills.
						</motion.h2>
					</SKILLS>
				</BottomBar>
			</Container>
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};

export default Main;
