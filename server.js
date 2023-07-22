require('dotenv').config();
const express = require('express');
const connectDb = require('./db');
const User = require('./models/User');


const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            error: 'All fields are required'
        })
    }

    try {
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({
                error: 'User already exists'
            })

        } else {
            user = new User({
                name,
                email,
                password,
            });

            await user.save();

            return res.status(201).json({
                message: 'User created successfully'
            })
        }

    } catch (err) {
        next(err);
    }

})

app.get('/', (_, res) => {
    res.json(data);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: 'Server Error Occurred'
    })
})

connectDb(connectionString)
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


