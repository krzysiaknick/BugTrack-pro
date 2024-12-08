'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';

const cmdOne = `
npm install eslint --save-dev
`

const cmdTwo = `
npx eslint --init
`

const cmdThree = `
npx eslint .
`

const cmdFour = `
npx eslint . --fix

`


export default function ESLint(){
    
    return(

        <div className="container">
        <h1 className="home-header">ESLint</h1>

        <div className='containerBlocks'>

            <p>ESLint is an open-source static code analysis tools that developers can use to ensure the JavaScript and TypeScript 
             code in their React application is consistent, maintainable, and follows the best coding practices. ESLint can automatically
             detect errors and even fix them on its own.
            </p>

            <p className='instructions'>To install ESLint, open your terminal and run the following:</p>

            <SyntaxHighlighter language="javascript" style={monokai}>
                        {cmdOne}
                    </SyntaxHighlighter>
                    <p>This will install ESLint into your current React Instance</p>
                    <p className='instructions'>Next we can initalize by entering:</p>
                    <SyntaxHighlighter language="javascript" style={monokai}>
                        {cmdTwo}
                    </SyntaxHighlighter>
                    <p className='instructions'>Then to run ESLint enter:</p>
                    <SyntaxHighlighter language="javascript" style={monokai}>
                        {cmdThree}
                    </SyntaxHighlighter>
                    <br />
                    <Image
                     src="/images/esslintErrors.png"
                     alt="npm run dev"
                     width={1400}
                     height={300}
                  />

                    <p>This will return all the errors ESLint has found. You will have to manually resolve most of these errors
                        yourself but ESLint can automatically fix some for you.
                    
                    </p>
                    <p className='instructions'>To have ESLint fix errors automatically enter:</p>
                    <SyntaxHighlighter language="javascript" style={monokai}>
                        {cmdFour}
                    </SyntaxHighlighter>

        </div>


        </div>
        
    )



}