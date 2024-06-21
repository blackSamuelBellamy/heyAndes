import { useNavigate } from 'react-router-dom'

//eslint-disable-next-line
const DetailToCompany = ({ nameAgency }) => {

  const Navigate = useNavigate()
  const format = name => name.replace(/ /g, '_')
  const handleClick = () => {
    const name = format(nameAgency)
    Navigate(`/empresas/${name}`, { state: { nameAgency } })
  }

  return (
    <button
      className='detailButton'
      onClick={handleClick}
    >
      Detalle
    </button>
  )
}

export default DetailToCompany