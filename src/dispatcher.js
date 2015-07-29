/**
 * Created by LamDo on 7/29/15.
 */

var Dispatcher = function () {
    this.actions = {};
    this.tokens = {};
    this.currentDispatch = undefined;
    this.dispatchQueue = [];

    this.registerActionHandler = function (action, handler) {
        this.actions[action] = this.actions[action] || [];
        return this.actions[action].push(handler);
    };

    this.processQueue = function () {
        this.tokens = {};
        var nextDispatch = this._dispatchQueue.shift();
        if (nextDispatch) {
            this.dispatchAction(nextDispatch.action, nextDispatch.payload);
        }
    };

    this.activatePromise = function (id, handler, args) {
        var promise = this.tokens[id];
        if (!promise) {
            promise = handler.apply(null, args);
            this.tokens[id] = promise;
        }
        return promise;
    };
};

// implement public functions
Dispatcher.prototype = {

}