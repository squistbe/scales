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
            var mainTabPanel = this.getComponent('centerPanel').getComponent('mainTabPanel'),
                userStore = Ext.create('IMS.store.Users');

            mainTabPanel.add({
              xtype: 'usergrid', 
              title: 'Users',
              closable: true,
              store: userStore,
              dockedItems: [{
                xtype: 'pagingtoolbar',
                store: userStore,
                dock: 'top',
                prependButtons: true,
                items: [{
                  xtype: 'gridquery',
                  store: userStore,
                  valueField: 'userId'
                }, '-', {
                  text: 'Clear Filter',
                  handler: 'clearFilter'
                }, {
                  text: 'Clear Sort',
                  handler: 'clearSort'
                }, {
                  text: 'New User',
                  handler: 'createUser'
                }, '->']
              }]
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
