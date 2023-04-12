const express = require("express");
const { request, response } = require("../../app");
const controller = require("../Controller/EmployeeController")
const router = express.Router()
const upload = require("../Middleware/Upload");

//1 post routes.................................

router.post("/addemployee", async function (request, response) {
    const res = await controller.addemployee(request.body)
    response.json(res)

})
// 2 find get routes.............................................

router.get("/listEmployee", async function (request, response) {

    const res = await controller.listemployee()

    //  console.log(res,"minancy")
    response.send(res)

})


//   3 find the data by Id
router.get("/listEmployee1/:id", async function (request, response) {
    const data = await controller.employeeById(request.params.id)
    // console.log(data)
    response.send(data)

})

// 4 delete .........
router.delete("/delete/:id", async function (request, response) {
    const data = await controller.employeeDelete(request.params.id)
    // console.log(data)
    response.json(data)
})
// 5 update .............
// router.update("/update/:id",async function (request,response){
//     const data = await controller.employeeUpadte(request.params.id)
//     response.json(data)

// })

//  6 upload images
router.post("/uploads", upload.single("images"), async(request, response) => {
    const body = request.body;
    body.imagePath = request.imagePath;
    // const res = await product .uploadImage(body);
    response.json({message:"sucessfull"})

})

module.exports = router;
