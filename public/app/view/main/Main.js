Ext.define('IMS.view.main.Main', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        title: 'Scales',
        region: 'west',
        split: true,
        minWidth: 250
    },{
        region: 'center',
        xtype: 'panel',
        tbar: [{
          text: 'Process'
        }, {
          text: 'Search'
        }, {
          text: 'Setup'
        }, {
          text: 'Training'
        }, '->', {
          text: '[user\'s name]',
          menu: [{
            text: 'Logout'
          }, {
            text: 'Profile'
          }]
        }],
        items:[{
          xtype: 'tabpanel',
          plain: true
        }]
    }]
});
