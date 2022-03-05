import React from 'react'
import {NavLink} from "react-router-dom";
import navStyle from './Header.module.css';

function Header() {

    return (
        <div>
            <nav>
                <div className={navStyle.main}>
                    <div>
                        <NavLink className={(data) => data.isActive ? navStyle.active__link : ''}
                                 to={'/pre-junior'}>pre-junior</NavLink>
                    </div>
                    <div>
                        <NavLink className={(data) => data.isActive ? navStyle.active__link : ''}
                                 to={'/junior'}>junior</NavLink>
                    </div>
                    <div>
                        <NavLink className={(data) => data.isActive ? navStyle.active__link : ''}
                                 to={'/junior-plus'}>junior+</NavLink>
                    </div>
                    <div className={navStyle.hide}>Menu</div>
                </div>
            </nav>
        </div>
    )
}

export default Header
