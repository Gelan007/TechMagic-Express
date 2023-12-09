const usersDocuments = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "mysecretpassword1",
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
    },
    {
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "alice@example.com",
        "password": "mysecretpassword2",
        "age": 20,
        "address": {
            "street": "12353 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12344",
            "country": "USA"
        },
        "createdAt": "2023-05-06T08:12:34.567Z",
        "tags": [
            "Sales",
            "Marketing"
        ]
    }
]

function getUsersList (req, res) {
    res.json(usersDocuments)
}

function getUserByEmail (req, res) {
    const {email} = req.params
    const user = usersDocuments.find(u => u.email === email)

    if(!user) {
        return res.status(404).json({message: `User with email "${email}" not found`})
    }
    res.json(user)

}

function createUser(req, res) {
    const {firstName, lastName, email, password, createdAt, ...otherData } = req.body
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

function updateUser(req, res) {
    const userEmail = req.params.userEmail
    const updatedData = req.body
    const user = usersDocuments.find(u => u.email === userEmail)
    const duplicate = usersDocuments.find(u => u.email === updatedData.email)
    if(!user) {
        return res.status(404).json({message: 'User not found'})
    }
    if(duplicate) {
        return res.status(400).json({message: 'This email is already taken'})
    }
    Object.assign(user, updatedData)
    return res.json(user)
}

function deleteUser (req, res) {
    res.send('Users deleted')
}

module.exports = {
    getUsersList,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}
