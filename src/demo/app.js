/**
 * Created by bo.wang on 18/11/20.
 */
import gridManager from 'gridmanager-angular-1.x';
import '../js/index.js';
let app = angular.module("myApp", [gridManager]);
app.controller('AppController', ['$window', '$rootScope', '$scope', '$element', '$gridManager', function($window, $rootScope, $scope, $element, $gridManager) {
    $scope.isDestroy = false;
    // 销毁实例
    $scope.destroy = () => {
        $scope.isDestroy = true;
        console.log('销毁实例');
        // 原生写法1
        // $gridManager.destroy('gridManager-ccms-skin');

        //原生写法2
        // const table = document.querySelector('table');
        // $gridManager.destroy(table);
    };

    // 清除数据
    $scope.cleanData = function() {
        console.log('清除数据');
        $gridManager.cleanData('gridManager-ccms-skin');
    };

    // 刷新数据
    $scope.refreshGrid = function() {
        console.log('刷新数据');
        $gridManager.refreshGrid('gridManager-ccms-skin');
    };

    // 获取版本信息
    $scope.getVersion = function() {
        console.log('版本信息');
       alert('当前版本为：' + $gridManager.version);
    };

    // 清除记忆信息
    $scope.clear = function() {
        console.log('清除记忆');
        $gridManager.clear('gridManager-ccms-skin');
    };

    // 获取表格名称
    $scope.getGridName = function() {
        console.log('表格名称');
        alert('当前表格名称为：' + $scope.option.gridManagerName);
    };

    // 初始化示例
    $scope.init = function() {
        console.log('初始化实例');
        $scope.isDestroy = false;

        // 原生写法
        // document.querySelector('table').GM('init', $scope.option);
    };

    // 获取所有配置信息
    $scope.getInfo = function() {
        console.log('获取表格所有信息');
        console.log($gridManager.get('gridManager-ccms-skin'));
    };

    // 获取记忆信息
    $scope.getMemoryInfo = function() {
        console.log('获取表格记忆信息');
        console.log($gridManager.getLocalStorage('gridManager-ccms-skin'));
    };

    // 导出表格数据
    $scope.exportGridToXls = function() {
        console.log('导出数据');
        $gridManager.exportGridToXls('gridManager-ccms-skin', 'tableInfo', false);
    };

    // 获取选中行数据
    $scope.getCheckedData = function() {
        console.log('获取选中数据');
        $gridManager.getCheckedData('gridManager-ccms-skin');
        console.log($gridManager.getCheckedData('gridManager-ccms-skin'));
    };

    // 常量: 搜索条件
    $scope.TYPE_MAP = {
        '1': 'HTML/CSS',
        '2': 'nodeJS',
        '3': 'javaScript',
        '4': '前端鸡汤',
        '5': 'PM Coffee',
        '6': '前端框架',
        '7': '前端相关'
    };
    $scope.option = {
        gridManagerName: 'gridManager-ccms-skin',
        width: '100%',
        height: '100%',
        dataKey: 'data',
        totalsKey: 'totals',
        ajax_data: function () {
            return 'https://www.lovejavascript.com/blogManager/getBlogList';
        },
        ajax_type: 'POST',
        // 显示列线条
        disableLine: false,
        // 打开可选择序号
        supportCheckbox: true,
        // 使用行选中功能
        useRowCheck: true,
        // 显示表格底部被选中行条数
        showFooterCheckedInfo: true,
        // 列配置
        columnData: [
            {
                key: 'pic',
                remind: 'the pic',
                width: '110px',
                align: 'center',
                text: '缩略图',
                // 使用函数返回 dom node
                template: function(pic, rowObject) {
                    var picNode = document.createElement('a');
                    picNode.setAttribute('href', `https://www.lovejavascript.com/#!zone/blog/content.html?id=${rowObject.id}`);
                    picNode.setAttribute('title', rowObject.title);
                    picNode.setAttribute('target', '_blank');
                    picNode.title = `点击阅读[${rowObject.title}]`;
                    picNode.style.display = 'block';
                    picNode.style.height = '58.5px';

                    var imgNode = document.createElement('img');
                    imgNode.style.width = '90px';
                    imgNode.style.margin = '0 auto';
                    imgNode.alt = rowObject.title;
                    imgNode.src = `https://www.lovejavascript.com/${pic}`;

                    picNode.appendChild(imgNode);
                    return picNode;
                }
            },{
                key: 'title',
                remind: 'the title',
                align: 'center',
                text: '标题',
                sorting: '',
                // 使用函数返回 ng template
                template: function() {
                    return '<a class="plugin-action" target="_blank" ng-href="https://www.lovejavascript.com/#!zone/blog/content.html?id={{row.id}}" title="点击阅读[{{row.title}}]">{{row.title}}</a>';
                }
            },{
                key: 'type',
                remind: 'the type',
                text: '博文分类',
                align: 'center',
                width: '150px',
                sorting: '',
                // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项
                filter: {
                    // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                    option: [
                        {value: '1', text: 'HTML/CSS'},
                        {value: '2', text: 'nodeJS'},
                        {value: '3', text: 'javaScript'},
                        {value: '4', text: '前端鸡汤'},
                        {value: '5', text: 'PM Coffee'},
                        {value: '6', text: '前端框架'},
                        {value: '7', text: '前端相关'}
                    ],
                    // 筛选选中项，字符串, 默认为''。 非必设项，选中的过滤条件将会覆盖query
                    selected: '3',
                    // 否为多选, 布尔值, 默认为false。非必设项
                    isMultiple: true
                },
                // isShow: false,
                template: function() {
                    return `<button type="button" cc-tooltip="'hello world'" tooltip-type="error-minor" ng-click="testClick(row)" ng-bind="TYPE_MAP[row.type]"></button>`;
                }
            },{
                key: 'info',
                remind: 'the info',
                width: '300px',
                text: '简介'
            },{
                key: 'username',
                remind: 'the username',
                align: 'center',
                width: '100px',
                text: '作者',
                // 使用函数返回 dom string
                template: function(username){
                    return `<a class="plugin-action" href="https://github.com/baukh789" target="_blank" title="去看看${username}的github">${username}</a>`;
                }
            },{
                key: 'createDate',
                width: '130px',
                text: '创建时间',
                sorting: 'DESC',
                // 使用函数返回 htmlString
                template: function(createDate, rowObject){
                    return new Date(createDate).toLocaleDateString();
                }
            },{
                key: 'lastDate',
                width: '130px',
                text: '最后修改时间',
                sorting: '',
                // 使用函数返回 htmlString
                template: function(lastDate, rowObject){
                    return new Date(lastDate).toLocaleDateString();
                }
            },{
                key: 'action',
                remind: 'the action',
                width: '100px',
                align: 'center',
                text: '<span style="color: red">操作</span>',
                // 直接返回 htmlString
                template: '<span class="plugin-action" ng-click="deleteRowData(row)">删除</span>' +
                    '<span class="plugin-action" ng-click="showTh()">显示</span>' +
                    '<span class="plugin-action" ng-click="hideTh()">隐藏</span>'
            },
            {
				key: 'config',
				text: '<i class="iconfont icon-config" ng-click="disableConfig()"></i>',
				align: 'left',
				width: '30px',
				disableCustomize: true,
				template: () => {
					return ' ';
				}
			}
        ]
    };
}]);
