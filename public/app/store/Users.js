Ext.define('IMS.store.Users', {
	extend: 'Ext.data.Store',
	model: 'IMS.model.Users',
	autoLoad: {
		start: 0
	},
	remoteFilter: true,
	remoteSort: true,
	loadMask: true,
	storeId: 'users',
	proxy: {
		type: 'rest',
		url: '/users/userlist',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});