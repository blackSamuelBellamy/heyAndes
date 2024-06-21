import { SunOutlined, MoonOutlined } from '@ant-design/Icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/features/themeSlice'
import { Button } from 'antd'
import './themeButton.css'

const ThemeButton = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  const collapsed = useSelector(state => state.collapsed.isCollapsed)
  const dispatch = useDispatch()

  const toggle = () => dispatch(toggleTheme(darkTheme))

  return (
    <div
      style={{ left: collapsed ? '30%' : '10%' }}
      className='themeButton'
    >
      <Button
        onClick={toggle}
        className='themeButton-button'

      >
        {
          darkTheme ?
            <SunOutlined /> :
            <MoonOutlined />
        }
      </Button>
    </div>
  )
}

export default ThemeButton