import React, {useContext} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../../provider/EditContext";

const JsEditor = () => {

    const {js, setJs } = useContext(EditorContext);

    return (
        <AceEditor
            placeholder="Write your JS code"
            mode="javascript"
            theme="monokai"
            name="editor_js"
            value={js}
            onChange={value => setJs(value)}
            fontSize="18"
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
            }}

        />
    );
};

export default JsEditor;