import './global.css'

import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  )
}
