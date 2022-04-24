import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import ParticulesComponent from '../subComponents/ParticulesComponent';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;

	font-family: 'Ubuntu Mono', monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);

	${Main}:hover & {
		& > * {
			color: ${(props) => props.theme.body};
		}
	}
	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;

	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	p {
		margin-left: 2rem;
	}

	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}
`;

const MySkillsPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
				<LogoComponent theme="light" />
				<SocialIcons theme="light" />
				<PowerButton />
				<ParticulesComponent theme="light" />
				<Main>
					<Title>
						<svg
							aria-hidden="true"
							width={40}
							height={40}
							focusable="false"
							data-prefix="fas"
							data-icon="laptop-code"
							class="svg-inline--fa fa-laptop-code fa-w-20"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
						>
							<path
								fill="currentColor"
								d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
							></path>
						</svg>
						Frontend Developer
					</Title>
					<Description>
						I value business or brand for which i'm creating, thus i enjoy bringing new ideas to
						life.
					</Description>
					<Description>
						<strong>SKILLS</strong>
						<p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, etc.</p>
					</Description>
					<Description>
						<strong>Tools</strong>
						<p>VScode, Github, Codepen etc.</p>
					</Description>
				</Main>
			</Box>
		</ThemeProvider>
	);
};

export default MySkillsPage;
