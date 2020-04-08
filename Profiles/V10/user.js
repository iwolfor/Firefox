# user_pref(key,value) 等同于从about:config修改，删除之后，修改的设置仍然有效。
# pref(key,value) 删除之后，修改的设置也将失效。
# 2020-02-04 版本 by runningcheee


//控制内存使用
pref("browser.sessionhistory.max_entries", 15);//设置标签前进/后退历史记录缓存数量
pref("browser.sessionhistory.max_total_viewer", 5);//快进/快退保存的页面总数，减少内存占用
pref("config.trim_on_minimize", true);//最小化时释放物理内存
//pref("browser.sessionstore.max_tabs_undo", 20);//最近撤销标签历史最大数
//pref("browser.urlbar.maxRichResults",10); //地址栏里的历史记录数量


//标签选项
//pref("toolkit.cosmeticAnimations.enabled", false);//关闭标签动画
//pref("browser.tabs.warnOnCloseOtherTabs", false); //关闭多个标签页时不提醒
//pref("browser.tabs.warnOnClose", false); //关闭所有标签页时不提醒
pref("browser.tabs.closeWindowWithLastTab", false); //关闭最后一个标签时不关闭浏览器

pref("privacy.userContext.enabled", true);//开启身份标签页
//pref("browser.tabs.tabMinWidth", 76);//标签最小宽度
pref("browser.tabs.insertAfterCurrent", true);//紧邻当前标签页打开
pref("browser.bookmarks.openInTabClosesMenu", false);//点击书签不关闭菜单
pref("browser.link.open_newwindow", 3);//新标签页打开链接,而不是窗口1
pref("browser.link.open_newwindow.disabled_in_fullscreen", true);//新标签页打开链接,而不是窗口2
pref("browser.link.open_newwindow.restriction", 0);//所有通过JavaScript 打开的窗口均与browser.link.open_newwindow 的设置保持一致。

pref("browser.search.openintab", true);//搜索栏在新标签页打开
pref("browser.urlbar.openintab", true);//地址栏在新标签页打开
pref("browser.tabs.loadBookmarksInTabs", true);//书签栏在新标签页打开
//pref("browser.tabs.loadInBackground", true);//中键点击链接后台打开
//pref("browser.search.context.loadInBackground", true);//搜索栏在后台打开
//pref("browser.tabs.loadBookmarksInBackground", true);//书签在后台打开
//pref("browser.tabs.loadDivertedInBackground", true);//外部链接后台打开


//关闭自动更新
user_pref("browser.search.update", false);//禁用搜索引擎自动更新
user_pref("extensions.update.enabled", false); //禁用扩展更新和检查更新
user_pref("extensions.getAddons.cache.enabled", false); //扩展页面不显示自动推荐内容


//偏好设置
pref("browser.bookmarks.max_backups", 5);//书签备份文件的数量
pref("ui.osk.enabled", false);//触摸键盘
pref("media.eme.enabled", false);//drm内容
pref("security.OCSP.enabled", 0);//OCSP服务器
pref("dom.popup_maximum", 5); //Firefox弹窗的最大数量
pref("extensions.ui.lastCategory", "addons://list/extension");//附加组件默认打开拓展项
//pref("media.autoplay.default",0); //允许音频自动播放
user_pref("datareporting.healthreport.service.enabled", false);//禁止遥测往prefs.js写入数据
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);//让拓展在addons.mozilla.org网站上正常工作
user_pref("extensions.webextensions.restrictedDomains",  "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com"); //让拓展在addons.mozilla.org网站上正常工作
user_pref("ui.context_menus.after_mouseup", true);//修正 Mac/Linux 下右键菜单的问题
pref("network.captive-portal-service.enabled", false);//修正需要登录才能访问网络的问题


//功能开启
user_pref("layout.display-list.retain", true);//提升浏览器界面绘制性能，只重新计算显示的列表项而非所有列表项
user_pref("network.standard-url.enable-rust", true);//Rust的URL解析器
user_pref("network.tcp.tcp_fastopen_enable", true);//TCP快速启用过滤,减少http延迟
user_pref("browser.xul.error_pages.expert_bad_cert", true);//自动展开：此连接是不受信任的
user_pref("toolkit.legacyUserProfileCustomizations.stylesheet", true);//开启userchrome.css ff69+


//功能去除
pref("extensions.pocket.enabled",false); //取消自带的稍后阅读功能
//pref("geo.enabled", false);//禁用地理位置
//pref("browser.urlbar.oneOffSearches", false);//地址栏下拉菜单隐藏切换搜索引擎模块
//pref("browser.taskbar.lists.enabled", false);//关闭常用Jumplist跳转列表
//pref("dom.vr.enabled", false);//关闭vr
pref("signon.rememberSignons", false); //关闭自带的保存密码功能
pref("browser.aboutConfig.showWarning", false);//AboutConfig警告
pref("accessibility.force_disabled", 1); //禁用无障碍环境
pref("security.sandbox.content.level", 0); //禁用沙盒
pref("security.mixed_content.block_active_content", false); //关闭ssl不安全内容和混合内容保护1 (让小书签在https页面上起作用 )
pref("security.mixed_content.block_display_content", false); //关闭ssl不安全内容和混合内容保护2
//pref("security.csp.enable", false);//禁用CSP (解除因为Content Security Policy 导致 bookmarklet 失效 )
pref("security.dialog_enable_delay", 0);//安装附加组件时的等待时间
pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
pref("browser.backspace_action", 1); //去除退格键使网页后退的功能，改成向上滚动页面。

