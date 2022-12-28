import s from './mainlayout.module.scss'

import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import LoginContainer from '../pages/Login/Login'
import Header from '../components/Header/Header'




const MainLayout = () => {


   const [auth, setAuth] = useState()
   console.log(auth)

   return (
      <div id={s.wrapper}>
         <header>
            <Header />
         </header>
         <main style={{ height: '100%' }}>
            {!auth?.uid && <LoginContainer setAuth={setAuth} />}
            {auth?.uid && <Outlet />}
         </main>
         <footer>
            <div className={s.footer}>

            </div>
         </footer>
      </div>
   )
}
export default MainLayout
