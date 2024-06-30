require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts') // 不用写扩展名
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express')
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts/',workoutRoutes)

//swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'smartMoru API',
            version: '0.1',
            description: 'Moru is a smart and beautiful girl',
            contact: {
                name: 'Moru',
                email: 'winni435496193@gmail.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
                description: 'Local server'
            }
        ]
    },
    apis: ['./routes/*.js'], // Path to the API docs
}
const spacs = swaggerjsdoc(options)
app.use('/api-docs',swaggerui.serve,swaggerui.setup(spacs))
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT,()=> {
            console.log('connect to db and listening on port 4000!')
        })
    })
    .catch(err=>console.log(err))

