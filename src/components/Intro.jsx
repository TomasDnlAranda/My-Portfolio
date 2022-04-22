import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Me from '../assets/Images/me_png.png';

const Box = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	width: 65vw;
	height: 55vh;
	display: flex;

	background: linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			bottom,
		linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			top;
	background-repeat: no-repeat;
	background-size: 100% 2px;
	z-index: 1;
	border-left: 2px solid ${(props) => props.theme.body};
	border-right: 2px solid ${(props) => props.theme.text};
`;

const SubBox = styled.div`
	width: 50%;
	position: relative;
	display: flex;

	.pic {
		position: absolute;
		bottom: -25px;
		left: 50%;
		transform: translate(-50%, 0%);
		width: 450px;
		height: auto;
	}
`;

const Text = styled.div`
	font-size: calc(1em + 1.5vw);
	color: ${(props) => props.theme.body};
	padding: 2rem;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	& > *:last-child {
		color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
		font-size: calc(0.5rem + 1.5vw);
		font-weight: 300;
	}
`;

const Intro = () => {
	return (
		<Box>
			<SubBox>
				<Text>
					<h1>Hi,</h1>
					<h3>I'm Tomas Dnl</h3>
					<h6>I am a Front-End Web Developer, I make my code simple and beautiful</h6>
				</Text>
			</SubBox>
			<SubBox>
				<div>
					<img className="pic" src={Me} alt="profile pic" />
				</div>
			</SubBox>
		</Box>
	);
};

export default Intro;
