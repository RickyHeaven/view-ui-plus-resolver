'use strict';

var d = [
    'affix',
    'alert',
    'anchor',
    'anchor-link',
    'auth',
    'auto-complete',
    'avatar',
    'avatar-list',
    'back-top',
    'badge',
    'breadcrumb',
    'breadcrumb-item',
    'button',
    'button-group',
    'calendar',
    'captcha',
    'card',
    'carousel',
    'carousel-item',
    'cascader',
    'cell',
    'cell-group',
    'checkbox',
    'checkbox-group',
    'circle',
    'city',
    'col',
    'collapse',
    'color-picker',
    'content',
    'count-down',
    'count-up',
    'date-picker',
    'description',
    'description-list',
    'divider',
    'drawer',
    'dropdown',
    'dropdown-item',
    'dropdown-menu',
    'ellipsis',
    'email',
    'exception',
    'footer',
    'footer-toolbar',
    'form',
    'form-item',
    'global-footer',
    'grid',
    'grid-item',
    'header',
    'icon',
    'image',
    'image-preview',
    'input',
    'input-number',
    'layout',
    'link',
    'list',
    'list-item',
    'list-item-meta',
    'login',
    'menu',
    'menu-group',
    'menu-item',
    'mobile',
    'modal',
    'notification',
    'notification-item',
    'notification-tab',
    'number-info',
    'numeral',
    'option',
    'option-group',
    'page',
    'page-header',
    'panel',
    'paragraph',
    'password',
    'poptip',
    'progress',
    'radio',
    'radio-group',
    'rate',
    'result',
    'row',
    'scroll',
    'scroll-into-view',
    'scroll-top',
    'select',
    'sider',
    'skeleton',
    'skeleton-item',
    'slider',
    'space',
    'spin',
    'split',
    'step',
    'steps',
    'submenu',
    'submit',
    'switch',
    'table',
    'table-paste',
    'tab-pane',
    'tabs',
    'tag',
    'tag-select',
    'tag-select-option',
    'text',
    'time',
    'timeline',
    'timeline-item',
    'time-picker',
    'title',
    'tooltip',
    'transfer',
    'tree',
    'tree-select',
    'trend',
    'typography',
    'upload',
    'user-name',
    'word-count'
];

var matchComponents = /^anchor-|^breadcrumb-|^button-|^captcha$|^carousel-|^cell-|^checkbox-|^content$|^date-picker$|^description$|^dropdown-|^email$|^footer$|^form-|^grid-|^header$|^image-|^link$|^list-|^menu-|^mobile$|^notification-|^option$|^option-|^panel$|^paragraph$|^password$|^radio-|^sider$|^skeleton-|^step$|^submenu$|^submit$|^tab-pane$|^tag-select-|^text$|^time-picker$|^timeline-|^title$|^user-name$/;

function kebabCase(key) {
    var result = key.replace(/([A-Z])/g, ' $1').trim();
    return result.split(' ').join('-').toLowerCase();
}
function getSideEffects(componentName) {
    var sideEffects = ['view-ui-plus/dist/styles/viewuiplus.css'];
    if (/^poptip$|^tooltip$|^select$|^cascader$|^color-picker$|^date-picker$|^dropdown$|^menu$/.test(componentName)) {
        sideEffects.push('popper.js/dist/umd/popper.js');
    }
    if (/^table$|^slider$|^tab$|^grid$/.test(componentName)) {
        sideEffects.push('element-resize-detector');
    }
    if (componentName.startsWith('date-picker')) {
        sideEffects.push('js-calendar');
    }
    if (/^time$|^calendar$/.test(componentName)) {
        sideEffects.push('dayjs');
    }
    if (/^scroll$|^image-preview$|^grid$/.test(componentName)) {
        sideEffects.push('lodash.throttle');
    }
    if (componentName.startsWith('count-up')) {
        sideEffects.push('countup.js');
    }
    if (componentName.startsWith('numeral')) {
        sideEffects.push('numeral');
    }
    return sideEffects;
}
/**
 * Resolver for View UI Plus
 * Work with unplugin-vue-components
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.08.03
 */
function Index() {
    return {
        type: 'component',
        resolve: function (name) {
            var _n = kebabCase(name);
            if (name.match(/^[A-Z]/) && d.indexOf(_n) > -1) {
                var p = matchComponents.test(_n) ? _n : (_n + '/' + _n + '.vue');
                return {
                    from: "view-ui-plus/src/components/".concat(p),
                    sideEffects: getSideEffects(_n)
                };
            }
        }
    };
}

module.exports = Index;
