const { Router } = require('express');
const router = Router();

router.get('/events', (req, res) => {
  res.redirect('/');
});

router.get('/auth', (req, res) => {
  res.redirect('/');
});

router.get('/bookings', (req, res) => {
  res.redirect('/');
});

module.exports = router;