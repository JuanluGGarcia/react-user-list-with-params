import { Route, Routes } from "react-router-dom";
import UserInfo from "../Pages/UserInfo";
import FilterUsers from "../components/filterusers/FilterUsers";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<FilterUsers />} />
            <Route path='/:userId' element={<UserInfo />} />
        </Routes>
    );

};

export default Router;