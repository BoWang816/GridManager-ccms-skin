# GridManager-ccms-skin

GridManager适配组件库样式

[![npm version](https://img.shields.io/npm/v/gridmanager-ccms-skin.svg?style=flat)](https://www.npmjs.com/package/gridmanager-ccms-skin)
[![install size](https://img.shields.io/github/languages/code-size/BoWang816/gridManager-ccms-skin.svg?style=flat)](https://packagephobia.now.sh/result?p=gridmanager-ccms-skin)
[![npm downloads](https://img.shields.io/npm/dt/gridmanager-ccms-skin.svg?style=flat-square)](https://npm-stat.com/charts.html?package=gridmanager-ccms-skin)

## 修改原始配置项

**注意：0.1.6版本以后使用时请手动引入css样式文件，文件路径：/node-modules/gridmanager-ccms-skin/css/index.css**

```"设置为" 表示本项目中对应字段的值```

- `dataKey` 指定返回数据列表的key键值。原始值:data, 设置为'list'
- `currentPageKey` 请求参数中当前页key键值。原始值:cPage, 设置为'pageNum'
- `pageSizeKey` 请求参数中每页显示条数key健值。原始值:pSize, 设置为'pageSize'
- `supportAutoOrder` 是否支持自动序号。原始值:true, 设置为false
- `supportCheckbox` 配置是否支持选择与反选。原始值:true, 设置为false
- `supportAjaxPage` 指定列表是否支持分页。原始值:false, 设置为true
- `supportAdjust` 用于配置是否支持宽度调整功能。原始值:false, 设置为true
- `disableLine` 配置是否禁用单元格分割线。原始值:false, 设置为true
- `supportMenu` 配置是否支持右键菜单功能，禁用后右键功能将失效。原始值:true, 设置为false
- `isIconFollowText` 设置表头的icon图标是否跟随文本。原始值:false, 设置为true,
- `loadingTemplate` 数据加载时loading样式模版。设置默认loading模版
- `skinClassName` 皮肤样式所使用的className。原始值:'', 设置为'ccms-skin'
- `configInfo` 配置列自定义提示信息。原始值:'配置列的显示状态', 设置为'自定义字段可在列表拖拽调整排序'
- `emptyTemplate` 数据为空时自定义html模版。
- `ajaxPageTemplate` 页脚自定义html模版。


