Ext.define('IMS.view.grid.Users', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.usergrid',
	controller: 'userlistcontroller',
	listeners: {
		cellclick: 'viewUser'
	},
	style: {
		borderTop: '1px solid #cecece'
	},
	viewConfig: {
		stripeRows: true
	},
	columns: [{
		dataIndex: 'edit',
		text: 'View/Edit',
		width: 100,
		renderer: function () {
			return '<span class="link-field">View/Edit</span>';
		}
	}, {
		dataIndex: 'firstName',
		text: 'First Name',
		flex: 1
	}, {
		dataIndex: 'lastName',
		text: 'Last Name',
		flex: 1
	}, {
		dataIndex: 'userId',
		text: 'User ID',
		flex: 1
	}, {
		dataIndex: 'email',
		text: 'Email',
		flex: 1
	}, {
		dataIndex: 'delete',
		xtype: 'actioncolumn',
		align: 'center',
		width: 32,
		menuDisabled: true,
		hideable: false,
		items: [{
			icon: 'resources/images/icons/delete-gray.png',
			handler: 'deleteUser'
		}]
	}],
	tbar: [{
		text: 'New User',
		handler: 'createUser'
	}, '->', {
		xtype: 'combo',
		triggerCls: 'x-form-search-trigger'
	}]
});