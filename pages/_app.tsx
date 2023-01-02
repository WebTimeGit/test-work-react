import Layout            from '../src/components/Layout/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/global.scss'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Layout>
				<Component { ...pageProps } />
			</Layout>
		</ThemeProvider>
	)
}
