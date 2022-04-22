import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
// con en main container le pasamos los estilos por props de styled
const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vw;
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

const Main = () => {
	return (
		<MainContainer>
			<Container>
				<PowerButton />
				<LogoComponent />
				<SocialIcons />
			</Container>
		</MainContainer>
	);
};

export default Main;
