
import React, { FC, useState } from 'react'
import InputField from '../elements/InputField';
import CustomButton from '../elements/CustomButton';
import Navbar from '../elements/Navbar';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png'
import apple from '../assets/images/apple.png'
import google from '../assets/images/google.png'

function LoginPage() {
  const [email, setEmail] = useState('test')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  return (
    <div className='pt-[18px] pl-[26px] pr-[27px] pb-18px'>
      <img src={logo} className='object-contain w-157px h-51px ' />
      <br />

      <h3 className='font-semibold text-[26px] leading-[39px]'> Sign in to</h3>
      <h4 className='font-medium text-[21px] leading-[32px]'>Lorem Ipsum is simply  </h4>
      <br />
      <br />

      <InputField placeholder='Email' value={email} error={emailError} onChange={onChangeEmail} className='h-[62px]' />
      <br />
      <InputField placeholder='Password' value={email} error={emailError} onChange={onChangeEmail} className='h-[62px]' isPassword />
      <br />
      <p className='text-right text-[#B0B0B0]'>Forgot password ?</p>
      <br />
      <br />

      <CustomButton className="h-[59px]" onClick={() => { }}>Login</CustomButton>
      <br />
      <br />
      <p className='text-center text-[#B0B0B0]'> or continue with</p>
      <br />
      <div className='flex justify-center'>
        <img src={facebook} className='mr-6' />
        <img src={apple} className='mr-6' />
        <img src={google} />
      </div>
      <br />
      <br />
      <p className='font-medium text-base text-center'>You Don’t Have Account? <span className='underline text-[#3e76ff]'>Register Here</span></p>






    </div>
  )
}

export default LoginPage;
