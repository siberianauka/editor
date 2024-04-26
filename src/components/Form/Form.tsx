import React, {ChangeEvent, useCallback, useContext} from 'react';
import { useForm} from "react-hook-form";
import styles from './Form.module.css'
import {EditorContext} from "../../provider/EditContext";

const Form:React.FC = () => {
    const {html, setHtml} = useContext(EditorContext)
    const { register} = useForm();

    function parseHtml(html: string): Document {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    }

    const updateHtmlOnChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName:string) => {
        console.log(fieldName)
        if (fieldName === '.title-set') {
            const newTitle = e.target.value;
            const doc = parseHtml(html);
            const titleElement = doc.querySelector(fieldName);
            if (titleElement) {
                titleElement.textContent = newTitle;
            }
            const updatedHtml = doc.documentElement.outerHTML;
            setHtml(updatedHtml);
        }
    }, [html,setHtml]);
    const titleRegister = register("title", { required: true });

    return (
        <>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    {...register("title")}
                    placeholder="Заголовок"
                    onChange={(e) =>{
                        updateHtmlOnChange(e, '.title-set')
                    }}
                />
                <input
                    className={styles.input}
                    {...register("second Name")}
                    placeholder="Second name"
                />
                <textarea className={styles.textarea} {...register("text"   )} placeholder="Текст письма" />
                <input type="submit"  className={styles.input}/>
            </form>
        </>
    );
};

export default Form;

