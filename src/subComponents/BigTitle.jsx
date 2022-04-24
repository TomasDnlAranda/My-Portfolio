import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
	position: fixed;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	button: ${(props) => props.button};
	color: #afafaf50;
	font-size: calc(5rem + 5vw);
	z-index: 0;
`;
const BigTitle = (props) => {
	return (
		<Text top={props.top} right={props.right} left={props.left}>
			{props.text}
		</Text>
	);
};

export default BigTitle;
