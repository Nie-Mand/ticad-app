import type { MetaFunction } from '@remix-run/node'
import styles from './styles/app.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Footer } from './core/Footer'
import { Toaster } from 'react-hot-toast'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sf bg-[#FAFAFA] overflow-x-hidden">
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <Toaster />
        <LiveReload />
      </body>
    </html>
  )
}
