import './globals.css';
import Link from 'next/link'; // Import Link from next/link

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar" aria-label="Main navigation">
            <div className="logo">BugTrackPro</div>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <br /><br />
        <main className="container" style={{ marginTop: '20px' }}>
          {children}
        </main>
        <footer>
          <p className="footerpad">&copy; 2024 Nicholas Krzysiak</p>
        </footer>
      </body>
    </html>
  );
}
