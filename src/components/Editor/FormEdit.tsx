import React, {ChangeEvent, useCallback, useContext} from 'react';
import {EditorContext} from "../../provider/EditContext";
import {useForm} from "react-hook-form";
import DynamicForm from "../Form/DynamicForm";

type Field = {
    type: 'text' | 'textarea';
    name: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => void;
};

const FormEdit:React.FC = () => {
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
    // const titleRegister = register("title", { required: true });

    const formFields: Field[] = [
        { type: 'text', name: 'title', label: 'Заголовок', onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
                updateHtmlOnChange(e, '.title-set');
            }},
        { type: 'text', name: 'secondName', label: 'Second name' },
        { type: 'textarea', name: 'text', label: 'Текст письма' },
        // Добавьте больше полей по мере необходимости
    ];

    return (
        <>
            <DynamicForm fields={formFields} register={register} />
        </>
    );
};

export default FormEdit;