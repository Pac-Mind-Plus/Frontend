"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
    isTokenExpired: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const [token, setToken] = useState<string | null>(initialToken);

    const login = (newToken : string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    const isTokenExpired = () => {
        if (!token) {
            return true;
        }
        
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000; // em segundos

        return decodedToken.exp < currentTime;
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, isTokenExpired }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
};