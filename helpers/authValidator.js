require('dotenv').config();
const jwt = require('jsonwebtoken');
const whiteList = [
    '/users/create',
    '/users/login'
];

// Validates token
const authValidator = (req, res, next) => {

    if (whiteList.indexOf(req.path) !== -1) {
        next();
    } else {
        jwt.verify(req.headers['auth-token'], process.env.SECRET, (err, decode) => {

            if (err) {
                res.send("Voce nao esta logado");
                console.log(err);
            }

            req.user = {
                auth: {
                    id: decode.auth.id,
                    isAdmin: decode.auth.isAdmin
                }
            };
            next();
        });
    }
};

module.exports = authValidator;