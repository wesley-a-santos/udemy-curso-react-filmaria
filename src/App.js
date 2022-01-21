import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import WebRoutes from './routes'

function App() {
    return (
        <>
            <WebRoutes />
            <ToastContainer />
        </>
    )
}

export default App
