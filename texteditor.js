const ta = document.getElementById('textArea');
const styling = document.getElementById('styling');
console.log(styling);

ta.contentEditable = 'true';

styling.addEventListener('click', (e) => {
    console.log(e.target.id);
    switch (e.target.id){
        case 'bold': document.execCommand('bold');
        break;
        case 'italic': document.execCommand('italic');
        break;
        case 'underline': document.execCommand('underline');
        break;
        case 'left': document.execCommand('justifyLeft');
        break;
        case 'center': document.execCommand('justifyCenter');
        break;
        case 'right': document.execCommand('justifyRight');
        break;
        case 'font': document.execCommand('backColor', false, 'yellow');
        break;
        case 'undo': document.execCommand('undo');
        break;
    }
});

const load = document.getElementById('load');
load.addEventListener('change', loadFile, false);

let products = [];

function loadFile(e){
    const file = e.target.files[0];
    if (!file)
        return;
    var reader = new FileReader();
    reader.onload = (e) => {
        var contents = e.target.result;
        ta.innerHTML = contents;
    };
    reader.readAsText(file);
}

function clearText(){
    ta.innerHTML = "";
}

function download(filename, text){
    const el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    el.setAttribute('download', filename);

    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}

