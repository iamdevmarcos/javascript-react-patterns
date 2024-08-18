import connection from './functionApproach.js'

console.log(`server: ${connection.uri}`)
connection.connect()
connection.disconnect()