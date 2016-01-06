// because timeline3 does not support npm install

export default function() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href',
    'http://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css');

  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src',
    'http://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js');

  const head = document.querySelector('head');
  head.appendChild(link);
  head.appendChild(script);
}
