
import React, { FC, useRef, useState } from 'react'
import CustomTable from '../elements/CustomTable';
const LandingPage: FC = () => {
  const [email, setEmail] = useState('test')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  };


  return (
    <div>
      <CustomTable />
    </div>
  )
}

export default LandingPage;
