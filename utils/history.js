// 这种方式可以让我在 component 外面(在action 里) navigate!
// 参考
// https://github.com/rackt/react-router/blob/master/docs/guides/advanced/NavigatingOutsideOfComponents.md

import createBrowserHistory from 'history/lib/createHashHistory';
export default createBrowserHistory();
