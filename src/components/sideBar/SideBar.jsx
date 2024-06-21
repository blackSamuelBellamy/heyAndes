import { useEffect, useRef } from 'react'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCollapse } from '../../redux/features/collapsedSlice'
import Logo from '../logo/Logo'
import MenuSeccions from '../menuSeccions/MenuSeccions'
import ThemeButton from '../themeButton/ThemeButton'
import './sideBar.css'

const { Sider } = Layout

const SideBar = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  const isCollapsed = useSelector(state => state.collapsed.isCollapsed)
  const dispatch = useDispatch()
  const siderRef = useRef(null)

  const handleSetCollapse = collapsed => dispatch(setCollapse(collapsed))

  const handleClickOutside = (e) => {
    if (siderRef.current && !siderRef.current.contains(e.target)) {
      dispatch(setCollapse(true))
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    };
    /* eslint-disable-next-line */
  }, [])

  return (
    <Layout>
      <Sider
        className="sideBar"
        theme={darkTheme ? 'dark' : 'light'}
        collapsed={isCollapsed}
        collapsible
        onCollapse={handleSetCollapse}
        ref={siderRef}
      >
        <Logo />
        <MenuSeccions />
        <ThemeButton />
      </Sider>
    </Layout>
  )
}

export default SideBar
