const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    if (!req.headers.authorization) return messageComponent.noAccess(res)
    const otpToken = userComponent.findOtpToken(req)
    if (!otpToken) return messageComponent.noAccess(res)
    try {
        const _id = await userComponent.otpTokenIsMatch(otpToken, req.user)
        const user = await userComponent.findUser(_id)
        if (!(user.otpPassword === req.body.otpPassword)) return messageComponent.otpPasswordMismatch(res)
        await userComponent.createMainToken(user, res)
    } catch (err) {
        messageComponent.tokenError(res, err)
    }
})

module.exports = router;

