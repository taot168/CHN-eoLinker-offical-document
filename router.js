(function() {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [{
			title: '欢迎使用',
			sref: 'index',
			href: '/html/index'
		}, {
			title: '用户系统',
			sref: '用户系统',
			childList: [{
				title: '基本账户操作',
				sref: '用户系统.基本账户操作',
				childList: [{
					title: '用户注册',
					sref: '用户系统.基本账户操作.注册',
					href: '/html/用户系统/基本账户操作/注册'
				}, {
					title: '用户登录',
					sref: '用户系统.基本账户操作.登录',
					href: '/html/用户系统/基本账户操作/登录'
				}, {
					title: '完善个人资料',
					sref: '用户系统.基本账户操作.完善个人资料',
					href: '/html/用户系统/基本账户操作/完善个人资料'
				}, {
					title: '修改密码',
					sref: '用户系统.基本账户操作.修改密码',
					href: '/html/用户系统/基本账户操作/修改密码'
				}, {
					title: '忘记密码',
					sref: '用户系统.基本账户操作.忘记密码',
					href: '/html/用户系统/基本账户操作/忘记密码'
				}]
			}]
		}, {
			title: '接口管理平台',
			sref: '接口管理平台',
			childList: [{
				title: '简介',
				sref: '接口管理.简介',
				href: '/html/接口管理/简介'
			}, {
				title: '快速入门',
				sref: '接口管理平台.快速入门',
				childList: [{
					title: '流程图',
					sref: 'apiManagement.product.doc',
					href: '/html/apiManagement/product/doc'
				}]
			}]
		}]
	};
})()