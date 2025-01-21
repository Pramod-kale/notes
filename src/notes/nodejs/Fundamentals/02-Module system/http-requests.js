const https = require('http')

const req = https.request('http://www.google.com', response => {

    response.on('data', data => {
        console.log('response data ' + data)
    })

    response.on('end', () => {
        console.log('no data here')
    })

})
req.end(

)