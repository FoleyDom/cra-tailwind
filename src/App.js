import './App.css'
import Hero from './components/Hero'
import Product from './components/Product'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ModalBtn from './components/ModalBtn'

function App() {
    return (
        <>
            <Modal />
            <Nav />
            <Hero />
            <Product />
            <Footer />
        </>
    )
}

export default App
