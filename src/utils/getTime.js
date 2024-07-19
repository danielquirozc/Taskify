export const getTime = () => {
  const date = new Date()
  return date.toLocaleTimeString('es-mx', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
