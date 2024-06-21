import DetailtoCompany from './DetailToCompany'

export const amount = (amount, type = '') => {
  if (type === 'comission') {
    return '$' + Math.floor(amount * .025).toLocaleString('en-US').replace(/,/g, '.')
  }
  return '$' + Math.floor(amount).toLocaleString('en-US').replace(/,/g, '.')
}

const summingMonth = empresas => {
  return empresas.reduce((result, empresa) => {
    const date = new Date(empresa.day)

    if (isNaN(date)) {
      console.error(`Fecha inválida encontrada: ${empresa.day}`)
      return result
    }

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const formattedDate = `${month.toString().padStart(2, '0')}/${year}`
    const key = `${empresa.nameAgency}-${formattedDate}`
    if (!result[key]) {
      result[key] = {
        nameAgency: empresa.nameAgency,
        finalPrice: 0,
        date: formattedDate
      }
    }
    result[key].finalPrice += empresa.finalPrice
    return result
  }, {})
}

export const totalSalesPerMonth = empresas => {
  const sales = summingMonth(empresas)
  const salesArray = Object.values(sales)
  salesArray.sort((a, b) => {
    const nameComparison = a.nameAgency.localeCompare(b.nameAgency)
    if (nameComparison === 0) {
      return a.finalPrice - b.finalPrice
    }
    return nameComparison
  })

  return salesArray
}

export const processingData = [
  {
    name: 'nameAgency',
    label: 'Nombre Empresa',
    options: {
      customBodyRender: value => <p>{value}</p>
    }
  },
  {
    name: 'finalPrice',
    label: 'Precio total',
    options: {
      customBodyRender: value => <p className='price'>{amount(value)}</p>
    }
  },
  {
    name: 'finalPrice',
    label: 'Comisión',
    options: {
      customBodyRender: value => <p className='comission'>{amount(value, 'comission')}</p>
    }
  },
  {
    name: 'date',
    label: 'Fecha',
    options: {
      customBodyRender: value => <p>{value}</p>
    }
  },
  {
    name: 'nameAgency',
    label: 'Detalle',
    options: {
      customBodyRender: value => <DetailtoCompany nameAgency={value} />
    }
  }
]
