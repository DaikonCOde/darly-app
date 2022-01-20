import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading/Loading'

// db
import { auth } from '../../db/connect';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { DBfirestore } from '../../db/connect';
// Icons
import { CgChevronLeft, CgMail, CgLock } from 'react-icons/cg';
import { MdVisibility, MdVisibilityOff, MdPersonOutline } from 'react-icons/md';
// Styles 
import { HeaderLogin, BodyLogin, ContentLogin, ContentBrand, ContentForm } from './LoginStyles';
import { ContentInput, FormIcon, FormInput } from '../../Styles/GlobalComponents/contentInput';
import { ButtonGradient } from '../../Styles/GlobalComponents/buttonGradient';


const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const navigate = useNavigate();
    const [ alreadyRegistered, setAlreadyRegistered ] = useState(true);
    const [ visible, setVisible ] = useState(false);
    const [ stateForm, setStateForm ] = useState({
        loading: false,
        error: null,
        success: null,
    });
    
    const handlePathLogin = () => {
        navigate(-1, { replace: false})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const name = e.target.elements.name.value;

        setStateForm({ ...stateForm, loading: true })

        if(!alreadyRegistered) {
            // register user
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password)

                return createNewUser(user, name ,email) 
            } catch (error) {
                setStateForm({ error: error, success: false,  loading: false })
                
            }
            
        } else {
            // sign in user
            try {
                await signInWithEmailAndPassword(auth, email, password);
                setStateForm({ error: null, success: true,  loading: false })
                
                navigate('/', { replace: true })
            } catch (error) {
                setStateForm({ error: error, success: false,  loading: false })
            }
        }


    }

    const signInWithGoogle = async () => {
        setStateForm({ ...stateForm, loading: true })
        const { user } = await signInWithPopup(auth, googleProvider);

        return createNewUser(user, user.displayName, user.email)
    }

    const createNewUser = async (user, name, email) => {

        const docRefUser = await doc(DBfirestore, `users/${user.uid}`);
        const getDocUser = await getDoc(docRefUser);

        if ( getDocUser.exists() ) {
            setStateForm({ error: null, success: true,  loading: false })
            navigate('/', { replace: true });
            return;
        }
        
        await setDoc(docRefUser, { name: name, email: email, rol: 'client' });
        setStateForm({ error: null, success: true,  loading: false });
        navigate('/', { replace: true });
    }

    return (
        <ContentLogin>
            {
                stateForm.loading && <Loading />
            }
            <HeaderLogin>
                <h2>Darly Store</h2>
                <CgChevronLeft onClick={ handlePathLogin }/>
            </HeaderLogin>
            <BodyLogin>
                <ContentBrand>
                    <span>{ alreadyRegistered ? 'Inicia Sesión' : 'Regístrate'  }</span>
                </ContentBrand>

                <ContentForm onSubmit={handleSubmit} >
                    {
                        !alreadyRegistered 
                            ? <ContentInput>
                                <FormIcon>
                                    <MdPersonOutline />
                                </FormIcon>
                                <FormInput>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='Nombre'
                                        required
                                    />
                                </FormInput>
                            </ContentInput>
                            : null
                    }
                    <ContentInput>
                        <FormIcon>
                            <CgMail />
                        </FormIcon>
                        <FormInput>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                required
                            />
                        </FormInput>
                    </ContentInput>
                    <ContentInput>
                        <FormIcon>
                            <CgLock />
                        </FormIcon>
                        <FormInput>
                            <input 
                                
                                type={ visible ? 'text' : 'password' } 
                                name="password"
                                id="password"
                                placeholder='Contraseña'
                                required
                            />
                            <span onClick={ () => setVisible(!visible) } className='changeVisibility' >
                                { 
                                    visible ? (<MdVisibilityOff />) : (<MdVisibility />)
                                }
                            </span>
                        </FormInput>
                    </ContentInput>
                    <ButtonGradient type='submit' className='buttonSubmitForm'>
                        { alreadyRegistered ? 'Iniciar Sesión' : 'Registrarme'  }
                    </ButtonGradient>
                    { (stateForm.error) && (
                            <span className="signInFailed" >El Correo o la contraseña son incorrectos</span>
                        ) 
                    } 
                    <span className="signIn google" onClick={ signInWithGoogle } >
                        <span> 
                            <svg  viewBox="0 0 256 262" >
                                <g>
                                    <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"></path>
                                    <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"></path>
                                    <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"></path>
                                    <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"></path>
                                </g>
                            </svg>
                        </span> 
                        Acceder con Google 
                    </span>
                    <span className="alreadyRegistered" onClick={ () => setAlreadyRegistered(!alreadyRegistered) } >{ alreadyRegistered ? '¿No tienes una cuenta?, Registrate aquí!' : '¿Ya tienes una cuenta?, inicia sesión'  }</span>
                </ContentForm>
            </BodyLogin>
        </ContentLogin>
    )
}

export default Login
