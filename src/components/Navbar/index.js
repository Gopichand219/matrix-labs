import {FaFacebook , FaLinkedin } from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiJsonwebtokens} from 'react-icons/si'
import {GiAutoRepair} from 'react-icons/gi'

import './index.css'

const Navbar = props => {
    const {changePath}  = props

    const onClickIcon = event => {
        changePath(event.target.value)
    }

    return (
        <nav className="dax-screen-navbar">
            <div>
            <h1 className='daxscreen-navbar-head'> nFTify</h1>
            <ul className='dax-screen-navbar-items-list'>
                <li >
                    <button type = 'button' onClick={onClickIcon} value = 'Token' className='dax-screen-navbar-item'>
                    <SiJsonwebtokens /> Token Address 
                    </button>
                </li>
                <li >
									<button type = 'button' onClick={onClickIcon} value = 'Pair' className='dax-screen-navbar-item'>
                    <GiAutoRepair /> Pair Address 
                    </button>
                </li>
            </ul>
            </div>
            <div className='dax-screen-navbar-icons-container'>
            <a href = 'https://www.facebook.com/' target = '_blank'>
                <FaFacebook className='dax-screen-navbar-app-icon' />
            </a>
            <a href = 'https://www.linkedin.com/' target = '_blank'>
                <FaLinkedin className='dax-screen-navbar-app-icon' />
            </a>
            <a href = 'https://www.twitter.com/' target = '_blank'>
                <AiFillTwitterCircle className='dax-screen-navbar-app-icon'/>
            </a>
            </div>
        </nav>
    )
}

export default Navbar