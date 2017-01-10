require('./accordion/accordion');
require('./crumb/crumb');
require('./login/login');
require('./loginV2/login');
require('./pagination/pagination');
require('./tab/tab');
require('./scroll/scroll');

angular.module('jmui', ['jmui.accordion', 'jmui.crumbs', 'jmui.login', 'jmui.loginV2', 'jmui.pagination', 'jmui.tab', 'jmui.scroll'])
    .value('version', '0.1');