import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap"
import AppRoutes from "./routes/AppRoutes"
import Loader from "./components/Loader/Loader"
import { Suspense } from "react"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Container style={{ minHeight: '100vh', minWidth: '100%', padding: '0' }}>
          <Suspense fallback={<Loader />}>
            <AppRoutes />
          </Suspense>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
