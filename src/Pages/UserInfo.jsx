import { useNavigate, useParams } from "react-router-dom";
import { USERS } from "../constants/users";
// import { StyledLink } from "./style";

const UserInfo = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    // console.log(userId)

    const pickUser = USERS.find(user => user.userId === userId);
    // console.log(pickUser)
    return (
        <div>
            
                {/* <StyledLink to='/'>Back to Users</StyledLink> */}
            <button onClick={() => navigate('/')}>Back to Users</button>
    
            <img src={pickUser.profileImage} alt={pickUser.name} />
            <br />
            <h1>Hi! My name is {pickUser.name}</h1>
            <br />
            <p>Im {pickUser.age}</p>
            <br />
            <p>My username is {pickUser.username}</p>
            <br />
            <p>You can contact me in {pickUser.email}</p>
            <br />
            <p>My Address is:</p>
            <br />
            <p>{pickUser.address.street}</p>
            <br />
            <p>{pickUser.address.city}</p>
            <br />
            <p>{pickUser.address.zipCode}</p>
            <br />
            <p>You can call me at {pickUser.phone}</p>
        </div>
    );
};

export default UserInfo;