let qrcode = new QRCode("qrcode", {
    width: 210,
    height: 210,
    colorDark: '#282828',
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H
});

function makeCode() {
    let elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    qrcode.makeCode(elText.value);
}
makeCode();

document.querySelector(".make-btn").addEventListener("click", makeCode);

document.querySelector('#text').addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});