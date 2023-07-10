// - Styles

import s from './loginForm.module.css'

// - Actions

import { authLogin } from "../../features/auth";

// - Hooks

import { useAppDispatch } from "../../services/hooks.ts";

// - Libraries

import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'

// ---------------------------

interface FormValues {
    email: string
    password: string
    rememberMe: boolean
}

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Enter your email')
        .email('Enter valid email'),
    password: Yup.string()
        .min(7, 'Too short')
        .max(20, 'Too long')
        .required('Enter your password')
})


const initialValues: FormValues = {
    email: 'sergejananev48@gmail.com',
    password: 'zxcvbnm10122006',
    rememberMe: false
}

export const LoginForm = () => {

    const dispatch = useAppDispatch()

    const handleSubmit = ({email, password, rememberMe}: FormValues) => dispatch(authLogin({email, password, rememberMe}))

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
            {({isSubmitting}) => (
            <Form name="form1" className="box">
                <h5>Sign in to your account.</h5>
                <ErrorMessage name='email' component='span' className={s.label}/>
                <Field type="text" name="email" placeholder={'Email'}
                       autoComplete="off"/>
                <ErrorMessage name='password' component='span' className={s.label}/>
                <Field type="password" name="password"
                       placeholder={'Password'}
                       id="pwd" autoComplete="off"/>
                <label>
                    <Field type="checkbox" name='rememberMe' className='checkbox'/>
                    <span className='labelspan'></span>
                    <small className="rmb">Remember me</small>
                </label>
                <a href="#" className="forgetpass">Forget Password?</a>
                <button className="btn1" type='submit' disabled={isSubmitting}>Sign in</button>
            </Form>
            )}
        </Formik>
    );
}