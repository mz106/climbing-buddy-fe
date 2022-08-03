// :: users - holds the users 

// id - integer (auto create by MySql/Postgres), PK
// username - String, unique, required
// password - String, unique, required  // in the BE this will be hashed and stored into hashedPassword automatically on save, but that will never be exposed, nothing except the model knows about it
// hasRopes - Boolean, required, ??
// location - String, required, ??

// ------------------------------------------------------
// Michael, from the "signup-login.yaml" I don't get what data is passed to the API and what is received, so please ammend the following as you see fit

// :: login a user by validating his username and password
// POST /user/login {username, password} => {userObj, token}   
// :: create a user in the database -- register
// POST /user/register {userObj} => {userObj, token}     

// ------------------------------------------------------

// loginUser (userObj, setUser)         :: loginUser( {userObj}, setUser ) => fetch(); use setUser( loggedUser ); save token
// registerUser (userObj, setUser)      :: createUser( {userObj}, setUser ) => fetch(); use setUser( newUser ); save token

// ------------------------------------------------------


// registerUser( {userObj}, setUser ) => fetch(); use setUser( newUser ); save token
export const registerUser = async (userObj, setUser) => {

    try {
        // POST /user {userObj} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });


        const data = await res.json();

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // since Michael doesn't want the token in localStorage, attach it to userObj
        data.user.authToken = data.token

        // set the user to state
        setUser( data.user );

        // return the result
        return res.ok;

    } catch (error) {
        return false;
    }

};


// loginUser( {userObj}, setUser ) => fetch(); use setUser( loggedUser ); save token
export const loginUser = async (userObj, setUser) => {
    try {

        // POST /user/login {username, password} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });

        const data = await res.json();

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // save user token 
        data.user.authToken = data.token

        // set the user to state
        setUser( data.user );

        // returns the result
        return res.ok;

    } catch (error) {
        return false;
    }
};

