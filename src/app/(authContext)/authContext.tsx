"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

interface AuthContextType {
    userId: string | undefined;
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
    isTokenExpired: () => boolean;
    getAdminToken: () => Promise<string|null>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const [token, setToken] = useState<string | null>(initialToken);
    const [userId, setUserId] = useState<string>()

    const login = (newToken : string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUserId(jwtDecode(newToken).sub)
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

    const getAdminToken = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8081/realms/MindPlus/protocol/openid-connect/token',
                new URLSearchParams({
                    grant_type: 'password',
                    client_id: 'login-app',
                    client_secret: "abASa668rvZwAITiGFwx5tq6xnK1MNm8",
                    username: 'user-manager',
                    password: 'nuS36!07',
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            return response.data.access_token;
        } catch (error) {
            console.error('Error fetching admin token:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ userId, token, login, logout, isTokenExpired, getAdminToken }}>
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