const jwt = require("jsonwebtoken");
const isAuth = (request, response, next) => {
    const token = request.cookies.authcookie;
    jwt.verify(token,"SECRET", (error, user) => {
        if (error) {
              throw new UnauthorizedError("You must be login");
       } else {
             const { name, user_id, username, exp } = user;
             if (Date.now() / 1000 >= exp) {
                response.clearCookie("authcookie");
                
                throw new UnauthorizedError("You must be login");
             }


            request.user = { name, user_id, username };
            next();

        }


    });

}

module.exports = isAuth;