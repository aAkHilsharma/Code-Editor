interface EditorProps {
    code: string;
    setCode: (newCode: string) => void;
}

const Editor:React.FC<EditorProps> = ({setCode, code}) => {
    return (
        <div className=''>
            <textarea
                className="text-area-code-editor"
                value={code}
                spellCheck={false}
                onChange={(e) => setCode(e.target.value)}
            />
        </div>
    )
}

export default Editor