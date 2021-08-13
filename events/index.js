const EventEmitter = require('events');
authEmitter = new EventEmitter();

authEmitter.on('email_verification', () => {
    console.log('email sent succesfully.');
});

authEmitter.on('login_history', () => {
    console.log('login history updated succesfully.');
});

module.exports = {authEmitter}