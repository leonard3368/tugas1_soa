const express = require('express')
app = express()
const port = 3000;

const w2Database = require('./databases/connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const initApp = async () => { 
    console.log("Testing database connection");
    try {
        await w2Database.authenticate();
        console.log("Successfully connected!");
        app.listen(port, () =>
            console.log(`App listening on port ${port}!`)
        );
    } catch (error) {
        console.error("Failure database connection : ", error.original);
    }
 }

 initApp()