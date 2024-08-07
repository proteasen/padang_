import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['cyrillic'],
  weight: '700',
  style: ['normal']
});

export const metadata = {
  title: 'Login Page',
  description: 'Login Page For Website',
};

export default function RootLayout({ children,}: 
  Readonly <{children: React.ReactNode;}>) 
  { return (
  <html lang="en">
  <body className={ubuntu.className}>{children}</body>
  </html>
  );
  
}
