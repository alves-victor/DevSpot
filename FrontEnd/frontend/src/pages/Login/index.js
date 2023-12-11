import React from "react";
import api from '../../services/api';
import { useState } from 'react';
import { createBrowserHistory } from "history";

export default function Login(){

    const [email, setEmail] = useState('');

    const history = createBrowserHistory();

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('/users', { email });
        const { _id } = response.data;
        localStorage.setItem('user', _id);
        
        history.push('/dashboard');
        history.go();
    }

    return(
        <>
            <p>
                Ofereça <strong>Spots</strong> para programadores e encontre <strong>Talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL *</label>
            <input type="email" id="email" 
                value={email} 
                onChange={event => setEmail(event.target.value)}
            />
            <button className='btn' type='submit'>Entrar</button>
            </form>
        </>
    );
}