//pref("datareporting.healthreport.uploadEnabled", false);//关闭安全检测健康中心
//pref("datareporting.policy.dataSubmissionEnabled", false); //关闭安全检测健康中心
//pref("dom.flyweb.enabled", false);//关闭物联网扩展
//pref("security.enterprise_roots.enabled", true);//去除访问所有HTTPS网站显示连接不安全
//pref("security.insecure_field_warning.contextual.enabled", false); //取消此连接不安全，输入的登录信息可能被窃取
//pref("layout.spellcheckDefault", 0); //去除输入时即拼写检查
//pref("dom.event.contextmenu.enabled", false);//破解右键限制 (开启会导致拨号页右键菜单重叠)
//pref("browser.urlbar.formatting.enabled", false);//关闭域名高亮
pref("services.sync.engine.addons",false); //取消附加组件的同步功能
//pref("services.sync.engine.prefs",false); //取消首选项的同步功能
pref("media.gmp-widevinecdm.visible",false); //去除播放DRM内容黄条提示
pref("network.IDN_show_punycode",true); //禁用 Ponycode URL
pref("extensions.htmlaboutaddons.recommendations.enabled",false); //去除附加管理器页面的推荐扩展
//pref("gfx.direct2d.disabled",false); // 开启direct2d，用于硬件加速，默认即是false
//pref("gfx.webrender.force-disabled",true);  //关闭 Webrender  70+


//动画
pref("browser.download.animateNotifications",false); //取消下载提醒动画
pref("full-screen-api.transition-duration.enter","0 0");//去除全屏淡进淡出效果
pref("full-screen-api.transition-duration.leave","0 0");//去除全屏淡进淡出效果
pref("full-screen-api.warning.delay",0);//去除全屏提醒
pref("full-screen-api.warning.timeout",0);//去除全屏提醒



//开发者工具
user_pref("devtools.chrome.enabled", true); //chrome界面调试
user_pref("devtools.debugger.remote-enabled", true); //远程调试
user_pref("view_source.wrap_long_lines", true);//查看页面源代码时自动换行


//禁用遥测
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);


//插件
user_pref("media.gmp-provider.enabled", false); //干掉插件
user_pref("plugin.scan.plid.all", false); //disable Plugin Scan
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位flash关闭沙箱
user_pref("extensions.blocklist.enabled", false);//关闭flash版本过旧被屏蔽的提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true); //开启Flash去沙盒
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); //flash崩溃报告crashreporter
user_pref("plugin.state.flash",2);//flash总是开启


//Newtab页面
//user_pref("browser.startup.homepage", "moz-extension://953aa7fd-0a1e-483a-96d0-c897c268aa09/pages/newtab.html");//设置浏览器主页
user_pref("browser.newtabpage.activity-stream.aboutHome.enabled", false);
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);//newtab不提示导入书签
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);//newtab关闭集锦
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);//newtab关闭Pocket推荐
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);//newtab关闭只言片语
user_pref("browser.newtabpage.activity-stream.topSitesCount", 12);//newtab常用网站显示12个
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);//newtab图标双行显示
user_pref("browser.newtabpage.activity-stream.enableWideLayout", false);//newtab图标启用宽屏展示
//newtab不提示新手引导
user_pref("browser.onboarding.state", "watermark"); 
user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", true);
//禁止生成略缩图
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.newtabpage.enabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://www.quora.com\",\"label\":\"Quora\"},{\"url\":\"https://www.inoreader.com\",\"label\":\"Inoreader\"},{\"url\":\"https://pan.baidu.com/\",\"label\":\"Pan\"},{\"url\":\"https://getpocket.com\",\"label\":\"Pocket\"},{\"url\":\"https://www.instagram.com\",\"label\":\"Instagram\"},{\"url\":\"https://twitter.com\",\"label\":\"Twitter\"},{\"url\":\"http://www.youku.com\",\"label\":\"Youku\"},{\"url\":\"https://weibo.com\",\"label\":\"Weibo\"},{\"url\":\"https://tieba.baidu.com/\",\"label\":\"Tieba\"},{\"url\":\"https://www.bilibili.com\",\"label\":\"Bilibili\"},{\"url\":\"https://wx.qq.com/\",\"label\":\"WeChat\"},{\"url\":\"http://music.163.com\",\"label\":\"Music\"},{\"url\":\"http://www.zhihu.com\",\"label\":\"Zhihu\"},{\"url\":\"http://www.guokr.com\",\"label\":\"Guokr\"},{\"url\":\"http://www.douban.com\",\"label\":\"Douban\"},{\"url\":\"https://www.runningcheese.com\",\"label\":\"Cheese\"}]");


