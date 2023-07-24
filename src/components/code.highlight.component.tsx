import { Highlight } from "prism-react-renderer";

interface HighlightCodeProps {
    code: string;
}

const HighlightCode:React.FC<HighlightCodeProps> = ({code}) => {
  return (
    <Highlight
        code={code}
        language="js"
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="pre">
              {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                ))}
            </div>
            ))}
        </pre>
        )}
    </Highlight>
  )
}

export default HighlightCode