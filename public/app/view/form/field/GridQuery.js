Ext.define('IMS.view.form.field.GridQuery', {
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.gridquery',
	triggerCls: 'x-form-search-trigger',
	queryMode: 'remote',
	queryParam: 'search',
	typeAhead: true,
	minChars: 2,
	emptyText: 'Search',
	triggerAction: 'query',
	listeners: {
		expand: function (field) {
			field.picker.hide();
		}
	}
});