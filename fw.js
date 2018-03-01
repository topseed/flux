console.log('loaded');
var store = fluxify.createStore({
	 id: 'store'
});
function act(action, arg) {
	 fluxify.doAction(action, arg);
}
function onModel(model, foo) {
	 store.on('change:' + model, function (updates) {
		  foo(store.getState()[model], store.getState()); // return model and full state
	 });
}
