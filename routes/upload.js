var express = require('express')
var router = express.Router()
var formidable = require('formidable')
var _ = require('lodash')
const prettyBytes = require('pretty-bytes')

/* GET users listing. */
router.post('/', async function (req, res, next) {
  var form = new formidable.IncomingForm()
  var file = {}
  await form.parse(req, function (err, fields, files) {
    if (err) {
      res.send(err)
    }
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('Received your upload:\n\n')
    file.files = files
    var newFile = (JSON.stringify(file.files)).split('\n')
    var json = newFile[0]
    var newJson = JSON.parse(json)
    var size = _.find(newJson, 'size')
    res.end(`Your uploaded file size is: ${prettyBytes(size.size)}`)
  })
})

module.exports = router
