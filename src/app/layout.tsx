import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body>
              <header>
                  <nav className="navbar">
                      <div className="logo">BugTrackPro</div>
                      <ul className="nav-links">
                          <li><a href="/">Home</a></li>
                          <li><a href="/about">About</a></li>
                      </ul>
                  </nav>
              </header>
              <main className="container">{children}</main>
              <footer>
                  <p>&copy; 2024 Nicholas Krzysiak</p>
              </footer>
          </body>
      </html>
  );
}

