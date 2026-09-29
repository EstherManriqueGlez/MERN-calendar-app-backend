/* 
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
  '/new',
  [
    // middlewares
    check('name', 'The name is mandatory').not().isEmpty(),
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password must be 6 characters long').isLength({
      min: 6,
    }),
    validateFields
  ],
  createUser,
);

router.post(
  '/',
  [
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password must be 6 characters long').isLength({
      min: 6,
    }),
    validateFields
  ],
  loginUser,
);

router.get('/renew', renewToken);

module.exports = router;
