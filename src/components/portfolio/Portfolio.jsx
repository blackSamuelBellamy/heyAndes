import FullScreenIframe from '../iFrame/FullScreenIframe'
import './portafolio.css'


const LinkedIn = () => {
  return (
    <div className='portfolioContainer'>
      <FullScreenIframe src={import.meta.env.VITE_PORTFOLIO} />
    </div>
  )
}

export default LinkedIn