import './gridmanager-reset.less';

((GridManager) => {
    if (!GridManager) {
        console.error('GridManager未发现，请确认是否已经引用。');
        return;
    }
    const defaultOption = {
        width: '100%',
        height: '100%',
        supportMenu: false,       // 默认不支持右键菜单
        currentPageKey: 'pageNum',// 默认请求参数当页字段
        pageSizeKey: 'pageSize',  // 默认请求参数当页显示数据条数
        supportAutoOrder: false,  // 默认不支持自动产生序号
        supportCheckbox: false,   // 默认不支持使用复选框选中
        supportAjaxPage: true,    // 默认支持分页
        supportAdjust: true,      // 默认不支持列宽度调整
        disableLine: true,        // 默认不支持列分割线显示
        dataKey: 'list',          // 数据使用后端返回的list数组
        showFooterPageInfo: true, // 默认显示页数据信息
        showFooterGoTo: false,    // 默认不显示自带的跳转框
        showFooterCheckedInfo: false,  // 默认不显示选中描述信息
        skinClassName: 'ccms-skin', // 页样式名称
        emptyTemplate: `<div class="empty-content init-msg"><span class="iconfont icon-caution warning"></span><span class="msg">无数据</span></div>`,
        loadingTemplate: `<section class="gm-ccms-loading">
                            <div class="loader">
                                <svg class="circular" viewBox="25 25 50 50">
                                    <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
                                </svg>
                            </div>
                        </section>`,
        textConfig: {
            'next-page': {
                'zh-cn': '<i class="iconfont icon-nextpage"></i>',
                'zh-tw': '下一頁',
                'en-us': 'next'
            },
            'previous-page': {
                'zh-cn': '<i class="iconfont icon-nextpage"></i>',
                'zh-tw': '上一頁',
                'en-us': 'previous'
            },
            'last-page': {
                'zh-cn': '<i class="iconfont icon-lastpage"></i>',
                'zh-tw': '尾頁',
                'en-us': 'last'
            },
            'first-page': {
                'zh-cn': '<i class="iconfont icon-lastpage"></i>',
                'zh-tw': '首頁',
                'en-us': 'first'
            },
            'refresh-action': {
                'zh-cn': '<i class="iconfont icon-refresh"></i><span class="refresh-label">刷新</span>',
                'zh-tw': '<i class="iconfont icon-refresh"></i>',
                'en-us': '<i class="iconfont icon-refresh"></i>'
            },
            'page-info': {
                'zh-cn': '<span class="page-info-totals">共{2}条</span><span class="page-size-info"><input type="text" class="gp-input" value="{3}"/>/ 共{4}页</span>',
                'zh-tw': '此頁顯示 {0}-{1} 共{2}條',
                'en-us': 'this page show {0}-{1} count {2}'
            }
        }
    };

    GridManager.defaultOption = defaultOption;
})(window.GridManager);
