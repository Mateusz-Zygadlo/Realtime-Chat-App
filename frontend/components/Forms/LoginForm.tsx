import type { NextPage } from 'next';
import React, { useState } from 'react';

const LoginForm: NextPage = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const onSubmitFunc = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setSubmit(true);
  }
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    const {name, value} = element;

    setUser({
      ...user,
      [name]: value
    })
  }
  
  return(
    <form>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Login form</h1>
      <input name="email" type="email" placeholder="Enter your Email" className="inputStyle" value={user.email} onChange={onChange} />
      {user.email.length == 0 && submit ? <p className="text-white pl-5">Enter email</p> : null}
      <input name="password" type="password" placeholder="Enter your password" className="inputStyle" value={user.password} onChange={onChange} />
      {user.password.length == 0 && submit ? <p className="text-white pl-5">Enter password</p> : null}
      <button type="submit" className="buttonStyle shapeBg" onClick={onSubmitFunc}>Submit</button>
    </form>
  )
}

export default LoginForm;