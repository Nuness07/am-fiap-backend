const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');

const MetaController = require('./app/controllers/MetaController');

const FeedbackController = require('./app/controllers/FeedbackController');


const router = Router();

// Authentication
router.post('/login', AuthController.index);
router.get('/user', AuthController.user);
router.post('/logout', AuthController.logout);

// Usuários
router.get('/usuarios', UserController.index);
router.get('/usuarios/:id', UserController.show);
router.post('/usuarios', UserController.store);
router.put('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

// Metas
router.get('/metas', MetaController.index);
router.get('/metas/:id', MetaController.show);
router.post('/metas', MetaController.store);
router.put('/metas/:id', MetaController.update);
router.delete('/metas/:id', MetaController.delete);

// Metas
router.get('/feedbacks', FeedbackController.index);
router.get('/feedbacks/:id', FeedbackController.show);
router.post('/feedbacks', FeedbackController.store);
router.put('/feedbacks/:id', FeedbackController.update);
router.delete('/feedbacks/:id', FeedbackController.delete);

module.exports = router;
