export default function react() {
    return (
        <div className="container">
            <h1 className="home-header">React Dev Tools</h1>
            <div className="containerBlocks">
            <p className="containerBlocks">The React Developer Tools is a browser extension that helps developers debug and optimize 
                React applications. It allows you to inspect the React component tree, view and edit props and state, monitor hooks, 
                and analyze performance through profiling. With features like highlighting updates and inspecting context, it provides 
                a clear understanding of how your application is structured and performing. It's an essential tool for efficient React 
                development and troubleshooting, available for Chrome, Firefox, and other Chromium-based browsers. </p>

                <h1 className="containerBlocks">React Dev Tools can be installed from the chrome web store</h1>

            <img src="/images/chromestore.png" alt="chromestore" />
            <br />
            <p className="containerBlocks">After installing you will see two new tabs avaiable in your chrome debugger. One called 
                "Components" and one called "Profiler".
            </p>
    
            <img src="/images/devtool.png" alt="components" />

            




            </div>
        </div>
        
    )
}