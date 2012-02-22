
Ext.define('Af.discover.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-discover-panel',
	config: {
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'discoverpanel',
		items: [
// top bar
			{
				xtype: 'navigationbar',
				ui: 'af',
				height: 30,
				title: '<b>发&nbsp;&nbsp;现</b>',
				items: [
					{
						xtype: 'panel',
						cls: 'login-left-button',
					},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 2
					},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 2,
						align: 'right',
					},
					{
						xtype: 'panel',
						cls: 'login-left-button',
						align: 'right'
					}
				]
			},
// bottom bar
			{
				xtype : 'navigationbar',
            	docked: 'bottom', 	
				height: 45,
				ui: 'af',
				layout: 'vbox',
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/feed_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 61/640,
						flex: 0.0953125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/shopping_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'button',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/s_heart_icon.png" width="37"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.125
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/activi_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 30,
						//flex: 60/640,
						flex: 0.09375
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/me_icon.png" width="25"></img>'
					},
					{
						xtype: 'spacer',
						//width: 26,
						//flex: 52/640,
						flex: 0.08125
                	},
				]
			},
// forward button			
			{
				xtype: 'panel',
				cls: 'discover-forward-button',
				html: '<img src="resources/themes/images/default/discover/discover_r7_c80.png"></img>',
				listeners: { // TODO: not works
					el: {
						click: function() {
							console.log('clicked');
						}
					}
				}
			},
// content
			{
				xtype:'panel',
				// TODO: use height: '850' will be nothing out.
				//height: 650,
				flex: 1,
				layout: 'card',
				scroll: true,
				activeItem: 1, // TODO: not works
				items:[
						{
							xtype: 'panel',
							ui: 'af',
							layout: 'vbox',
							items: [
								{
									xtype: 'panel',
									cls: 'discover-title',
									html: '<img src="resources/themes/images/default/discover/discover_r1_c21.png"></img>'
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r7_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r7_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r22_c41.png"></img>'
										},
									]
								},
							]
							
						},
						{
							xtype: 'panel',
							ui: 'af',
							layout: 'vbox',
							items: [
								{
									xtype: 'panel',
									cls: 'discover-title',
									html: '<img src="resources/themes/images/default/discover/discover_r26_c19.png"></img>'
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r31_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r31_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r39_c41.png"></img>'
										},
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r39_c61.png"></img>'
										}
									]
								},
								{
									xtype: 'panel',
									cls: 'discover-buttons',
									layout: 'hbox',
									items: [
										{
											xtype: 'panel',
											cls: 'discover-button',
											html: '<img src="resources/themes/images/default/discover/discover_r57_c41.png"></img>'
										},
									]
								},
								
							]
							
						}
					],
			},
		]
	}
});
