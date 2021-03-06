# GridManager-ccms-skin

GridManager适配组件库样式

[![npm version](https://img.shields.io/npm/v/gridmanager-ccms-skin.svg?style=flat)](https://www.npmjs.com/package/gridmanager-ccms-skin)
[![install size](https://img.shields.io/github/languages/code-size/BoWang816/gridManager-ccms-skin.svg?style=flat)](https://packagephobia.now.sh/result?p=gridmanager-ccms-skin)
[![npm downloads](https://img.shields.io/npm/dt/gridmanager-ccms-skin.svg?style=flat-square)](https://npm-stat.com/charts.html?package=gridmanager-ccms-skin)

## 修改原始配置项

param|description|oldValue|newValue|
:----:|:----:|:----:|:----:|
disableLine | 配置是否禁用单元格分割线 | false | true |
skinClassName | 皮肤样式所使用的className | - | ccms-skin |
configInfo | 配置列自定义提示信息 | 配置列的显示状态 | 自定义字段可在列表拖拽调整排序 |
emptyTemplate | 数据为空时自定义html模版 | - | - |
ajaxPageTemplate | 页脚自定义html模版 | - | - |

## 配置项修改后效果图

- 存在数据时：
	- 原始配置效果：
	![old.jpg](https://i.loli.net/2019/03/26/5c99dd393524b.jpg)
	
	- 本项目配置效果：
	![new.jpg](https://i.loli.net/2019/03/26/5c99dd3939a77.jpg)

- 数据为空时：
	- 原始配置效果：
	![oldEmpty.jpg](https://i.loli.net/2019/03/26/5c99de57c3860.jpg)
	
	- 本项目配置效果：
	![newEmpty.jpg](https://i.loli.net/2019/03/26/5c99de57c0d09.jpg)
	
- 数据加载loading：
	- 原始配置效果：
	![oldLoading.jpg](https://i.loli.net/2019/03/26/5c99df3add745.jpg)
	- 本项目配置效果：
	![newLoading.jpg](https://i.loli.net/2019/03/26/5c99e1a27e4bd.jpg)
	
## 依赖项目

[gridmanager-angular-1.x](https://github.com/baukh789/GridManager-Angular-1.x)

## 安装

```node
npm install gridmanager-ccms-skin
```

## 使用

- 通过script标签引入即可

```html
<script src="../node_modules/gridmanager-ccms-skin/js/index.js"></script>
```

## 反馈

> 如有疑问，可提issue或发邮件至 bo.wang1016@outlook.com
