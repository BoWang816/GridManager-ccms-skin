import './gridmanager-reset.less';
import ajaxPageTemplate from './ajaxPage.tpl.html';

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
        isIconFollowText: true,   // 默认使用表头相关按钮跟随表头文字
        supportAdjust: true,      // 默认不支持列宽度调整
        disableLine: true,        // 默认不支持列分割线显示
        dataKey: 'list',          // 数据使用后端返回的list数组
        showFooterPageInfo: true, // 默认显示页数据信息
        showFooterGoTo: false,    // 默认不显示自带的跳转框
        showFooterCheckedInfo: false,  // 默认不显示选中描述信息
        skinClassName: 'ccms-skin', // 页样式名称
        configInfo: '自定义字段可在列表拖拽调整排序', // 列配置提示信息
        emptyTemplate: `<div class="empty-content init-msg"><span class="warning"><svg><symbol id="icon-caution" viewBox="0 0 1024 1024"><path d="M511.998 34.977c-263.457 0-477.023 213.566-477.023 477.023 0 263.46 213.563 477.025 477.023 477.025 263.46 0 477.026-213.565 477.026-477.025 0-263.457-213.566-477.023-477.026-477.023v0zM440.557 291.888c0-39.087 31.625-70.718 70.718-70.718 39.022 0 72.195 31.629 72.195 70.718v218.861c0 39.042-33.151 70.717-72.195 70.717-39.093 0-70.718-31.675-70.718-70.717v-218.861zM513.49 802.83c-42.835 0-80.543-34.702-80.543-77.565 0-42.807 37.707-77.541 80.543-77.541 42.839 0 77.565 34.73 77.565 77.541 0 42.864-34.725 77.565-77.565 77.565z"></path></symbol>
        <use xlink:href="#icon-caution"></use></svg></span><span class="msg">暂无数据</span></div>`,
        loadingTemplate: `<section class="gm-ccms-loading">
                            <div class="loader">
                                <svg class="circular" viewBox="25 25 50 50">
                                    <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
                                </svg>
                            </div>
                        </section>`,
        ajaxPageTemplate: ajaxPageTemplate
    };

    GridManager.defaultOption = defaultOption;
})(window.GridManager);
