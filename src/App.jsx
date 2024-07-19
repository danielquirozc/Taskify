import { ListProvider } from './context/ListContext.jsx'
import '@fontsource-variable/inter'
import { Home } from './pages/Home.jsx'

function App () {
  return (
    <ListProvider>
      <Home />
    </ListProvider>
  )
}

export default App
