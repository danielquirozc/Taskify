import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { List } from '../components/List'
import { Modal } from '../components/Modal'
import { useModal } from '../hooks/useModal'

export const Home = () => {
  const { isOpen, showModal } = useModal()
  return (
    <>
      <Header openModal={showModal} />
      <List />
      <Footer />
      <Modal isOpen={isOpen} />
    </>
  )
}
