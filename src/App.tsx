import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalStyle from './styles/global/styles'
import RestaurantDetail from './Pages/RestaurantDetail'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
