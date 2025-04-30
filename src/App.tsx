import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'sonner'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='gym-tracker-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | gym.tracker" />
        <Toaster closeButton duration={3000} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}


