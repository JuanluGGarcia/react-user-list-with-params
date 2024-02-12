import { useNavigate } from 'react-router-dom';
import { StyledUserContainer } from '../filterusers/style';

import {
	StyledActiveUser,
	// StyledLink,
	StyledDataUser,
	StyledImgUser,
	StyledNameUser,
	StyledUsernameUser
} from './style';

// Se encarga de pintar las cards de los usuarios
const CardUser = ({ userId, name, username, profileImage, active }) => {
	const navigate = useNavigate();
	return (
		<StyledUserContainer>
			<StyledDataUser>
				<StyledImgUser src={profileImage} alt='' />

				<div>
					<StyledNameUser>{name}</StyledNameUser>
					<StyledUsernameUser>@{username}</StyledUsernameUser>
				</div>

				<StyledActiveUser $active={active}>
					{active ? 'Activo' : 'Inactivo'}{' '}
				</StyledActiveUser>

				{/* <StyledLink to=</StyledLink> */}
				<button onClick={() => navigate(`/${userId}`)}>Ver Detalles</button>
			</StyledDataUser>
		</StyledUserContainer>
				
	);
};

export default CardUser;
