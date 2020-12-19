import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect} from 'react-redux';
import Button from '../components/buttons/button.component';
import Container from '../components/container/container.component';
import FormInput from '../components/inputs/form.input.component';
import { register } from '../data/reducers/auth';
import './loading.css';
import { Redirect } from 'react-router-dom';

const Register = ({ register, isAuth, isLoading, user }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    console.log(isLoading)
    const { name, email, password, confirmPassword } = data;

    const handleChange = (name) => event => {
        setData({...data, [name]: event.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log('submit');
        if(password !== confirmPassword){
            toast.error('Password do not match');
        }else {
            register({
                name,
                email,
                password
            })
        }
    }


if(isAuth && user) {
    const {name, role } = user
    toast.success(`Welcome ${name}`)
    if(role === 0) return <Redirect to='/dashboard/user'/>
    if(role === 1) return <Redirect to='/dashboard/admin'/>
}

    return (
        <Container>
            <form className='bg-white rounded-lg overflow-hidden shadow-2xl p-5 mt-16 md:w-1/2 lg:w-1/3 mx-auto flex flex-col' onSubmit={onSubmit}>
                <h2 className='font-bold text-3xl text-center mb-5'>Register</h2>
                <FormInput 
                title='Name'
                placeholder='Your name...'
                value={name}
                handleChange={handleChange('name')}
                type='text'
                />
                <FormInput 
                title='Email'
                placeholder='tester@example.com'
                value={email}
                handleChange={handleChange('email')}
                type='email'
                />
                <FormInput 
                title='Password'
                placeholder='**********'
                value={password}
                handleChange={handleChange('password')}
                type='password'
                />
                <FormInput 
                title='Confirm Password'
                placeholder='**********'
                value={confirmPassword}
                handleChange={handleChange('confirmPassword')}
                type='password'
                />
                {isLoading && <div id='loading' className='self-center mb-3 mt-5' />}
                {!isLoading && (
                        <Button
                            title='SignUp'
                            moreStyle='bg-primary text-white w-full mb-3 mt-5'
                            type='submit'
                        />
                )}
                
               
                <div className='flex justify-end w-full'>
                    <Button 
                    isButton={false}
                    title='Already have an account ?'
                    href='/login'
                    moreStyle='text-gray-600'
                    />
                </div>
            </form>
        </Container>
    );
};

const mapToStateProps = state => ({
    isAuth: state.auth.isAuthenticated,
    isLoading: state.auth.loading,
    user: state.auth.user
})
export default connect(mapToStateProps, {register} )(Register);
