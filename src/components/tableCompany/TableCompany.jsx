import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { options } from '../table/tableConfig'
import { defaultOptions } from './tableConfigCompany'
import { ThemeProvider, createTheme } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import { processingCompanyData } from './tableColumnsCompany'
import '../table/table.css'

const TableCompany = () => {

  const { empresa } = useParams()
  const format = empresa.replace(/_/g, ' ').toLowerCase()
  const empresas = useSelector(state => state.empresas.items)

  const data = empresas.filter(empresa => empresa.nameAgency?.toLowerCase() === format)
  const company = data.map(agency => ({
    name: agency.name || null,
    persons: agency.persons || 0,
    day: agency.day || null,
    hour: agency.hour || null,
    finalPrice: agency.finalPrice || 'John Doe'
  }))

  const darkTheme = useSelector(state => state.theme.darkTheme)
  const getMuiTheme = () => createTheme(defaultOptions(darkTheme))

  return (
    <div className='table'>
      <div className='tableWrapper' style={{ marginTop: '10%' }}>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable className='glassFormTable'
            title={format[0].toUpperCase() + format.slice(1)}
            data={company}
            columns={processingCompanyData}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default TableCompany