const express = require('express');

const router = new express.Router();
const Spazi = require('../controllers/spazi');

router.route('/spazis').get(Spazi.findAllSpazis);
router.route('/spazis/:id').get(Spazi.findSpaziByID);
router.route('/spazis/:id').put(Spazi.updateSpazi);
router.route('/spazis').post(Spazi.createSpazi);
router.route('/spazis/:id').delete(Spazi.deleteSpazi);

module.exports = router;