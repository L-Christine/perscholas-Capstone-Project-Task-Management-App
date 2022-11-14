
export default function sortOrder(array, order, key) {
    array.sort((a,b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return ( 
    array
  )
}
