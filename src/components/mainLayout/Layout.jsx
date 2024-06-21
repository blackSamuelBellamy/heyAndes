import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmpresas } from '../../redux/features/empresasSlice'
import { Outlet } from 'react-router-dom'
import CircularIndeterminate from '../loading/Circular'
import SideBar from '../sideBar/SideBar'
import './layout.css'


const Layout = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.empresas.status)


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmpresas())
    }
  }, [status, dispatch])


  if (status === 'loading') return <CircularIndeterminate />

  return (
    <div
      className='container'
      style={{
        background: darkTheme ? '#172A3C' :
          'linear-gradient(to right top, #051937, #002667, #0b2e97, #462dc4, #8312eb)',
      }}
    >
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Layout