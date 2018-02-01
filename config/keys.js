
//keys.js

if( process.env.NODE_ENV === 'production') {
    // production
    module.exports = require('./prod');
} else {
    //developpement

    module.exports = require('./dev');

}