import LogoutButton from "./components/logout";
import LoginButton from "./components/login";
import {useAuth0} from "@auth0/auth0-react";
import React from "react";

const App = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    const [token, setToken] = React.useState("");

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (isAuthenticated === false) {
        return <LoginButton/>
    }
    else
    {
        const getAccessToken = async () => {
            const token = await getAccessTokenSilently();
            setToken(token);
        };
        return (
            isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button onClick={getAccessToken}>Get token</button>
                    <p>{token}</p>
                    <div><LogoutButton/></div>
                </div>
            )
        );
    }
};

export default App;

/*
onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
*/
