import { useState } from 'react'
import HighlightCode from './code.highlight.component'
import Editor from './textarea.component'
import Header from './header.component'

const CodeEditor = () => {
    const initialCode = `
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }
        
        const element = <Welcome name="Akhil Sharma" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    `
    const [code, setCode] = useState(initialCode);
    return (
    <>
        <Header />
        <div className="code-container">
            <HighlightCode code={code} />
            <Editor 
                code={code}
                setCode={setCode}
            />
        </div>
    </>
    )
}

export default CodeEditor;