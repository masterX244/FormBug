import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		submit: function(){
			//NOP
		},
		revert: function() {

			var model = this.get('model');
			if(model){
				console.log("RESET")
				model.rollbackAttributes();
			}
		},
	}
});
