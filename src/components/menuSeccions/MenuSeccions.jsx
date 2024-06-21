// src/components/MenuSeccions.js
import { Menu } from 'antd'

import {
  HomeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  IdcardOutlined
} from '@ant-design/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCollapse } from '../../redux/features/collapsedSlice'
import './menuSeccions.css'
import { Link } from 'react-router-dom'

const { VITE_GITHUB, VITE_LINKEDIN } = import.meta.env

const MenuSeccions = () => {

  const darkTheme = useSelector(state => state.theme.darkTheme)
  const dispatch = useDispatch()

  const handleMenuSelect = () => {
    dispatch(setCollapse(true))
  }

  return (
    <Menu
      theme={darkTheme ? 'dark' : 'light'}
      className='menuSeccions'
      onSelect={handleMenuSelect}
    >
      <Menu.Item key='Home' icon={<HomeOutlined />}>
        <Link to='/home'>Home</Link>
      </Menu.Item>
      <Menu.Item key='Portafolio' icon={<IdcardOutlined />} >
        <Link to='/portafolio'>Portafolio</Link>
      </Menu.Item>
      <Menu.Item key='Github' icon={<GithubOutlined />} >
        <a href={VITE_GITHUB} target='_blank' rel='noopener noreferrer'> Github</a>
      </Menu.Item>
      <Menu.Item key='LinkedIn' icon={<LinkedinOutlined />} >
        <a href={VITE_LINKEDIN} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default MenuSeccions
