/**
 * Created by LamDo on 8/1/15.
 */
var Action = function() {
    this.dispatch = function(actionType, data) {
        ApplicationDispatcher.dispatch(actionType, this, data);
    }
};