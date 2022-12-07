function hack() {
    var x = document.querySelectorAll('input[value="4"]');
    var btnX = document.getElementById('Simpan');
    for(let i = 0; i < x.length; i++) {
        x[i].checked = true;
    }
    btnX.click();
}