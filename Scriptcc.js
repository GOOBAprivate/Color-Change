/*==========================
=  mejor orden del codigo   =
  ==========================*/
console.log("hola maldito mundo");


// declaré la funcion primero, pero no importa, puedes declararla abajo y no pasa nada.
const getColor = function () {
  const rndColor = "0123456789ABCDEF"
  let colorID = "#"
  for (let i = 0; i < 6; i++) {
    colorID += rndColor[Math.floor(Math.random() * 16)];
  }
  return colorID;

}
/*==========================
=        boton1            =
  ==========================*/


const colorBackground = document.getElementById("color-buttom")
// se crea un evento click con una funciona anonima.
colorBackground.addEventListener("click", function () {
  document.body.style.backgroundColor = getColor()

})


/*==========================
=        boton2            =
  ==========================*/

//aqui ya solo se llama a la funcion 
const colorTextContent = document.querySelector(".tockTock")

colorTextContent.addEventListener("click", function () {
  document.body.style.color = getColor()
})


/*==========================
=        boton3             =
  ==========================*/

const promptBtn = document.querySelector(".input")


const inputColor = function () {
  let text = prompt("Send Color")
  if (text) {
    document.body.style.backgroundColor = text
  } else {
    alert("is not a color");
  }

}


const byColor = function (text) {
  document.style.backgroundColor = text
  return text
}


promptBtn.addEventListener("click", inputColor)


