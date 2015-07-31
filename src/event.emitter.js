/**
 * Created by LamDo on 7/30/15.
 */

var EventEmitter = function() {
    this.listeners = {};
};

EventEmitter.prototype.on = function(name, fn) {
    this.listeners[name] = this.listeners[name] || [];
    this.listeners[name].push(fn);
    return this;
};

EventEmitter.prototype.remove = function(name, fn) {
    fn && this.listeners[name] && this.listeners[name].splice(this.listeners[name].indexOf(fn), 1);
};

EventEmitter.prototype.emit = function(name) {

    var _listeners = this.listeners[name] || [];
    var args =  Array.prototype.slice.call(arguments, 1);
    for(var i = 0, len = _listeners.length; i < len; ++i) {
        try {
            _listeners[i].apply(this, args);
        }
        catch(err) {
            this.emit('error', err);
        }
    }
};

EventEmitter.prototype.emits = function(name, fn) {
    var ee = this;
    return function() {
        var args = Array.prototype.slice.call(arguments),
            result = fn.apply(this, args),
            emit = result instanceof Array ? result : [result];

        ee.emit.apply(ee, [name].concat(emit));
        return result;
    };
};