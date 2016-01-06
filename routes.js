/*同步加载所有代码*/
// import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/Main';
// import OneStock from './components/OneStock';
// import TagStocks from './components/OneStock/TagStocks'; //???
// import EventsTimeline from './components/OneStock/EventsTimeline';
// import BigMoneys from './components/OneStock/BigMoneys';
//
//
// export default (
//   <Route path="/" component={ App }>
//     <IndexRoute component={ Main } />
//     <Route path="oneStock/:_id" component={ OneStock } >
//       <Route path="eventsTimeline" component={ EventsTimeline } />
//       <Route path="tagStocks/:tag" component={ TagStocks } />
//       <Route path="bigMoneys" component={ BigMoneys } />
//     </Route>
//   </Route>
// );


/*lazy loading*/
// refs:
// https://github.com/webpack/webpack/tree/master/examples/code-splitting
// https://github.com/rackt/react-router/blob/master/docs/API.md#getcomponentscallback
// https://github.com/rackt/react-router/blob/master/examples/auth-with-shared-root/config/routes.js


// function getLazy(path) {
//   return (location, cb) => {
//     require.ensure([], (require) => {
//       cb(null, require(path));
//     });
//   };
// }

export default{
  path:'/',
  component: App,
  indexRoute: {
    component: Main,
  },
  childRoutes: [
    {
      path:'login',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Login'));
        });
      }
    },

    {
      path:'signup',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Signup'));
        });
      }
    },

    {
      path:'ChangePassword',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/ChangePassword'));
        });
      }
    },

    {
      path: 'oneStock/:_id',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/OneStock'));
        });
      },
      childRoutes: [
        {
          path: 'eventsTimeline',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/OneStock/EventsTimeline'));
            });
          }
        },
        {
          path: 'tagStocks/:tag',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/OneStock/TagStocks'));
            });
          }
        },
        {
          path: 'bigMoneys',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/OneStock/BigMoneys'));
            });
          }
        },
      ]
    },
  ]
};
