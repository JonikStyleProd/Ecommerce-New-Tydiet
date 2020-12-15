import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect} from 'react-redux';
import Button from '../components/buttons/button.component';
import Container from '../components/container/container.component';
import FormInput from '../components/inputs/form.input.component';
import { register } from '../data/reducers/auth';

const Register = ({ register }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

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

    return (
        <Container>
            <form className='bg-white rounded-lg overflow-hidden shadow-2xl p-5 mt-16 md:w-1/2 lg:w-1/3 mx-auto' onSubmit={onSubmit}>
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
                <Button 
                title='SingUp'
                moreStyle='bg-primary text-white w-full mb-5 mt-8'
                type='submit'
                />
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

export default connect(null, {register} )(Register);
