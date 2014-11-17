Ext.define('IMS.view.grid.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.userlistcontroller',

	createUser: function (button) {
		this.addRecordToUserForm(Ext.create('IMS.model.Users'), this.getMainPanel(button));
	},
	viewUser: function (view, td, cellIndex, record, tr, rowIndex) {
		this.addRecordToUserForm(record, this.getMainPanel(view));
	},
	deleteUser: function (view, rowIndex, cellIndex, column, e, record, tr) {
		record.erase()
	},
	getMainPanel: function (cmp) {
		return cmp.up('tabpanel#mainTabPanel');
	},
	addRecordToUserForm: function (record, mainPanel) {
		if (record && mainPanel) {
			mainPanel.add({
				xtype: 'userform',
				viewModel: {
					data: record.data
				},
				closable: true
			});
			mainPanel.setActiveTab(mainPanel.items.length - 1);
			mainPanel.getActiveTab().getForm().trackResetOnLoad = true;
			mainPanel.getActiveTab().loadRecord(record);
			mainPanel.getActiveTab().getForm().reset();
		}
	}
});