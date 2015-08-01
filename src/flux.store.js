/**
 * Created by LamDo on 8/1/15.
 */

var Store = function() {
    this.CHANGE_EVENT = 'change';
    this.events = [];
};

Store.prototype = {
    emitChange:function() {
        ApplicationDispatcher.dispatch(this.CHANGE_EVENT, this, {});
    },

    addChangeListener: function(callback) {
        ApplicationDispatcher.addEventListener(this.CHANGE_EVENT, callback, this);
    },

    removeChangeListener:function(callback) {
        ApplicationDispatcher.removeEventListener(this.CHANGE_EVENT, callback, this);
    },

    addListener:function(event, handler) {
        if (this.events.indexOf(event) < 0) {
            ApplicationDispatcher.addEventListener(event, handler, this);
            this.events.push(event);
        }
        else {
            throw Error("Error: event has been registered")
        }
    }
};