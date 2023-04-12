const authUser = require("../Model/AuthModel")
const jwt_token = require("jsonwebtoken")
require("dotenv").config({ path: "../../.env" });
const { gethashPassword, comparePassword } = require("../Constant/Constant")

module.exports = {
    async signup(signupData) {
        const response = {}
        try {
            const signupObj = gethashPassword(signupData)
            const res = await new authUser(signupObj).save();
          
            if (res) {
                response.status = "success"
                response.message = "Sign up Successfully"
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


    async login(logindata) {
        console.log(logindata)
        const response = {}
        try {
            const a = await authUser.findOne({ email: logindata.email }, { _id: 1, email: 1, name: 1, password: 1 })
          
            const data = comparePassword(logindata.password, a.password)
            console.log(data)
            if (data) {

                const tokendata = {
                    id: a._id,
                    name: a.name,
                    email: a.email

                }
                const secretKey = process.env.JWT_TOKEN;
                const token = jwt_token.sign(tokendata, secretKey, { expiresIn: "30d" })
                response.status = "success";
                response.message = "login successfull"
                response.token = token;



            }
            else {
                response.status = "invalid user";
                response.message = "incorret email password"
            }

        }


        catch (err) {

            response.status = "invalid user";
            response.message = "exception"


        }
        return response;


    },
    async changepassword(update) {
        const response = {}
        try {
            const dbHash = await authUser.findOne({ _id: update.id }, { password: 1 })
            console.log(dbHash, update.old_pass)
            if (comparePassword(update.old_pass, dbHash.password)) {
                const query = {
                    _id: update.id,
                    email: update.email
                }
                const new_pas = gethashPassword(update);
                console.log(new_pas)
                const res = await authUser.updateOne(query, { $set: { password: new_pas.password } })
                console.log(new_pas, res)
                if (res.modifiedCount == 1) {
                    response.status = "success"
                    response.message = "password change successfully"
                }

            }
            else {
                response.status = "failed"
                response.message = "incorrect  old password"
            }


        }
        catch (err) {
            response.status = "failed"
            response.message = "something wrong"

        }


        return response;

    }

}

