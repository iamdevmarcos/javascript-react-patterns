const dbConnection = (uri) => Object.freeze({
  uri,
  connect: () => console.log(`DB ${uri} has been connected!`),
  disconnect: () => console.log(`DB ${uri} disconnected!`)
})

export default dbConnection('aws://...`')