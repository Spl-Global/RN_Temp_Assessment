module.exports = (app) => {
    app.get('/api/v1/demo', async (req, res) => {
        res.send("Hello World!")
    })

    app.post('/api/v1/demo', async (req, res) => {
        // handle your own logic
    })
    app.delete('api/v1/demo', async (req, res) => {
        // handle your own logic
    })
}