const bcryptjs = require("bcryptjs")

module.exports = {
    gethashPassword(signupObj) {
        const salt = bcryptjs.genSaltSync(10);
        signupObj.password = bcryptjs.hashSync(signupObj.password,salt);
      
        return signupObj;
    },
    comparePassword(password,hash) {
        return bcryptjs.compareSync(password,hash)
    },
    expiretokentime() {

    }


}