Ext.define('IMS.model.Users', {
	extend: 'Ext.data.Model',
	fields: [
		{name: '_id', serialize: function () { delete this; }},
		'userId', 
		'firstName', 
		'lastName', 
		'email', 
		'cellPhone',
		'homePhone',
		'workPhone',
		'companyName', 
		'password', 
		'confirmPassword', 
		'street1', 
		'street2', 
		'city', 
		'state', 
		'postalCode', 
		'country'
	],
	idProperty: '_id',
	proxy: {
		type: 'rest',
		noCache: false,
		api: {
			create: '/users/adduser',
			read: '/users/userlist',
			update: '/users/updateuser',
			delete: '/users/deleteuser'
		}
	}
});