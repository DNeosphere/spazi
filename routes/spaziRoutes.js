const express = require('express');

const router = new express.Router();
const Spazi = require('../controllers/spazi');

router.route('/api/spazis').get(Spazi.findAllSpazis);
router.route('/api/spazis/:id').get(Spazi.findSpaziByID);
router.route('/api/spazis/:id').put(Spazi.updateSpazi);
router.route('/api/spazis').post(Spazi.createSpazi);
router.route('/api/spazis/:id').delete(Spazi.deleteSpazi);

module.exports = router;