const express = require('express');
const UserCtrl = require('./controllers/UserCtrl');
const AddressCtrl = require('./controllers/AddressCtrl');
const TechCtrl = require('./controllers/TechCtrl');
const ReportCtrl = require('./controllers/ReportCtrl');


const router = express.Router();

router.post('/user', UserCtrl.store);
router.get('/user', UserCtrl.index);

router.post('/user/:user_id/address', AddressCtrl.store);
router.get('/user/:user_id/address', AddressCtrl.index);

router.post('/user/:user_id/tech', TechCtrl.store);
router.get('/user/:user_id/tech', TechCtrl.index);
router.delete('/user/:user_id/tech', TechCtrl.delete);

router.get('/report', ReportCtrl.show);

module.exports = router;