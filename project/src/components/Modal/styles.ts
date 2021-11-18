import { HTMLAttributes } from 'react';
import styled, {css} from 'styled-components';

interface props extends HTMLAttributes<HTMLDivElement>{
	height?: string;
	width?: string;
	background?: string,
}

export const Container = styled.div<props>`
	${({height, width, background}) => css`
		height: ${height};
		width: ${width};
		background: ${background};

		position: fixed;
		box-shadow: 10px 6px 15px rgba(0, 0, 0, 0.3);

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

		border-radius: 5px;
	`}
`;
