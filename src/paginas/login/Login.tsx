import React, { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css'
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

export default function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""

    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
    
            });
        }
        catch(error) {
            toast.error('Usuário inválido', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
    
            });
        }

    }

    return (

        <Grid className="boxForm" container >
            <Grid >
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold' }}>Login</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>

                        <Button variant="contained" type='submit' color='primary' >Login</Button>

                        <p>Não tem uma conta?
                            <Link to='/cadastro'>
                                <Button variant='outlined' color='primary'>Cadastre-se</Button>
                            </Link>
                        </p>
                    </form>
                </Box>
            </Grid>
        </Grid>

    )
}
