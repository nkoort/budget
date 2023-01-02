import s from './header.module.scss'

import { FileBarGraph } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'


const Header = ({ }) => {


   return (
      <div className={s.headerWrapper}>
         <span className={s.title}>
            <NavLink to={'/'}>Ваш домашній бюджет</NavLink>
            {/* <NavLink ></NavLink> */}
         </span>
         <div className={s.mainContainer}></div>
         <div className={s.icon}>
            <NavLink to={'/'}>
               <FileBarGraph />
            </NavLink>
         </div>
      </div>
   )
}
export default Header