import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Filme from './pages/Filme'
import Home from './pages/Home'
import Styled from './pages/Styled'

function WebRoutes() {
    return (
        <BrowserRouter basename="/react">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/componentes-estilizados" element={<Styled />} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebRoutes
