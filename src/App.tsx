import { Carousel } from './components/Carousel'
import { CrearNoticiaForm } from './components/CrearNoticiaForm'
import { Header } from './components/Header'
import { NoticiaAccordion } from './components/NoticiasAccordion'
import SesionModal from './components/SesionModal'
import { useNoticias } from './Context/NoticiasContext'

function App() {
  const { formVisible, sesionModalVisible } = useNoticias()

  return (
    <>
      <Header/>
      <Carousel />
      <NoticiaAccordion />
      {formVisible &&
        <CrearNoticiaForm/>
      }
      {sesionModalVisible && 
        <SesionModal/>
      }
    </>
  )
}

export default App
