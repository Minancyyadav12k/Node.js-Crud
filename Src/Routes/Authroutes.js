const express = require("express")
const router = express.Router()
const {verifyToken} = require("../Middleware/AuthMiddleware") //destructuring
const authController= require("../Controller/AuthController")

router.post("/signup", async function(request,response){
    const res = await authController.signup(request.body)
    response.json(res)
    
}) 

// router.post("/Changepassword", verifyToken , async function(request,response){
//     response.json({name:"aa",minancy: request.params.data})
// })



router.post("/login", async function(request,response){
    const res = await authController.login(request.body)
    response.json(res)
    
})

router.post("/changepassword", verifyToken, async function(request,response){
    const res = await authController.changepassword(request.body)
    response.json(res)
    
})



module.exports = router;