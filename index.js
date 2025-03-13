const express = require('express');
const userRouter = require("./routes/usersRoutes")

const productRouter = require("./routes/productsRoutes")

const app = express();
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(userRouter)
app.use(productRouter)



app.use((req, res, next) => {
    res.status(404).send("404 Not Found")
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})