
import express from "express";
import mongoose from "mongoose";
import User from './models/User.js'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'oi Express!'})
} )
app.get("/users", async(request, response) => {
    const users = await User.find()
    return response.json(users);
});


app.post("users/", async (request, response) => {
    const user = request.body

    const newUser = await User.create(user)
    return response.json();
})

mongoose.connect("mongodb://cesar:cejuli@ac-xi9iltu-shard-00-00.t2jm0ul.mongodb.net:27017,ac-xi9iltu-shard-00-01.t2jm0ul.mongodb.net:27017,ac-xi9iltu-shard-00-02.t2jm0ul.mongodb.net:27017/?ssl=true&replicaSet=atlas-12p6iu-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(() => console.log("Banco de dados conectado!!!"))
    .catch((e) => console.log(e))

app.listen(3000)