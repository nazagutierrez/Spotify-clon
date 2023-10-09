import LoginButton from '@/app/login/buttons/Login-button'
import React from 'react'

const Header = () => {
  return (
    <header className='absolute flex justify-between px-5 bg-slate-600 w-full mt-2 overflow-hidden p-3 h-16 rounded-lg rounded-b-none text-aside-color'>
        <div>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <div>
          <LoginButton buttonProp="register"/>
          <LoginButton buttonProp="login" />
        </div>
    </header>
  )
}

export default Header