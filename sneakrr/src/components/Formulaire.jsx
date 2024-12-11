import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Connexion</h2>

                {message && (
                    <div className="mb-4 text-center text-red-500">{message}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Entrez votre email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Entrez votre mot de passe"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
}

export default LoginForm;