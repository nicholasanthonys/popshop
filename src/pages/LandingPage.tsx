
import React, { FC, useState } from 'react'
import InputField from '../elements/InputField';
const LandingPage: FC = () => {
  const [email, setEmail] = useState('test')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  return (
    <div>
  
      <InputField label='Email' placeholder='Email' value={email} error={emailError} onChange={onChangeEmail} isPassword />
      <p>{email}</p>
    </div>
  )
}

export default LandingPage;
