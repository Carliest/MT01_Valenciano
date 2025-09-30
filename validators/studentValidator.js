const Joi = require('joi');

const baseSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  favoriteFood: Joi.string().required()
});

const validateCreateStudent = (req, res, next) => {
  const { error } = baseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateUpdateStudent = (req, res, next) => {
  const updateSchema = baseSchema.fork(['name', 'age', 'email', 'favoriteFood'], field => field.optional());
  const { error } = updateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateCreateStudent,
  validateUpdateStudent
};
