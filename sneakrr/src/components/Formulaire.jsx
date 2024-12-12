import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import logo from './assets/Designer.png';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/login', {
                email,
                password
            });

            if (response.status === 200) {
                setMessage('Connexion réussie!');
                console.log('Utilisateur:', response.data.user);

                login();
                navigate('/home');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('Identifiants invalides');
            } else {
                setMessage('Une erreur est survenue.');
                console.error('Erreur:', error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgba(241, 241, 231, 1)' }}>
            <div className="w-full max-w-md p-8">
                
                <div className="flex items-center justify-center mb-6">
                    <img 
                        src={logo} 
                        alt="Sneakr Logo" 
                        className="w-40 h-40"
                    />
                </div>

                <form onSubmit={handleSubmit} className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Connexion</h2>

                    {message && (
                        <div className="mb-4 text-black-500">{message}</div>
                    )}

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                            placeholder="Entrez votre email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black-500"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;