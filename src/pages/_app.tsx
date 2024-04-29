import WAButton from '@/components/sticky-wa-button/wa-button'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="text-black dark:text-black"><WAButton/><Component {...pageProps} /></div>
}
