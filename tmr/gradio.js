// the script was from
// https://gradio.s3-us-west-2.amazonaws.com/3.24.1/gradio.js

function make_script(src) {
    const script = document.createElement('script');
    script.type = 'module';
    script.setAttribute("crossorigin", "");
    script.src = src;
    document.head.appendChild(script);
}
// https://gradio.s3-us-west-2.amazonaws.com/3.24.1/assets/index.18ea9dc6.js
make_script("https://mathis.petrovich.fr/tmr/index.18ea9dc6.js");
