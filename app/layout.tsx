import exp from 'constants';
import './globals.css';

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return <html lang='en'>
    <body>
      <nav>Hello </nav>
      {children}
    </body>
  </html>