Ext.define('IMS.view.form.UserController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.usercontroller',

	saveUser: function (button) {
		var form = button.up('userform'),
				record = form.getRecord();

		form.updateRecord();
		record.save({
			scope: form,
			callback: function (records, operation, success) {
				if (success) {
					this.setTitle(record.get('lastName') + ', ' + record.get('firstName'));
				}
			}
		});
	}
})