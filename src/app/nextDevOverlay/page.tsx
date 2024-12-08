'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';

const commandOne = `
npm run dev

`


export default function About() {
    return (
        <div className="container">
        <h1 className="home-header">Next.JS Development Enviroment</h1>
            <div className="containerBlocks">

                <p>The Next.JS Development Enviroment is a tool for develeopers to use in order to detect and resolve bugs in a Next.JS
                    enviroment. This tool is built into Next.js and is ran by starting the development server.
                </p>
                <p className="instructions">To run the server open the terminal and enter:</p>
                <SyntaxHighlighter language="javascript" style={monokai}>
                        {commandOne}
                    </SyntaxHighlighter>
                    <p className='instructions'>You should now see that the local server has been started</p>
                <Image
                     src="/images/npmRunDev.png"
                     alt="npm run dev"
                     width={1400}
                     height={300}
                  />
                  <p>This will function like a normal local development server but will include a few differences. For example,
                    Any errors in your code will show up in the console but also in a red bubble in the bottom left hand corner of the Screen.
                    You will also see a lightning bold icon which will incicate rather the site is using static or dynamic routes. 
                  </p>
                <div className='imageBlock'>
                  <Image className='images'
                     src="/images/errorBtn.png"
                     alt="npm run dev"
                     width={600}
                     height={200}
                  />
                  <Image className='images'
                     src="/images/route.png"
                     alt="npm run dev"
                     width={600}
                     height={200}
                  />

              </div>
                <Image className='images'
                     src="/images/consoleError.png"
                     alt="npm run dev"
                     width={1200}
                     height={200}
                  />
                
                <p>These features are only visible in the development envroment and will not show up when deployed to production.
                    These tools are helful to identify errors that occur and understand the structure of your site better while you are
                    developing it. 
                </p>

            </div>


        </div>

    )
}