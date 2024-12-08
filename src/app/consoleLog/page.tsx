'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ConsoleLog(): JSX.Element {
    console.log("Console Log Page Loaded!");

    const handleClick = (): void => {
        console.log("Button was clicked!");
    };

    const consoleLogCodeString = `
export default function ConsoleLog() {
    console.log("Console Log Page Loaded!");
}`;

    const codeString = `
import React, { useEffect, useState } from 'react';

const User: React.FC = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        console.log("Starting fetch..."); // Check if the fetch starts
        fetch('https://api.example.com/user')
            .then(res => res.json())
            .then(data => {
                console.log("Data received:", data); // Check the data
                setUsername(data.name);
            })
            .catch(err => console.log("Error:", err)); // Check for errors
    }, []);

    return <p>{username || "Loading..."}</p>;
};

export default User;
`;

    return (
        <div className="container">
            <div className="containerBlocks">
                <h1 className="home-header">console.log()</h1>
                <p>
                    <code>console.log</code> is a built-in function in JavaScript and TypeScript used to print messages, values, or debugging
                    information to the browser&apos;s console or terminal. It is primarily used by developers to inspect the output of
                    their code, track variable values, and debug issues during development. By passing data or expressions to
                    <code>console.log</code>, developers can gain real-time insights into the behavior of their scripts, making it an
                    essential tool for troubleshooting and understanding program flow.
                </p>

                <div className="code-blocks">
                    <SyntaxHighlighter language="javascript" style={monokai}>
                        {consoleLogCodeString}
                    </SyntaxHighlighter>
                </div>

                <p className='instructions'>View your browser debugger to see this message logged in the console!</p>

                <button onClick={handleClick} className="log-button" aria-label="Log Button">
                    Click Me and Check the Console!
                </button>

                <p className='instructions'>Review the code below to see a real-life example of this practice in use!</p>

                <div className="code-blocks">
                    <SyntaxHighlighter language="javascript" style={monokai}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <p>
                    Using <code>console.log</code> in this simplified React example helps you quickly identify where issues might occur during the
                    component&#39;s data fetching process. The first log, &quot;Starting fetch...&quot;, ensures the <code>useEffect</code> is
                    running and the fetch call is initiated. The second log, &quot;Data received:&quot;, confirms whether the API is
                    returning the expected data. If the data isn&#39;t structured as expected or isn&#39;t returned at all, this will
                    highlight the problem. Finally, the error log, &quot;Error:&quot;, catches and displays any issues during the fetch
                    process, such as network errors or incorrect API endpoints. These logs provide clear checkpoints to debug the flow
                    step-by-step.
                </p>
            </div>
        </div>
    );
}
