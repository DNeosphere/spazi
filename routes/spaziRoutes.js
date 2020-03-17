const express = require('express');
const withAuth = require('../util/auth.js');

const router = new express.Router();
const Spazi = require('../controllers/spazi');

router.route('/spazis').get(Spazi.findAllSpazis);
router.route('/spazis/:id').get(withAuth, Spazi.findSpaziByID);
router.route('/spazis/:id').put(withAuth, Spazi.updateSpazi);
router.route('/spazis').post(Spazi.createSpazi);
router.route('/spazis/:id').delete(withAuth, Spazi.deleteSpazi);
router.route('/spazis/find/:page').get(withAuth, Spazi.findSpazisByCriteria);

module.exports = router;