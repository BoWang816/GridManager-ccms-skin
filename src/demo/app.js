/**
 * Created by bo.wang on 18/11/20.
 */
import '../js/index';
var app = angular.module("myApp", ['gridManagerAngular']);
app.controller('AppController', ['$window', '$rootScope', '$scope', '$element', function($window, $rootScope, $scope, $element) {
    $scope.testClick = (row) => {
        console.log('click', row);
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
        // supportAjaxPage:true,
        // isCombSorting: true,
        ajax_data: function () {
            return 'https://www.lovejavascript.com/blogManager/getBlogList';
        },
        ajax_type: 'POST',

        // 使用无总页模式
        // useNoTotalsMode: true,
        // topFullColumn: {
        //     template: function(row){
        //         return `<div style="padding: 12px; text-align: center;">
        //                             快速、灵活的对Table标签进行实例化，让Table标签充满活力。该项目已开源, <a target="_blank" href="https://github.com/baukh789/GridManager">点击进入</a>github
        //                         </div>`;
        //     }
        // },
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
                align: 'left',
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
                template: '<span class="plugin-action" gm-click="deleteRowData">删除</span>'
            }
        ]
    };

    $scope.deleteRowData = function(row) {
        var table = $element[0].querySelector('table[grid-manager="testAngular"]');
        if(window.confirm('确认要删除['+row.name+']?')){
            console.log('----删除操作开始----');
            table.GM('refreshGrid');
            console.log('数据没变是正常的, 因为这只是个示例,并不会真实删除数据.');
            console.log('----删除操作完成----');
        }
    };
}]);
