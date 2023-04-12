const upload = require("../Middleware/Upload")
const employeeModel = require("../Model/EmployeeModel")
module.exports = {

    async addemployee(add) {
        const response = {}
        const data = new employeeModel({
            EmpName: add.EmpName,
            EmpEmail: add.EmpEmail,
            EmpCity: add.EmpCity,
            EmpId: add.EmpId
        })
        try {
            // save db
            const res = await data.save()
            // response.json(adddata)
            if (res) {
                response.status = "sucess"
                response.message = " data is  sucessfully"
            }
            else {
                response.status = "failed"

            }
        } catch (err) {

            response.status = "failed"
            response.message = "Alraedy Exits"
        }
        return response;
    },

    //2................. get all data controller...............................

    // async listemployee(){

    //     const list= await employeeModel.find()
    //     console.log(list)
    //     return list;

    // },

    //3............ find by id 
    async employeeById(employee) {
        const response = {}
        try {

            const data = await employeeModel.find({ _id: ObjectId(employee) })


            if (data) {
                response.status = "sucess"
                response.message = " data is get"

                response.data = data
            }
            else {
                response.status = "failed"
            }

        }
        catch (err) {
            response.status
        }
        return response;
    },

    // 4........................delete 
    async employeeDelete(delDatad) {
        const response = {}
        try {
            const data = await employeeModel.deleteOne({delDatad})
            if (data) {
                response.status = "sucess"
                response.message = " data is delete "
                // response.id=id
            }
            else {
                response.status = "failed"
            }
        }
        catch {
            response.status= "failed"
        }
        return response;

    },

    // async employeeUpdate(update){
    //     const response={}
    //     try{
    //         const data= await employeeModel.updateOne({ _id:ObjectId()})
    //         if (data){
    //             response.status="sucess"
    //             response.message="data is update"
    //         } else{
    //             response.status="failed"
    //         }
    //     } catch{
    //         response.status="faild"

    //     }
    //     return response;
    // }
   

}
