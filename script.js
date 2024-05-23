function saveText() {
    const text = document.getElementById('editor').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'textfile.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none'; // Not to display the anchor element
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function clearText() {
    document.getElementById('editor').value = '';
}
