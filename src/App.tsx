import { Carousel } from './components/Carousel'
import { CrearNoticiaForm } from './components/CrearNoticiaForm'
import { Header } from './components/Header'
import { NoticiaAccordion } from './components/NoticiasAccordion'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <div className='flex p-3 gap-x-5'>
        <NoticiaAccordion />
        <CrearNoticiaForm />
      </div>
    </>
  )
}

export default App
