import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { AuthContext } from './Authentication/AuthenticationProvider';

const PrivateRoute = ({ children }) => {
    let { loggedInUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }
    if (loggedInUser) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;