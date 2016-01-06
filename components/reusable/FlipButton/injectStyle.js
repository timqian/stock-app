const CSS = `
/* for flip button */
  .react-tgl {
    display: none;
  }
  .react-tgl, .react-tgl:after, .react-tgl:before, .react-tgl *, .react-tgl *:after, .react-tgl *:before, .react-tgl + .react-tgl-btn {
    box-sizing: border-box;
  }
  .react-tgl::-moz-selection, .react-tgl:after::-moz-selection, .react-tgl:before::-moz-selection, .react-tgl *::-moz-selection, .react-tgl *:after::-moz-selection, .react-tgl *:before::-moz-selection, .react-tgl + .react-tgl-btn::-moz-selection {
    background: none;
  }
  .react-tgl::selection, .react-tgl:after::selection, .react-tgl:before::selection, .react-tgl *::selection, .react-tgl *:after::selection, .react-tgl *:before::selection, .react-tgl + .react-tgl-btn::selection {
    background: none;
  }
  .react-tgl + .react-tgl-btn {
    outline: 0;
    display: inline-block;
    width: 8.5em;
    height: 2em;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .react-tgl + .react-tgl-btn:after, .react-tgl + .react-tgl-btn:before {
    position: relative;
    display: inline-block;
    content: "";
    width: 50%;
    height: 100%;
  }
  .react-tgl + .react-tgl-btn:after {
    left: 0;
  }
  .react-tgl + .react-tgl-btn:before {
    display: none;
  }
  .react-tgl:checked + .react-tgl-btn:after {
    left: 50%;
  }

  .react-tgl-flip + .react-tgl-btn {
    padding: 2px;
    -webkit-transition: all .6s ease;
            transition: all .6s ease;
    font-family: sans-serif;
    -webkit-perspective: 100px;
            perspective: 100px;
  }
  .react-tgl-flip + .react-tgl-btn:after, .react-tgl-flip + .react-tgl-btn:before {
    display: inline-block;
    -webkit-transition: all .6s ease;
            transition: all .6s ease;
    width: 100%;
    text-align: center;
    position: absolute;
    line-height: 2em;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    border-radius: 4px;
  }
  .react-tgl-flip + .react-tgl-btn:after {
    content: attr(data-tg-on);
    background: rgb(32, 83, 146);
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
  .react-tgl-flip + .react-tgl-btn:before {
    background: rgb(32, 83, 146);
    content: attr(data-tg-off);
  }
  .react-tgl-flip + .react-tgl-btn:active:before {
    -webkit-transform: rotateY(-20deg);
            transform: rotateY(-20deg);
  }
  .react-tgl-flip:checked + .react-tgl-btn:before {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  .react-tgl-flip:checked + .react-tgl-btn:after {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    left: 0;
    background: rgb(32, 146, 83);
  }
  .react-tgl-flip:checked + .react-tgl-btn:active:after {
    -webkit-transform: rotateY(20deg);
            transform: rotateY(20deg);
  }
`;

export default function() {
  let style = document.getElementById('react-flipbutton-style');
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('id', 'react-flipbutton-style');
    const head = document.querySelector('head');
    head.insertBefore(style, head.firstChild);
  }
  style.innerHTML = CSS;
}
