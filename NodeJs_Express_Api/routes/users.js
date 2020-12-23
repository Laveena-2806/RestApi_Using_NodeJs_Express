import express from 'express';
import { v4 as uuidv4 } from 'uuid';


// initialize our router
const router = express.Router();

let users = []

// all routes here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});

// router for post
router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
});

// router for get user with id
router.get('/:id', (req, res) => {

    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

// router for delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`user with the id ${id} deleted from the database`);
});


// router for patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the ${id} has been updated`);


})

export default router;