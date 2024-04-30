import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';


const router= Router();

router.post('/register',[
body('email',"email format wrong")
    .trim()
    .isEmail()
    .normalizeEmail(),
body("password", "enter minimum characters")
    .trim()
    .isLength({ min: 6 }),
body('password', "the format password is incorrect")
    .custom((value, { req })=> {
      if(value !== req.body.repassword){
          throw new Error('the password do not match ')
      }
        return value;
  }),
],
  validationResultExpress,
  register
);
router.post('/login',[
body('email',"email format wrong")
    .trim()
    .isEmail()
    .normalizeEmail(),
body('password', "enter minimum characters")
    .trim()
    .isLength({ min: 6 })
],
  validationResultExpress,
  login
);

export default router;