/**
 * Created by LamDo on 8/1/15.
 */
var FluxClass = {};

FluxClass = function () {
};

FluxClass.prototype = {
    merge: function(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
    },

    createStore: function(obj) {
        var basedStore = new Store();
        return this.merge(obj, basedStore);
    }
};

var ApplicationDispatcher = ApplicationDispatcher || new Dispatcher();
var Flux = Flux || new FluxClass();
