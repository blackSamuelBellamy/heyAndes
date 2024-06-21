import { collection, doc, setDoc } from 'firebase/firestore'
import db from '../firebase/config'

const fetching = async () => {
  const res = await fetch('./empresas.json')
  const data = await res.json()
  return data
}

export const toWritting = async () => {
  try {
    const arr = await fetching()
    await Promise.all(arr.map(async x => {
      const docRef = doc(collection(db, 'empresas'))
      await setDoc(docRef, {
        nameAgency: x.nameAgency,
        name: x.name || '',
        personas: x.persons || 0,
        hour: x.hour,
        totalPrice: x.totalPrice || 0,
        paymentStatus: x.paymentStatus,
        day: x.day || x.dayTo,
        timeZone: x.timeZone,
        finalPrice: x.finalPrice,
        createdAt: x.createdAt,
        wayToPay: x.wayToPay || '',
        datePayment: x.datePayment || '',
      })
    }))
    console.log('Documentos escritos correctamente.')
  } catch (error) {
    console.error('Error escribiendo documentos:', error.message)
  }
}