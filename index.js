const express = require('express')
const mysql2 = require('mysql2')

const app = express()

app.get('/test', function (req, res) {
    res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    try {
        const conn = mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'my-web',
            port: 8889
        })

        conn.query('select * from income_outcome', function (err, results, fields) {
            if(err) { // err = 0, [], null, undefined, false, ''
                throw new Error('sql error')
            }
            else {
                res.json(results)
            }
        })  
        conn.end()
    } catch (error) {
        next(error)
    }

})

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})



