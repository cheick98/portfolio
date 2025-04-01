import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// my importations
import { routes } from '../../utils/routes'
import Layout from '../../components/commons/container/Layout'

const RouterIndex = () => {

    return (
        <Router>
            <Routes>
                <Route path='/*'
                    element={
                        <Layout>
                            <Routes>
                                {routes.map(({ element: Element, path }, i) => <Route key={i} path={path} element={<Element />} />)}
                                <Route path='/*' element={<Navigate to='/' />} />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    )
}

export default RouterIndex