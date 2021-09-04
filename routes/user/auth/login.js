require('../../../controllers/index')

router.put('/', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        messageComponent.emptyEmailOrPassword(res)
    }
    const user = await userComponent.findEmail(email)
    if (!user) {
        messageComponent.userNotExist(res)
    }
    const doMatch = await userComponent.passwordCheck(password,user.password)
    if (!doMatch) {
        messageComponent.passwordMismatch(res)
    }
    if (!user.is2faEnable) {
        await userComponent.createMainToken(user,res)
    } else {
        //2fa step
        await userComponent.createOtpToken(user,res)
    }
})

module.exports = router;

