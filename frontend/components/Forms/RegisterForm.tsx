import type { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

axios.defaults.withCredentials = true;

const RegisterForm: NextPage = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    password: '',
  })
  const formSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const {nickname, email, password} = user;
    
    if(!(nickname && email && password)){
      e.preventDefault();
    
      return setSubmit(true);
    }
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
    <form method="POST" action="http://localhost:8000/auth/register" onSubmit={formSubmit}>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Register form</h1>
      <input name="nickname" type="text" placeholder="Enter your nickName" className="inputStyle" value={user.nickname} onChange={onChange} />
      {user.nickname.length == 0 && submit ? <p className="text-white pl-5">Enter nickname</p> : null}
      <input name="email" type="email" placeholder="Enter your Email" className="inputStyle" value={user.email} onChange={onChange} />
      {user.email.length == 0 && submit ? <p className="text-white pl-5">Enter email</p> : null}
      <input name="password" type="password" placeholder="Enter your password" className="inputStyle" value={user.password} onChange={onChange} />
      {user.password.length == 0 && submit ? <p className="text-white pl-5">Enter password</p> : null}
      <button type="submit" className="buttonStyle shapeBg">Submit</button>
      <div className="my-5 w-72 flex justify-center w-full">
        <Link href='/login' passHref>
          <p className="border-b-2 border-transparent mx-auto text-white focus:outline-none focus:border-blue-300 hover:border-white transition-colors cursor-pointer">if you have an account click here</p>
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm;