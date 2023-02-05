import NavLinks from "./NavLinks";
import {HiMenu} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';
import {useState} from "react";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);

    const menuIcon = <HiMenu className="menu-icon" size='50px' color='#EBEBF0' onClick={() => setIsOpen(!isOpen)}/>
    const closeIcon = <MdClose className="menu-icon" size='50px' color='#EBEBF0' onClick={() => setIsOpen(!isOpen)}/>


    return <nav className='mobile-navigation'>
        {isOpen ? closeIcon : menuIcon}
        {isOpen && <NavLinks/>}
    </nav>

};

/*TODO: add animation for menu*/

export default MobileNavigation;