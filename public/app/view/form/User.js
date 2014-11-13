Ext.define('IMS.view.form.User', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userform',
	controller: 'usercontroller',
	bodyPadding: 10,
	style: {
		borderTop: '1px solid #cecece'
	},
	fieldDefaults: {
		labelAlign: 'right',
		msgTarget: 'side'
	},
	tbar: [{
		text: 'Save',
		handler: 'saveUser'
	}],
	items: [{
		xtype: 'fieldset',
		title: 'User Info',
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'User ID',
			name: 'userId'
		}, {
			fieldLabel: 'Password',
			name: 'password',
			inputType: 'password'
		}, {
			fieldLabel: 'Verify',
			name: 'confirmPassword',
			inputType: 'password'
		}]
	}, {
		xtype: 'fieldset',
		title: 'Contact Information',
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'First Name',
			name: 'firstName'
		}, {
			fieldLabel: 'Last Name',
			name: 'lastName'
		}, {
			fieldLabel: 'Company',
			name: 'companyName'
		}, {
			fieldLabel: 'Email',
			name: 'email',
			vtype: 'email'
		}, {
			fieldLabel: 'Mobile',
			name: 'cellPhone'
		}, {
			fieldLabel: 'Home',
			name: 'homePhone'
		}, {
			fieldLabel: 'Work',
			name: 'workPhone'
		}]
	}, {
		xtype: 'fieldset',
		title: 'Address',
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'Street',
			name: 'street1'
		}, {
			fieldLabel: 'Street 2',
			name: 'street2'
		}, {
			fieldLabel: 'City',
			name: 'city'
		}, {
			fieldLabel: 'State',
			xtype: 'combo',
			name: 'state'
		}, {
			fieldLabel: 'Postal Code',
			name: 'postalCode'
		}]
	}]
});