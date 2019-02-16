# GridManager-ccms-skin

GridManager适配组件库样式

[![npm version](https://img.shields.io/npm/v/gridmanager-ccms-skin.svg?style=flat)](https://www.npmjs.com/package/gridmanager-ccms-skin)
[![install size](https://img.shields.io/github/languages/code-size/BoWang816/gridManager-ccms-skin.svg?style=flat)](https://packagephobia.now.sh/result?p=gridmanager-ccms-skin)
[![npm downloads](https://img.shields.io/npm/dt/gridmanager-ccms-skin.svg?style=flat-square)](https://npm-stat.com/charts.html?package=gridmanager-ccms-skin)

## 修改原始配置项

- `dataKey` 设置为'list'
- `currentPageKey` 设置为'pageNum'
- `pageSizeKey` 设置为'pageSize'
- `supportAutoOrder` 设置为false
- `supportCheckbox` 设置为false
- `supportAjaxPage` 设置为true
- `supportAdjust` 设置为true
- `disableLine` 设置为true
- `supportMenu` 设置为false
- `isIconFollowText`: 设置为true,
- `showFooterPageInfo` 设置为true
- `showFooterGoTo` 设置为false
- `showFooterCheckedInfo` 设置为false
- `loadingTemplate` 设置默认loading模版
- `refresh-action` 设置刷新按钮模版
- `skinClassName` 设置皮肤类名称
- `emptyTemplate` 设置数据为空时的模版
- `textConfig`: 翻页样式：设置了使用图标样式代替文本样式
    - `next-page` 设置下一页为按钮样式
    - `previous-page` 设置上一页为按钮样式
    - `last-page` 设置最后一页为按钮样式
    - `first-page` 设置第一页为按钮样式
    - `page-info` 自定义了页信息, 用于显示数据总条数以及总页数，支持跳转指定页数
