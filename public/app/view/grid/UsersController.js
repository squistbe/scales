Ext.define('IMS.view.grid.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.userlistcontroller',

	gridCellClick: function (view, td, cellIndex, record, tr, rowIndex) {
		var mainPanel = view.up('tabpanel#mainTabPanel');

		if (mainPanel) {
			mainPanel.add({
				xtype: 'userform',
				title: record.get('lastName') + ', ' + record.get('firstName'),
				closable: true
			});
			mainPanel.setActiveTab(mainPanel.items.length - 1);
			mainPanel.getActiveTab().getForm().trackResetOnLoad = true;
			mainPanel.getActiveTab().loadRecord(record);
			mainPanel.getActiveTab().getForm().reset();
		}	
	},
	newUser: function () {

	}
});