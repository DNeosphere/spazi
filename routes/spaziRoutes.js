const express = require('express');
const auth = require('../util/auth.js');

const router = new express.Router();
const Spazi = require('../controllers/spazi');

router.route('/spazis').get(auth.withAuth, auth.userAuth, Spazi.findAllSpazis);
router.route('/spazis').post(Spazi.createSpazi);
router.route('/spazis/me').get(auth.withAuth, auth.spaziAuth, Spazi.findCurrentSpazi);
router.route('/spazis/:id').get(auth.withAuth, auth.spaziAuth, Spazi.findSpaziByID);
router.route('/spazis/:id').put(auth.withAuth, auth.spaziAuth, Spazi.updateSpazi);
router.route('/spazis/:id').delete(auth.withAuth, auth.spaziAuth, Spazi.deleteSpazi);
router.route('/spazis/find/:page').get(auth.withAuth, auth.userAuth, Spazi.findSpazisByCriteria);

module.exports = router;