const ResponseData = require('../responseData');

class Mathematic extends ResponseData {
    square(a, b, c) {
        return super.answer({ a, b, c });
    }
}

module.exports = Mathematic;