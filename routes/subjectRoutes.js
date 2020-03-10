const express = require('express');

const router = new express.Router();
const Subject = require('../controllers/subject');

router.route('/api/users/:ownerId/subjects').get(Subject.findAllSubjectByUser);
router.route('/api/users/:ownerId/subjects/:id').get(Subject.findSubjectByID);
router.route('/api/users/:ownerId/subjects/:id').put(Subject.updateSubject);
router.route('/api/users/:ownerId/subjects').post(Subject.createSubject);
router.route('/api/users/:ownerId/subjects/:id').delete(Subject.deleteSubject);

module.exports = router;
