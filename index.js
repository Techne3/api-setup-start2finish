const server = require('./api/server.js')

const port = process.env.PORT || 7654

server.listen(port, () => console.log(`\n running on ${port} \n`))