import Image from 'next/image';

export default function React() {
  return (
    <div className="container">
      <h1 className="home-header">React Dev Tools</h1>
      <div className="containerBlocks">
        <p className="containerBlocks">
          The React Developer Tools is a browser extension that helps developers debug and optimize
          React applications. It allows you to inspect the React component tree, view and edit props
          and state, monitor hooks, and analyze performance through profiling. With features like
          highlighting updates and inspecting context, it provides a clear understanding of how your
          application is structured and performing. It&apos;s an essential tool for efficient React
          development and troubleshooting, available for Chrome, Firefox, and other Chromium-based
          browsers.
        </p>

        <p className='instructions'>React Dev Tools can be installed from the Chrome Web Store</p>

        <Image
          src="/images/chromestore.png"
          alt="Screenshot of Chrome Web Store showing React Dev Tools"
          width={1200}
          height={300}
        />
        <br />
        <p className="containerBlocks">
          After installing you will see two new tabs available in your Chrome debugger. One called
          &quot;Components&quot; and one called &quot;Profiler&quot;.
        </p>

        <Image
          src="/images/devtool.png"
          alt="Screenshot of React Dev Tools Components tab"
          width={1200}
          height={300}
        />
         
         <p>
            The React Developer Tools extension provides two essential features: the <strong>Components</strong> tab and the 
            <strong>Profiler</strong> tab. The Components tab displays the entire React component tree, allowing developers to 
            inspect props, state, and context for each component. It highlights the relationships between components and enables
             real-time edits to props and state for debugging. The Profiler tab, on the other hand, analyzes the performance of 
             the application by tracking rendering times and identifying inefficiencies. It provides a detailed, color-coded 
             visualization of component render times, helping developers optimize their app's performance. Together, these tools
              are invaluable for debugging, understanding, and enhancing React applications.
            </p>

        <div>
          <br />
          <br />
          <h1 className="home-header">Watch the video below for more info</h1>
          <br />
          <div>
            <iframe
              className="containerBlocks"
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/rb1GWqCJid4"
              title="Introduction to React Dev Tools by Net Ninja"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
