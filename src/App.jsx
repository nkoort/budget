import './App.scss'
import './SCSS/null.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './SCSS/bootstrapCustom.scss'
import 'antd/dist/antd.css'

import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { size } from 'lodash';

import MainLayout from './layouts/MainLayout'
import Login from './pages/Login/Login';


function App() {


   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile/*" element={
               <Suspense fallback={<div>Loading...</div>}>
                  {/* <LazyProfile /> */}
               </Suspense>
            } />
         </Route>
      </Routes>
   )
}
export default App
