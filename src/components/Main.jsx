import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
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
	color: ${(props) => props.theme.text};
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
	color: ${(props) => props.theme.text};
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
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
	}

	& > :last-child {
		padding-top: 1rem;
	}
`;

const Main = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<MainContainer>
			<Container>
				<PowerButton />
				<LogoComponent />
				<SocialIcons />
				<Center click={click}>
					<svg
						onClick={() => handleClick()}
						width={200}
						height={200}
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
					<h2>Say hi..</h2>
				</Contact>
				<BLOG to="/blog">
					<h2>Blog</h2>
				</BLOG>
				<WORK to="/work">
					<h2>Work</h2>
				</WORK>
				<BottomBar>
					<ABOUT to="/about">
						<h2>About</h2>
					</ABOUT>
					<SKILLS to="/skills">
						<h2>My Skills.</h2>
					</SKILLS>
				</BottomBar>
			</Container>
		</MainContainer>
	);
};

export default Main;
