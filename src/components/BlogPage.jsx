import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import bg from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent';
import AnchorComponent from '../subComponents/Anchor';
import { useState, useEffect } from 'react';
import BigTitle from '../subComponents/BigTitle';

const MainContainer = styled.div`
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Container = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8 )`};
	width: 100%;
	height: auto;
	position: relative;
	padding-bottom: 5rem;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2rem);
`;
const BlogPage = () => {
	const [numbers, setNumbers] = useState(0);

	useEffect(() => {
		let num = (window.innerHeight - 70) / 30;
		setNumbers(parseInt(num));
	}, []);

	return (
		<MainContainer>
			<Container>
				<LogoComponent />
				<PowerButton />
				<SocialIcons />
				<AnchorComponent numbers={numbers} />
				<Center>
					<Grid>
						{Blogs.map((item) => (
							<BlogComponent key={item.id} item={item} />
						))}
					</Grid>
				</Center>
				<BigTitle text="TEXT" top="5rem" left="5rem" />
			</Container>
		</MainContainer>
	);
};

export default BlogPage;
