const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    const { firstName, lastName, userName, email, password,is2faEnable } = req.body;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!firstName || !lastName || !userName || !password ) {
        messageComponent.emptyField(res)
    }
    if (!email || !regex.test(email)){
        messageComponent.invalidEmail(res)
    }
    const emailIsNotUnique =await userComponent.uniqueEmail(email)
    if (emailIsNotUnique) {
        messageComponent.notUniqueEmail(res)
    }
    const user =await userComponent.createUser(firstName, lastName, userName, email, password,is2faEnable)
    messageComponent.showUser(res,user)
})

module.exports = router