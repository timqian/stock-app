import { createHistory } from 'history';

let history = createHistory();

// Listen for changes to the current location. The
// listener is called once immediately.
let unlisten = history.listen(location => {
  console.log(location.pathname);
});

history.pushState({ the: 'state' }, '/the/path?a=query');

// When you're finished, stop the listener.
unlisten();
