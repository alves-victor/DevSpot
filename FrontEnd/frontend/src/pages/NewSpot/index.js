import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import { createBrowserHistory } from 'history';

import camera from '../../assets/camera-icon.png';
import './style.css';

export default function NewSpot(){

    const history = createBrowserHistory();

    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(event){
        event.preventDefault();

        const form = new FormData();
        const user_id = localStorage.getItem('user');

        form.append('thumbnail', thumbnail);
        form.append('company', company);
        form.append('techs', techs);
        form.append('price', price);

        await api.post('/spots', form, {
            headers: { user_id }
        })

        history.push('/dashboard');
        history.go();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label 
                id='thumbnail' 
                style={{ backgroundImage : `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input 
                    type="file"
                    onChange={event => setThumbnail(event.target.files[0])} 
                />
                <img src={camera} alt="camera icon" />
            </label>

            <label htmlFor="company">Empresa</label>
            <input 
                id='company'
                placeholder='Sua empresa'
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologias * <span>(separadas por vírgula)</span></label>
            <input
                id='techs'
                placeholder='Quais tecnologias usam?'
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor='price'>Valor a ser cobrado <span>(Para spot gratuito deixe em branco)</span></label>
            <input
                id='price'
                placeholder='Valor da diária do spot'
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type='submit' className='btn'>Cadastrar</button>

        </form>
    )

}