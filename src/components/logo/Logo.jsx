import { FireFilled } from '@ant-design/Icons'
import { useSelector } from 'react-redux'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    <div className="logo">
      <div className="logoIcon" style={{ color: darkTheme ? '#FFF' : '#000' }}  >
        <Link to='/'> <FireFilled /></Link>
      </div>
    </div>
  )
}

export default Logo