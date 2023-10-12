import ArrowButtons from '@/app/components/header/buttons/Arrow-buttons'
import LoginButton from '@/app/components/header/buttons/Login-button'
import React from 'react'

const Header = () => {
  return (
    <header className='absolute flex items-center justify-between px-5 bg-main w-full mt-2 overflow-hidden p-3 h-16 rounded-lg rounded-b-none'>
        <div>
          <ArrowButtons buttonProp="greater"/>
          <ArrowButtons buttonProp="less" />
        </div>
        <div>
          <LoginButton buttonProp="register"/>
          <LoginButton buttonProp="login" />
        </div>
    </header>
  )
}

export default Header