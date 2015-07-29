/**
 * Created by LamDo on 7/30/15.
 */

function Promise() {
    var callbacks = [];
    var promise = {
            resolve: resolve,
            reject: reject,
            then: then,
            safe: {
                then: function safeThen(resolve, reject) {
                    promise.then(resolve, reject);
                }
            }
        };

    function complete(type, result) {
        promise.then = type === 'reject'
            ? function(resolve, reject) { reject(result); }
            : function(resolve)         { resolve(result); };

        promise.resolve = promise.reject = function() { throw new Error("Promise already completed"); };

        var i = 0, cb;
        while(cb = callbacks[i++]) { cb[type] && cb[type](result); }

        callbacks = null;
    }

    function resolve(result) {
        complete('resolve', result);
    }
    function reject(err) {
        complete('reject', err);
    }
    function then(resolve, reject) {
        callbacks.push({ resolve: resolve, reject: reject });
    }

    return promise;
};