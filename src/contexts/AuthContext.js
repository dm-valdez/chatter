import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';


// creating the context
const AuthContext = React.createContext();

// function that can grab the context
export const useAuth = () => useContext(AuthContext);

// set loading and user state
export const AuthProvider = ({ children }) => { // rendering all jsx by react children
    const [loading, setLoading] = useState(true); 
    const [user, setUser] = useState(null); 
    const history = useHistory();

    // fetching the user data from the firebase application
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            
            if (user) history.push('/chats');
        })
    }, [user, history]);

    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}    
        </AuthContext.Provider>
    )
}