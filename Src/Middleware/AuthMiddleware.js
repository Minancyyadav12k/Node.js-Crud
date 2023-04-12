require("dotenv").config({ path: "./../../.env" })
const jwt_token = require("jsonwebtoken");
module.exports = {
    verifyToken(request, response, next) {
        try {
            const secretKey = process.env.JWT_TOKEN;
            const token = request.headers["authorization"].split(" ")[1];
            const verify = jwt_token.verify(token, secretKey)
        
            if (verify) {
                request.body.id = verify.id;
                request.body.name = verify.name;
                request.body.email = verify.email;
                next()
            }
            else{
              
                response.status(401).json({status:"failed",message:"unauthorized ! Access token  was expired"})
            }
        }
        catch (err) {
            console.log("hello")
            response.status(401).json({status:"failed",message:"unauthorized ! Access token was expireds"})
        }

    }
}
