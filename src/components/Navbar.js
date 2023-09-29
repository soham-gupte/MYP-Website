import { useState } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import logo from "./myplogo.png"
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

// REMOVE THE LOGO, REPLACE IT!

export function Navbar() {
    const [click, setClick] = useState(true);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <nav className="NavbarItems">
            <img className="logo" src={logo} alt="TedX-COEP Logo"></img>
            <div className="menu-icons">
                {click ? <FaBars onClick={handleClick}/> : <IoClose onClick={handleClick}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {MenuData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}