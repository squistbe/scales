Ext.define('IMS.store.Users', {
	extend: 'Ext.data.Store',
	model: 'IMS.model.Users',
	autoLoad: true,
	storeId: 'users',
	proxy: {
		type: 'ajax',
		url: '/users/userlist'
	}
});