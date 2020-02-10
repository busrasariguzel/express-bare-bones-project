
// getAllUsers, getUserById, createUser, updateUser and deleteUser functions that will send the name of the function when used. i.e: getUserById will send ‘getUserById’.
const users = require('../models/Users')
const uuid = require('uuid/v4')

module.exports = {
getAllUsers : (req,res) => {

res.json(users);

},
getUserById: (req,res) => {
    return res.json('getUserById')
},

createUser : (req,res) => {
if(!req.body.name || !req.body.email) {
    return res
    .status(400)
    .json('createUser');
    }
    const newUser = {};
    newUser.id = uuid();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    users.push(newUser);
    return res.json('createUser')
},

updateUser : (req,res) => {
    const userExists = users.filter(user => user.id === req.params.id);
    if (userExists.length !== 0) {
        const { name, email } = req.body;
        const user = userExists[0];
        if (user.id === req.params.id) {
            user.name = name ? name : user.name;
            user.email = email ? email : user.email;
            return res.status(200).json('updateUser');
        }
    } else {
        return res
            .status(400)
            .json('updateUser');
    }

},

deleteUser : (req,res) => {

    const userExists = users.filter(user => user.id === req.params.id);
    const user = userExists[0]
    if (userExists.length!==0){
        const deletedUser = users.indexOf(user)
        users.splice(deletedUser,1);
        return res.status(200).json('deleteUser');
        } else {
            return res.status(400).json('deleteUser');
        }

},
}


// module.exports = {
//     getAllUsers,
    
//     // getUserById,
//     // createUser,
//     // updateUser,
//     // deleteUser,
// }