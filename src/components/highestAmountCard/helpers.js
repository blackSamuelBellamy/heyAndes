const replacing = amount => '$' + amount.toLocaleString('en-US').replace(/,/g, '.')

export const getMonthWithMostSales = salesData => {
  const salesPerMonth = salesData.reduce((total, sale) => {
    const month = sale.date
    if (!total[month]) {
      total[month] = 0
    }
    total[month] += sale.finalPrice
    return total
  }, {})
  let maxMonth = ''
  let maxSales = 0

  for (const month in salesPerMonth) {
    if (salesPerMonth[month] > maxSales) {
      maxSales = salesPerMonth[month];
      maxMonth = month
    }
  }
  return { item: maxMonth, sales: replacing(maxSales) }
}


export const getCompanyWithMostSales = salesData => {
  const salesPerCompany = salesData.reduce((total, sale) => {
    const company = sale.nameAgency;
    if (!total[company]) {
      total[company] = 0
    }
    total[company] += sale.finalPrice
    return total
  }, {})

  let maxCompany = ''
  let maxSales = 0

  for (const company in salesPerCompany) {
    if (salesPerCompany[company] > maxSales) {
      maxSales = salesPerCompany[company]
      maxCompany = company
    }
  }

  return { item: maxCompany, sales: replacing(maxSales) }
}
