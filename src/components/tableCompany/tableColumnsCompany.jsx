import { amount } from '../table/tableColumns'


export const processingCompanyData = [
  {
    name: 'name',
    label: 'Nombre Cliente',
    options: {
      customBodyRender: value => <p>{value}</p>
    }
  },
  {
    name: 'persons',
    label: 'Personas',
    options: {
      customBodyRender: value => <p className='price'>{value}</p>
    }
  },
  {
    name: 'day',
    label: 'Día',
    options: {
      customBodyRender: value => <p className='comission'>{value}</p>
    }
  },
  {
    name: 'hour',
    label: 'Hora',
    options: {
      customBodyRender: value => <p>{value}</p>
    }
  },
  {
    name: 'finalPrice',
    label: 'Valor Venta',
    options: {
      customBodyRender: value => <p>{amount(value)}</p>
    }
  }
]