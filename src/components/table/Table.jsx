import MUIDataTable from 'mui-datatables'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { defaultOptions, options } from './tableConfig'
import { processingData, totalSalesPerMonth } from './tableColumns'
import HighestAmountCard from '../highestAmountCard/HighestAmountCard'
import './table.css'


const Table = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  const empresas = useSelector(state => state.empresas.items)
  const getMuiTheme = () => createTheme(defaultOptions(darkTheme))
  const totalSales = totalSalesPerMonth(empresas)
  console.log(empresas.length)

  return (
    <div className='table'>
      <HighestAmountCard totalSales={totalSales} />
      <div className='tableWrapper'>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable className='glassFormTable'
            title={"Empresas"}
            data={totalSales}
            columns={processingData}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Table