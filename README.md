# react-flux - the implementation of Flux architecture
This project is a set of tools to aid in developing React applications with the Flux architecture.
![Dependencies Status](https://david-dm.org/dothanhlam/react-flux.svg)

##Build
The project is under development, you need to build the source before using.

```
npm update
grunt build
```

##Create Store
```
var todoStore = Flux.createStore({init: function() {
    console.log("init function")
}});
```

##Create Action
```
var action = new Action();
action.dispatch("create-todo", {data: 'update react'});
```

##Data flow (test)
```
var action = new Action();
var todoStore = Flux.createStore({init: function() {
    console.log("init function")
}});

todoStore.addListener("test", function(type, data) {console.log('data', data); this.emitChange()});
todoStore.addListener("test1", function() {console.log('this', 'test1'); this.emitChange()});
todoStore.addListener("test2", function() {console.log('this', 'test2'); this.emitChange()});
var emitHandler = function() {
    console.log('store change')
};
todoStore.addChangeListener(emitHandler);
action.dispatch("test", {data: 'test'});
action.dispatch("test1", {data: 'test'});
todoStore.removeChangeListener(emitHandler);
action.dispatch("test2", {data: 'test'});
```