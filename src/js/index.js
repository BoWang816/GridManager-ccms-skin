import './gridmanager-reset.less';

((GridManager) => {
    if (!GridManager) {
        console.error('GridManager未发现，请确认是否已经引用。');
        return;
    }
    const defaultOption = {
        width: '100%',
        height: '100%',
        currentPageKey: 'pageNum', // 默认请求参数当页字段
        pageSizeKey: 'pageSize',  // 默认请求参数当页显示数据条数
        supportAutoOrder: false, // 默认不支持自动产生序号
        supportCheckbox: false,  // 默认不支持使用复选框选中
        supportAjaxPage: true,   // 默认支持分页
        supportAdjust: true,    // 默认不支持列宽度调整
        disableLine: true,       // 默认不支持列分割线显示
        supportMenu: true,      // 默认不支持右键
        dataKey: 'list',       // 数据使用后端返回的list数组
        showFooterPageInfo: true,
        showFooterGoTo: false,
        showFooterCheckedInfo: false,
        textConfig: {
            'next-page': {
                'zh-cn': '<i class="iconfont icon-nextpage"></i>',
                'en-us': 'next'
            },
            'previous-page': {
                'zh-cn': '<i class="iconfont icon-nextpage"></i>',
                'en-us': 'previous'
            },
            'last-page': {
                'zh-cn': '<i class="iconfont icon-lastpage"></i>',
                'en-us': 'last'
            },
            'first-page': {
                'zh-cn': '<i class="iconfont icon-lastpage"></i>',
                'en-us': 'first'
            },
            'page-info': {
                'zh-cn': '<span class="page-info-totals">共{2}条</span><span class="page-size-info"><input type="text" class="gp-input" value="{3}"/>/ 共{4}页</span>',
                'zh-tw': '尾頁',
                'en-us': 'pageInfo'
            },
            'goto-first-text': {
                'zh-cn': '跳转至',
                'zh-tw': '跳轉至',
                'en-us': 'goto'
            },
            'goto-last-text': {
                'zh-cn': '页',
                'zh-tw': '頁',
                'en-us': 'page'
            }
        }
    };

    GridManager.defaultOption = defaultOption;
})(window.GridManager);
