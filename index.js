var bind = require('bind')
  , Emitter = require('emitter')
  , emitter = new Emitter();


window.onscroll = function(){
  //emit event for every instance of Parallax
  var y = window.scrollY;
  emitter.emit(y);
  emitter.emit('scroll', y);
};


/**
 * Trigger action on specific scroll events
 *
 * @param {Number} index scroll's index
 * @param {Function} callback function
 * @param {Object} scope optional callback' scope
 */

module.exports.at = function(index, callback, scope) {
  emitter.on(index, bind(scope, callback));
};


/**
 * Trigger action on every scroll events
 *
 * @param {Function} callback function
 * @param {Object} scope optional callback' scope
 */

module.exports =
module.exports.on = function(callback, scope) {
  emitter.on('scroll', bind(scope, callback));
};
