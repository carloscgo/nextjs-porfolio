import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'react-toastify/dist/ReactToastify.css';
import './css/card.scss';
import './css/globals.scss';
import FaviconAT from '/public/favicon/apple-touch-icon.png';
import Favicon32 from '/public/favicon/favicon-32x32.png';
import Favicon16 from '/public/favicon/favicon-16x16.png';
import FaviconAC512 from '/public/favicon/android-chrome-512x512.png';
import FaviconAC192 from '/public/favicon/android-chrome-192x192.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Carlos Camacho',
  description: 'This is the portfolio of Carlos Camacho. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
  icons: [
    { rel: 'apple-touch-icon', sizes: "180x180", url: FaviconAT.src },
    { rel: 'icon', sizes: "32x32", url: Favicon32.src },
    { rel: 'icon', sizes: "16x16", url: Favicon16.src },
    { rel: 'icon', sizes: "512x512", url: FaviconAC512.src },
    { rel: 'icon', sizes: "192x192", url: FaviconAC192.src },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] test-description">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
