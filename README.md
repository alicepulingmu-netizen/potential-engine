响应式企业官网实战项目
一、项目简介
本项目是一个基于现代前端技术栈开发的响应式商业落地页。项目从零开始搭建，涵盖了从需求拆解、页面布局、移动端适配到自动化部署的全流程。主要用于展示个人在 CSS3 布局、Less 预处理及前端工程化 方面的实战能力。
二、技术栈
HTML5: 语义化标签结构。
CSS3 & Less: 模块化样式开发，使用变量、嵌套、媒体查询。
JavaScript: 基础交互逻辑实现。
npm: 项目依赖管理与构建。
GitHub Pages: 持续集成与线上部署。
三、核心功能与技术亮点：
全平台响应式适配：通过 viewport 视口配置与 Media Queries，完美兼容 PC、平板与手机移动端。
Flexbox 布局方案：解决复杂的导航栏对齐及业务卡片自动换行问题。
Less 预处理实践：利用变量定义主题色，通过嵌套结构减少样式冗余，提升代码可读性。
代码优化与打包：理解并实践了代码压缩（Minification）对加载性能的提升。
四、如果你想在本地运行本项目
1.克隆仓库：git clone https://github.com/alicepulingmu-netizen/potential-engine
2.进入目录：cd potential-engine
3.安装依赖：npm install
4.直接打开 index.html 即可预览。
五、开发过程遇到的难题：
移动端缩放问题：最初部署后手机端文字重叠，通过添加 <meta name="viewport"> 标签解决了视口渲染问题。
路径引用故障：处理了部署在 GitHub Pages 时由于路径大小写敏感导致的资源加载 404 问题。
