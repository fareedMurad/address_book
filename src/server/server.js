const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/addresses', (req, res) => {
  res.jsonp(req.query)
});

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})


router.render = (req, res) => {
  res.status(500).jsonp({
    error: "error message here"
  })
}
// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})