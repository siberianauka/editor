import React, {useContext, useMemo} from 'react';
import styles from './prevview.module.css'
import {EditorContext} from "../../provider/EditContext";

const Prevview = () => {

    const {html, css, js} = useContext(EditorContext);

    const document = useMemo(() => {
        if(!html && !css && !js) return
        return `
         <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                    ${css}
                </style>
            </head>
                <body>
                    ${html}
                    <script>
                        ${js}
                    </script>
                </body>
            </html>
        `
    }, [html, js, css])

    return (
        <div className={styles.content}>
            {
                document
                    ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                    : <div className={styles.loading}>Your code</div>
            }
        </div>
    );
};

export default Prevview;