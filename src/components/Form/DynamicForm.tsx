import React from 'react';
import styles from './Form.module.css';
import {useForm} from "react-hook-form";

export type Field = {
    type: 'text' | 'textarea';
    name: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => void;
};

export type DynamicFormProps = {
    fields: Field[];
    register: ReturnType<typeof useForm>['register'];
};

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, register }) => {
    return (
        <form className={styles.form}>
            {fields.map((field, index) => {
                const { type, name, label, onChange } = field;
                return (
                    <div className={styles.container}  key={index}>
                        <label className={styles.label} htmlFor={name}>{label}</label>
                        {type === 'text' ? (
                            <input
                                className={styles.input}
                                id={name}
                                placeholder={label}
                                {...register(name, {
                                    onChange: (e) => {
                                        if (onChange) onChange(e, name);
                                    },
                                })}
                            />
                        ) : (
                            <textarea
                                className={styles.textarea}
                                id={name}
                                placeholder={label}
                                {...register(name, {
                                    onChange: (e) => {
                                        if (onChange) onChange(e, name);
                                    },
                                })}
                            ></textarea>
                        )}
                    </div>
                );
            })}
        </form>
    );
};

export default DynamicForm;
