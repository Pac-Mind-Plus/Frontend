import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from './authContext';

interface PrivateRouteProps {
    children: React.ReactNode;
    component: React.ComponentType<any>;
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, component: Component, ...rest }) => {
    const { token } = useAuth();

    return (
        <Route
            {...rest}
            element={token ? <Component>{children}</Component> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;