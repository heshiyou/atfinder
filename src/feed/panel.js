Ext.regModel('Article', {
   fields: ['usrImg', 'username', 'share', 'class', 'address', 'review', 'like', 'time', 'hot']
});

var store = new Ext.data.JsonStore({
   model: 'Article',
   //sorters: 'username',

   getGroupString: function(record) {
       return record.get('username')[0];
   },

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '水木灵', share:'90', title:'西式餐馆', address:'天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号天河粤垦路188号', review:'0', like:'0', time:'0.8', hot:'270', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '水木灵', share:'120', title:'日式餐馆', address:'天河粤垦路188号', review:'2', like:'32', time:'0.9', hot:'159', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: '水木灵', share:'217', title:'艺术蛋糕', address:'天河粤垦路188号', review:'2', like:'32', time:'0.5', hot:'346', isset:'0'},
   ]
});

Ext.define('Af.feed.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-feed-panel',
	config: {
		cls: 'af-feed-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'feedpanel',
		items: [
		// top bar
		{
			xtype: 'navigationbar',
			title: '<b>动&nbsp;&nbsp;态</b>',
			ui: 'af',
			layout: 'vbox',
			height: 30,
			items: [
				{
					xtype: 'panel',
					flex:0.14
				},
				{
					xtype: 'spacer',
					cls: 'login-toolbar-spacer',
					width: 1,
					//flex:0.003
					
               	},
				{
					xtype: 'panel',
					flex: 0.64
				},
				{
					xtype: 'spacer',
					cls: 'login-toolbar-spacer',
					width: 1,
					//align : 'right',
					//flex:0.003,
				},
				{
					xtype: 'panel',
					cls: 'login-right-button',
                    items: [{
                            xtype: 'button',
                            baseCls: 'x-button-af',
                            height: 100,
                            docked: 'right',
							html: '<img src="resources/themes/images/default/feed_r1_c32.png" width="29px"></img>'
                            }],
					flex:0.14
				},
			]
		},
		// switch bar
		{
	        xtype: 'navigationbar',
            ui: 'af',
            height: 30,
            items: [
                    {
                        html: '全部'
                    },
                    {
                        html: '好友'
                    },
                    {
                        html: '附近'
                    }
                ]
		}, 
		// switch status bar
		{
			xtype: 'panel',
			cls: 'feed-switch-status',
			html: ''
		},
		// horizontal boxs
        {
            xtype: 'panel',
            cls: 'feed-content-card',
            flex: 1,
            layout: 'card',
            items: [
    		// articles list
	            	{
	            		xtype: 'list',
	            		cls: 'articles-list',
	            		selectedCls: 'articles-list-selectd',
	            		itemTpl: '<div class="feed-article-user" style="float:left;">'+
	            		'<img src={usrImg} width="60px" style="float:left;"/>'+
	            		'<span style="float:left;margin-top:65px; margin-left:-60px; ">{username}</span></div>'+
	            		'<div class="feed-article-angle"><img style="margin-left:10px; margin-top: -8px;" src="resources/themes/images/default/article_angle.png"/></div>'+
	            		' <div class="article" style="background:white; float: left; margin-left:25px; margin-top:-22px; min-width:320px;">'+
	            		'<div class="hot" style="float: right; color:red;">{hot}°C</div>'+
	            		'<div class="article-title" >{title}</div>'+
	            		'<div class="article-content" style="width: 300px;">{address}'+
	            		'</div><div class="article-time">{time}分钟前</div>'+
	            		'<div class="article-actions" style="float: right;"></div><a href="#"><img src="resources/themes/images/default/feed_like.png" style=""/>{like}</a><a href="#"><img src="resources/themes/images/default/feed_comment.png" style=""/>{review}</a><a href="#"><img src="resources/themes/images/default/feed_share.png" style=""/>{share}</a></div>', 
	            		store: store,
	            		flex: 1,
	            	},		
                    {
                        html: "First item"
                    },
                    {
                        html: "First item"
                    },
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
						cls: 'af-toolbar-bbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/heart_icon.png" width="37"></img>'
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
		]
	},
	initComponent: function() {
		
			   Af.feed.panel.superclass.initComponent.apply(this);
	},
});
