'use client';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function consoleLog() {



    console.log("Console Log Page Loaded!");

    
   
    const handleClick = () => {
      console.log("Button was clicked!");
    };




    const codeString = `
    import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    console.log("User typed:", e.target.value); // Log user input
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Search Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <p>Searching for: {query}</p>
    </div>
  );
}

export default SearchBar;

  `;



    return(
        
        <div className="container">
            <div className='containerBlocks'>
            <h1 className="home-header">console.log()</h1>
            <p> console.log is a built-in function in JavaScript and TypeScript used to print messages, values, or debugging 
                information to the browser's console or terminal. It is primarily used by developers to inspect the output of 
                their code, track variable values, and debug issues during development. By passing data or expressions to 
                `console.log`, developers can gain real-time insights into the behavior of their scripts, making it an 
                essential tool for troubleshooting and understanding program flow.</p>
                
                <Image src="/images/consolelog.png" alt="chromestore" className='img' width={1200} height={300} />

                <p>View your browser debugger to see this message logged in console!</p>

                <button onClick={handleClick} className="log-button">
                     Click Me and Check the Console!
                        </button>



                    <h1>Review the code below to see a real life example of this practice in use! </h1>

                        <div className='code-blocks'>
                        <SyntaxHighlighter language="javascript"  style={monokai}> 
                                   {codeString}
                                 </SyntaxHighlighter>
                                 </div>

                    <p>In this example we see how console.log can be used to debug a search bar.
                    When the user types into the search bar, the handleInputChange function logs the input value to the console.
                    Then the displayed text updates to show what the user is searching for.
                    

                    </p>
                </div>
        </div>


    )






    

}
