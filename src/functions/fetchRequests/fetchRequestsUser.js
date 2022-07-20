// :: users - holds the users 

// id - integer (auto create by MySql/Postgres), PK
// username - String, unique, required
// password - String, unique, required
// fullName - String, required
// email    - String, required, unique
// bio      - Text (String)
// hasRopes - Boolean, required, ??
// location - String, required, ??

// ------------------------------------------------------

// POST /user/login {username, password} => {userObj, token}   :: login a user by validating his username and password

// POST /user {userObj} => {userObj, token}     :: create a user in the database
// PATCH /user {userObj, token} => {userObj}    :: update a user in the database
// DELETE /user {token} => {success/failure}    :: delete a user in the database

// GET /user/self {token} => {userObj}          :: get logged-in user's information
// GET /user/:username => {userObj}             :: get another user's data - maybe a potential buddy or a buddy
// GET /user/friends {token} => [{userObj}, ]   :: get list with the user's buddies

// ------------------------------------------------------

// loginUser (userObj, setUser)         :: loginUser( {userObj}, setUser ) => fetch(); use setUser( loggedUser ); save token
// logoutUser (setUser)                 :: logoutUser( token ) => remove token; setUser( {} )

// createUser (userObj, setUser)        :: createUser( {userObj}, setUser ) => fetch(); use setUser( newUser ); save token
// updateUser (userObj, setUser)        :: updateUser( {userObj}, setUser, token ) => fetch(); use setUser( user ); 
// deleteUser (userObj, setUser)        :: deleteUser( {userObj,password}, token ) => fetch(); setUser( {} ); remove token;

// retrieveUser (setUser)               :: retrieveUser( token ) => fetch(token); retrieve userObj
// retrieveUserByUsername ( username, setUser) :: retrieveUserByUsername( username ) => fetch(token); retrieve userObj
// retrieveUserFriends (setFriendList)  :: retrieveUserFriends( setFriends ) => fetch(token); retrieve [userObj,]

// ------------------------------------------------------


// createUser( {userObj}, setUser ) => fetch(); use setUser( newUser ); save token
export const createUser = async (userObj, setUser) => {

    try {
        // POST /user {userObj} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });


        const data = await res.json();
        console.log('-> createUser(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // since Michael doesn't want the token in localStorage, attach it to userObj
        data.user.authToken = data.token

        // set the user to state
        setUser( data.user );

        // return the result
        return res.ok;

    } catch (error) {
        console.log('-> createUser(), error: ',error);
        return false;
    }

};


// updateUser( {userObj}, setUser, token ) => fetch(); use setUser( user ); 
export const updateUser = async (userObj, setUser) => {
    try {
        // PATCH /user {userObj, token} => {userObj}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "authorization": userObj?.authToken,
            },
            body: JSON.stringify( userObj ),
        });

        const data = await res.json();
        console.log('-> updateUser(), data:', data);

        // if (data.error) throw new Error(data.error)
        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state -- not needed i think
        setUser( data );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> updateUser(), error: ',error);
        return false;
    }
};


// deleteUser( {userObj,password}, token ) => fetch(); setUser( {} ); remove token;
export const deleteUser = async (userObj, setUser) => {
    try {
        // DELETE /user {token} => success/failure 
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "authorization": userObj?.authToken,
            },
        });

        const data = await res.json();
        console.log('-> deleteUser(), data:', data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // remove the user from state, remove the token
        setUser( {} );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> deleteUser(), error: ',error);
        return false;
    }

};


// loginUser( {userObj}, setUser ) => fetch(); use setUser( loggedUser ); save token
export const loginUser = async (userObj, setUser) => {
    try {
        console.log('->loginUser() run with userObj: ', userObj)
        // POST /user/login {username, password} => {userObj, token}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( userObj ),
        });

        const data = await res.json();
        console.log('->loginUser(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // save user token 
        data.user.authToken = data.token

        // set the user to state
        setUser( data.user );

        // returns the result
        return res.ok;

    } catch (error) {
        console.log('-> loginUser(), error: ',error);
        return false;
    }
};


// logoutUser( token ) => remove token; setUser( {} )
export const logoutUser = async (setUser) => {

    setUser( {} );

};


// retrieveUser( token ) => fetch(token); retrieve userObj
export const retrieveUser = async (setUser) => {
    try {
        // GET /user/self {token} => {userObj}
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user/self`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                "authorization": userObj?.authToken,
            }
        });

        const data = await res.json();
        console.log('-> retrieveUser(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setUser( data );

    } catch (error) {
        console.log('-> retrieveUser(), error: ',error);
        return false;
    }
}



// retrieveUserByUsername( username ) => fetch(token); retrieve userObj
export const retrieveUserByUsername = async ( username, setUser) => {
    try {
        // GET /user/:username => {userObj} 
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user/${username}`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                // "authorization": userObj?.authToken,
            }
        });

        const data = await res.json();
        console.log('-> retrieveUserByUsername(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setUser( data );

    } catch (error) {
        console.log('-> retrieveUserByUsername(), error: ',error);
        return false;
    }
}



// retrieveUserFriends( setFriends ) => fetch(token); retrieve [userObj,]
export const retrieveUserFriends = async (setFriendList) => {
    try {
        // GET /user/friends {token} => [{userObj}, ]
        const res = await fetch(`${process.env.REACT_APP_REST_API}/user/friends`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                "authorization": userObj?.authToken,
            }
        });

        const data = await res.json();
        console.log('-> retrieveUserFriends(), data: ',data);

        if (!res.ok || data.error) throw new Error(`FetchError ${res.status} : ${data.error || data}`)

        // set the user to state
        setFriendList( data );

    } catch (error) {
        console.log('-> retrieveUserFriends(), error: ',error);
        return false;
    }
}
