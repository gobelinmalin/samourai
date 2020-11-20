const express = require('express')
const router = express.Router()
const connection = require('../config')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM problem', (err, results) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.json(results)
        }
    })
})

router.get('/:id/resolves', (req, res) => {
    const id = req.params.id
    connection.query(
        'SELECT * FROM resolve WHERE id_problem = ?',
        [id],
        (err, results) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.json(results)
            }
        }
    )
})

module.exports = router
