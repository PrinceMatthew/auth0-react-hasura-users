import LogoutButton from "./components/logout";
import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./components/login";

const App = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (isAuthenticated === false)
        return <LoginButton/>
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div><LogoutButton/></div>
            </div>
        )
    );

};

export default App;