
/**
 * Logger middleware
 */
module.exports = function () {
  return function* (next) {

    var start = new Date;

    yield next;

    var ms = new Date - start;

    console.log(ms, 'ms');
  }
}
