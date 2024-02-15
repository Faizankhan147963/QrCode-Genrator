let Genrate_btn = document.querySelector(".Genrate_btn");
let Download_btn = document.querySelector(".Download_btn");
let input_text = document.querySelector(".input_text");
let sizes = document.querySelector(".sizes");
let qr_body = document.querySelector(".qr_body");
let size = 0;

sizes.addEventListener("click", function () {
    size = sizes.value;
    console.log(size);
})


Genrate_btn.addEventListener("click", function (e) {
    e.preventDefault();
    qr_body.textContent = "";
    if (input_text.length <= 0) {
        alert("Enter Your Url")
    } else {
        Qr_code()
    }

})

function Qr_code() {
    new QRCode(qr_body, {
        text: input_text.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000000"
    })
}

Download_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let img = document.querySelector(".qr_body img")
    if (img !== null) {
        let imagaeatr = img.getAttribute("src");
        Download_btn.setAttribute("href", imagaeatr)
    }
})