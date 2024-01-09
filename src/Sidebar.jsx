import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import game from './img/game.svg'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Kalyan Matka
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="./Home">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/UserManagement">
                    < BsPeopleFill className='icon'/>User Management
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/>Wallet Management
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/UserManagement">
                    <img src={game} className='icon'/>Game Management
                </Link>
            </li> 
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Game and Number
                </a>
            </li>
           
        </ul>
    </aside>
  )
}

export default Sidebar
