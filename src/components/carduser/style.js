import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUserContainer = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
`;

const StyledDataUser = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
	gap: 25px;
`;

const StyledImgUser = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
`;

const StyledNameUser = styled.h2`
	font-size: 1.1em;
	margin: 0;
`;

const StyledUsernameUser = styled.p`
	font-size: 0.8em;
	margin: 0;
`;

const StyledActiveUser = styled.span`
	color: ${({ $active }) => ($active ? 'green' : 'red')};
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	background-color: #f3f3f3;
	color: #000;
	padding: 2px 5px;
	border-radius: 2px;
	border: 1px solid #000;
	font-size: 0.9rem;
`;

export {
	StyledUserContainer,
	StyledDataUser,
	StyledImgUser,
	StyledNameUser,
	StyledUsernameUser,
	StyledActiveUser,
	StyledLink
};
