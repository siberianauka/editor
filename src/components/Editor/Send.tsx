import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import DynamicForm, { Field } from "../Form/DynamicForm";
import MyButton from "../Button/MyButton";

// Расширьте тип FormData, чтобы включить все поля, которые вы хотите зарегистрировать
type FormData = {
    file: FileList; // Предполагая, что вы загружаете файл
    title: string; // Добавьте другие поля, которые вы хотите зарегистрировать
    secondName: string;
    // Добавьте больше полей по мере необходимости
};

const Send = () => {
    // const { register, handleSubmit } = useForm<FormData>();
    const {register} = useForm()
    const formFields: Field[] = [
        { type: 'text', name: 'title', label: 'Тема письма' },
        { type: 'text', name: 'secondName', label: 'Second name' },
        // { type: 'dropdown'}
        // Добавьте больше полей по мере необходимости
    ];
    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
            const formData = new FormData();
            formData.append("file", data.file[0]);

            // Здесь вы можете обработать загрузку файла на сервер
            const res = await fetch("http://localhost:5000/upload-file", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());
            alert(JSON.stringify(`${res.message}, status: ${res.status}`));
        } catch (e) {
            console.error("Ошибка при загрузке файла:", e);
            alert("Произошла ошибка при загрузке файла. Пожалуйста, попробуйте еще раз.");
        }
    };

    return (
        <>
            <DynamicForm fields={formFields} register={register} />
        </>
    );
};

export default Send;
