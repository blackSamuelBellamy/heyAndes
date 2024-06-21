import notFoundDark from '/public/404Dark.jpg'
import notFound from '/public/notFound.png'
import { useSelector } from 'react-redux'
import './notFound.css'

const NotFound = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    <div className='notFound-container'
    >
      <div className={darkTheme ? 'dark' : 'light'}
        style={{
          backgroundImage: darkTheme ? `url(${notFoundDark})` : `url(${notFound})`
        }}
      >

      </div>
    </div>
  )
}

export default NotFound