Ext.define('IMS.store.Users', {
	extend: 'Ext.data.Store',
	model: 'IMS.model.Users',
	autoLoad: {
		start: 0,
		limit: 10
	},
	remoteFilter: true,
	remoteSort: true,
	loadMask: true,
	storeId: 'users',
	pageSize: 10,
	proxy: {
		type: 'rest',
		url: '/users/userlist',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});