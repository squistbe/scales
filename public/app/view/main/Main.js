Ext.define('IMS.view.main.Main', {
  extend: 'Ext.container.Viewport',
  requires: ['IMS.view.grid.Users', 'IMS.view.grid.UsersController', 'IMS.view.form.User', 'IMS.view.form.UserController'],
  layout: {
    type: 'border'
  },

  initComponent: function () {
    this.items = [{
      xtype: 'panel',
      title: 'Scales',
      region: 'west',
      split: true,
      minWidth: 250
    }, {
      region: 'center',
      xtype: 'panel',
      itemId: 'centerPanel',
      tbar: [{
        text: 'Search',
        menu: [{
          text: 'Users',
          scope: this,
          handler: function () {
            var mainTabPanel = this.getComponent('centerPanel').getComponent('mainTabPanel');

            mainTabPanel.add({
              xtype: 'usergrid', 
              title: 'Users',
              closable: true,
              store: Ext.create('IMS.store.Users')
            });
            mainTabPanel.setActiveTab(mainTabPanel.items.length - 1);
          }
        }]
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
        reference: 'mainTabPanel',
        itemId: 'mainTabPanel',
        plain: true
      }]
    }];
    this.callParent();
  }
});
