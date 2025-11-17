import './App.css'
import Routes from './Routers'
import Header from './components/Header'
import Categories from './components/Categories/Categories'
import Card from './components/Card'

function App() {

  return (
    <div>
      <Header />
      <Categories/>
      <Card/>

      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App
