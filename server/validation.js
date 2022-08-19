const Joi = require("joi");

function registerValidation(body){
    const schema = Joi.object({
        first_name: Joi.string().max(20).required(),
        last_name: Joi.string().max(20).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(body);
}

function loginValidation(body){
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(body);
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;