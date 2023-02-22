import './App.css'
import Projects from './components/Projects'

function App () {
  return (
    <div className='app'>
      <header style={{ textAlign: 'center' }}>
        <h1>Lucas's projects</h1>
        <p>All projects in one index by <a href='https://lucasfigueira.vercel.app/' target='_blank' rel='noreferrer'>Lucas Figueira</a>, see the code in <a href='https://www.github.com/lucasFigueira1' target='_blank' rel='noreferrer'>Github</a></p>
      </header>

      <main>
        <Projects />
      </main>
    </div>
  )
}

export default App
