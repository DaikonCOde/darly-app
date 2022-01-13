import React from 'react'
import { useNavigate } from 'react-router-dom';
// Icons
import { CgChevronLeft, CgMail, CgLock } from 'react-icons/cg'
// Styles 
import { HeaderLogin, BodyLogin, ContentLogin, ContentBrand, ContentForm } from './LoginStyles';
import { ContentInput, FormIcon, FormInput } from '../../Styles/GlobalComponents/contentInput';
import { ButtonGradient } from '../../Styles/GlobalComponents/buttonGradient';

const Login = () => {

    const navigate = useNavigate();

    const handlePathLogin = () => {
        navigate(-1)
    }

    return (
        <ContentLogin>
            <HeaderLogin>
                <h2>Darly Store</h2>
                <CgChevronLeft onClick={ handlePathLogin }/>
            </HeaderLogin>
            <BodyLogin>
                <ContentBrand>
                    <span>Iniciar Sesión</span>
                </ContentBrand>

                <ContentForm>
                    <ContentInput>
                        <FormIcon>
                            <CgMail />
                        </FormIcon>
                        <FormInput>
                            <input type="email" autoComplete='on' placeholder='Email' />
                        </FormInput>
                    </ContentInput>
                    <ContentInput>
                        <FormIcon>
                            <CgLock />
                        </FormIcon>
                        <FormInput>
                            <input type="password" placeholder='Contraseña' />
                        </FormInput>
                    </ContentInput>
                    <ButtonGradient type='button' className='buttonSubmitForm'>
                        Ingresar
                    </ButtonGradient>
                </ContentForm>
            </BodyLogin>
        </ContentLogin>
    )
}

export default Login
