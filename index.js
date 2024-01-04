let gen = document.querySelector(".btn-gen")
let pass1 = document.querySelector(".p-1")
let pass2 = document.querySelector(".p-2")
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passLen = document.querySelector('.pass-length').value


gen.addEventListener('click', function () {
    let passLen = document.querySelector('.pass-length')
    let p1 = ''
    let p2 = ''
    for (i = 0; i < passLen.value; i++) {
        index1 = Math.floor(Math.random() * characters.length)
        index2 = Math.floor(Math.random() * characters.length)
        p1 += characters[index1]
        p2 += characters[index2]
    }
    pass1.textContent = p1
    pass2.textContent = p2
    passLen.value = ''
})

