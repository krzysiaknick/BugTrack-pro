import Image from 'next/image';

export default function react() {
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

        <h1 className="containerBlocks">React Dev Tools can be installed from the Chrome Web Store</h1>

        <Image src="/images/chromestore.png" alt="chromestore" width={1200} height={300} />
        <br />
        <p className="containerBlocks">
          After installing you will see two new tabs available in your Chrome debugger. One called
          &quot;Components&quot; and one called &quot;Profiler&quot;.
        </p>

        <Image src="/images/devtool.png" alt="components" width={1200} height={300} />

              <div>
                <br /><br />
            <h1 className="home-header">Watch the video below for more info</h1>
            <br />
            <div>
              <iframe className='containerBlocks'
                width="1000"
                height="500"
                src="https://www.youtube.com/watch?v=rb1GWqCJid4&t=198s&ab_channel=NetNinja"
                title="YouTube video player"
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

        
