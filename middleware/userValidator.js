const { body } = require('express-validator');

const registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').isLength({ min: 8, max: 15 }).withMessage('Phone number must be valid'),
  body('usertype').optional().isIn(['client', 'admin', 'vendor', 'driver']).withMessage('Invalid user type'),
  body('address').isArray().withMessage('Address must be an array'),
  body('profile').optional().isURL().withMessage('Profile must be a valid URL')
];

module.exports = {
  registerValidation
};
