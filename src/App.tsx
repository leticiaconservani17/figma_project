import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalStyle from './styles/global/styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
