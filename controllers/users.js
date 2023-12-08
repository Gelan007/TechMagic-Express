const usersDocuments = [{
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "mysecretpassword",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345",
        "country": "USA"
    },
    "createdAt": "2023-05-06T08:12:34.567Z",
    "tags": [
        "Sales",
        "Marketing"
    ]
}]

function getUsersList (req, res) {
    res.json(usersDocuments)
}

function getUserById (req, res) {
    console.log(req.query)
    res.send(`User with id ${req.params.userId}, query search ${req.query.search}`)
}

function createUser(req, res) {
    const {firstName, lastName, email, password, createdAt, ...otherData } = req.body
    /*if(!firstName) {
        return res.status(400).json({message: 'First name is required'})
    }
    if(!lastName) {
        return res.status(400).json({message: 'Last name is required'})
    }*/

    const duplicate = usersDocuments.find(u => u.email === email)
    if(duplicate) {
        return res.status(400).json({message: 'This email is already taken'})
    }

    const newUser = {
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toISOString(),
        ...otherData
    }

    usersDocuments.push(newUser)

    res.status(201).json(newUser)

}

function updateUser (req, res) {
    console.log(req.body)
    res.send('User updated')
}

function deleteUser (req, res) {
    res.send('Users deleted')
}

module.exports = {
    getUsersList,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
