import React from 'react';
import styles from './CodeBar.module.css'
import HtmlEditor from "../Editor/HtmlEditor";
import JsEditor from "../Editor/JsEditor";
import CssEditor from "../Editor/CssEditor";
import FormEdit from "../Editor/FormEdit";
import MyButton from "../Button/MyButton";
import {useTabContext} from "../../provider/TabContext";
import Send from "../Editor/Send";
const CodeBar:React.FC = () => {
    const {activeTab, setActiveTab} =  useTabContext();

    return (
        <div className={styles.code_bar}>
            <nav className={styles.tab}>
                <MyButton
                    label={"HTML"}
                    onClick={() => setActiveTab('html')}
                />
                <MyButton
                    label={"CSS"}
                    onClick={() => setActiveTab('css')}
                />
                <MyButton
                    label={"JS"}
                    onClick={() => setActiveTab('js')}
                />
                <MyButton
                    label={"FORM"}
                    onClick={() => setActiveTab('form')}
                />
            </nav>
            <div className={styles.editor}>
                {activeTab === "html" ? <HtmlEditor/> : null}
                {activeTab === "css" ?  <CssEditor/>: null}
                {activeTab === "js" ? <JsEditor/> : null}
                {activeTab === "form" ? <FormEdit/> : null}
                {activeTab === "send" ? <Send/> : null}
            </div>
        </div>
    );
};

export default CodeBar;