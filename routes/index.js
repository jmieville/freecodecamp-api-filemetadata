var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>Submit a file to view its filesize.</h1>')
  res.write('<form action="get-file-size" method="post" enctype="multipart/form-data">')
  res.write('<input type="file" name="get-file-size"><br>')
  res.write('<input type="submit">')
  res.write('</form>')
  return res.end()
})

module.exports = router
