import { createBrowserRouter } from 'react-router-dom'
import Table from '../components/table/Table'
import Layout from '../components/mainLayout/Layout'
import NotFound from '../components/404/NotFound'
import Portfolio from '../components/portfolio/Portfolio'
import TableCompany from '../components/tableCompany/TableCompany'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Table />
      },
      {
        path: 'empresas',
        element: <Table />
      },
      {
        path: 'empresas/:empresa',
        element: <TableCompany />
      },
      {
        path: 'home',
        element: <Table />,
      },
      {
        path: 'portafolio',
        element: <Portfolio />
      },
      {
        path: '*',
        element: <NotFound />
      }

    ]
  }

])

export default router