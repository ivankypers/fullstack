import React from 'react';
import {Link} from "react-router-dom";


import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                   <Link to={'/users'}></Link>
                </li>
                <li>
                    <Link to={'/orders'}></Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;