import './tridddi.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from 'next-themes';


const poppins = localFont({
	src: [
		{ path: './fonts/Poppins-Thin.ttf', style: 'normal', weight: '200' },
		{ path: './fonts/Poppins-Light.ttf', style: 'normal', weight: '300' },
		{ path: './fonts/Poppins-Regular.ttf', style: 'normal', weight: '400' },
		{ path: './fonts/Poppins-Medium.ttf', style: 'normal', weight: '500' },
		{ path: './fonts/Poppins-SemiBold.ttf', style: 'normal', weight: '600' },
		{ path: './fonts/Poppins-Bold.ttf', style: 'normal', weight: '700' },
		{ path: './fonts/Poppins-ExtraBold.ttf', style: 'normal', weight: '800' },
		{ path: './fonts/Poppins-Black.ttf', style: 'normal', weight: '900' },
	],
});

export const metadata: Metadata = {
	title: 'tridddi', 
  description: 'i am misael martínez, a full stack developer & graphic designer based on puerto rico.'};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html 
      lang='en'
      className='dark'
      suppressHydrationWarning
    >
			<body className={`${poppins.className} overflow-x-hidden antialiased`}>
        <ThemeProvider 
          enableSystem={true}
          defaultTheme='dark'
          attribute='class'
        >
          <ReactLenis
            root
            options={{ 
              duration: 2
            }}
          >

          </ReactLenis>
          {children}
        </ThemeProvider>
			</body>
		</html>
	);
}
