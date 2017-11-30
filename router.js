(function() {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [{
			title: '欢迎使用',
			sref: 'index',
			href: '/md/index'
		}, {
			title: '接口管理平台',
			sref: '接口管理',
			childList: [{
				title: '简介',
				sref: '接口管理.简介',
				href: '/md/接口管理/简介'
			}, {
				title: '开源版本',
				sref: '接口管理.开源版本',
				childList: [{
					title: '简介',
					sref: '接口管理.开源版本.简介',
					href: '/md/接口管理/开源版本/简介'
				}]
			}]
		}, {
			title: '接口商店',
			sref: '接口商店',
			childList: [{
				title: '常见问题',
				sref: '接口商店.常见问题',
				href: '/md/接口商店/常见问题'
			}, {
				title: '身份认证',
				sref: '接口商店.身份认证',
				href: '/md/接口商店/身份认证'
			}, {
				title: '应用认证',
				sref: '接口商店.应用认证',
				href: '/md/接口商店/应用认证'
			}, {
				title: '使用流程',
				sref: '接口商店.AS使用流程',
				href: '/md/接口商店/AS使用流程'
			}, {
				title: '短信API使用流程',
				sref: '接口商店.短信API使用流程',
				href: '/md/接口商店/短信API使用流程'
			}, {
				title: '群发短信使用流程',
				sref: '接口商店.群发短信使用流程',
				href: '/md/接口商店/群发短信使用流程'
			}]
		}, {
			title: '用户系统',
			sref: '用户系统',
			childList: [{
				title: '基本账户操作',
				sref: '用户系统.基本账户操作',
				childList: [{
					title: '用户注册',
					sref: '用户系统.基本账户操作.注册',
					href: '/md/用户系统/基本账户操作/注册'
				}, {
					title: '用户登录',
					sref: '用户系统.基本账户操作.登录',
					href: '/md/用户系统/基本账户操作/登录'
				}, {
					title: '完善个人资料',
					sref: '用户系统.基本账户操作.完善个人资料',
					href: '/md/用户系统/基本账户操作/完善个人资料'
				}, {
					title: '修改密码',
					sref: '用户系统.基本账户操作.修改密码',
					href: '/md/用户系统/基本账户操作/修改密码'
				}, {
					title: '忘记密码',
					sref: '用户系统.基本账户操作.忘记密码',
					href: '/md/用户系统/基本账户操作/忘记密码'
				}]
			}]
		}]
	};
})()