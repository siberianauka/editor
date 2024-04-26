import React from 'react';
import styles from './header.module.css'
import MyButton from "../Button/MyButton";
import {useTabContext} from "../../provider/TabContext";
const Header = () => {
    const {setActiveTab} =  useTabContext()
    return (
        <header className={styles.header}>
            <MyButton label={"SEND"}  onClick={() => setActiveTab('send')}/>
        </header>
    );
};

export default Header;