import Home from '../pages/home-page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes