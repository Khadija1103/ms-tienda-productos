
//NOMBRE


//EJERCICIO NOMBRE

const formcontacto=document.querySelector('#frmvalidacion3')
const fecontacto=document.querySelector('#camponombres .feedback')

const nombres=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\s]{5,25}$/

formcontacto.nombres.addEventListener('input', e =>{
e.preventDefault()

if(nombres.test(e.target.value)){
formcontacto.nombres.setAttribute("class","success")
fecontacto.textContent=""
fecontacto.style.setProperty("visibility","hidden")
fecontacto.style.setProperty("opacity","0")

}

else{
formcontacto.nombres.setAttribute("class","error")
fecontacto.textContent="Entre 5 y 25 caracteres, no números ni caracteres especiales"
fecontacto.style.setProperty("visibility","visible")
fecontacto.style.setProperty("opacity","1")

}


})



//CAMPO TELEFONO:

const formcontactotel=document.querySelector('#frmvalidacion3')
const fetelefono=document.querySelector('#campotelefono .feedback')

const telefono=/^[0-9]{5,15}$/

formcontactotel.telefono1.addEventListener('input', e =>{
e.preventDefault()

if(telefono.test(e.target.value)){
formcontactotel.telefono1.setAttribute("class","success")
fetelefono.textContent=""
fetelefono.style.setProperty("visibility","hidden")
fetelefono.style.setProperty("opacity","0")

}
else{
formcontactotel.telefono1.setAttribute("class","error")
fetelefono.textContent="El valor no es numérico y/o no tiene entre 5 y 15 caracteres"
fetelefono.style.setProperty("visibility","visible")
fetelefono.style.setProperty("opacity","1")
}

})


//CAMPO  CORREO ELECTRONICO

//QUERY SELECTOR DA ACCESO EN ESE CASO A TODOS LOS INPUT DEL FORM
const formcorreo=document.querySelector('#frmvalidacion3')
const fecorreo=document.querySelector('#campocorreo .feedback')


const correo1=/^[A-Za-z0-9_.-]+@\w+\.[a-zA-z]+\.?[a-zA-z]+/

formcontacto.correo.addEventListener('input', e =>{
e.preventDefault()

if(correo1.test(e.target.value)){
formcorreo.correo1.setAttribute("class","success")
fecorreo.textContent=""
fecorreo.style.setProperty("visibility","hidden")
fecorreo.style.setProperty("opacity","0")

}
else{
formcorreo.correo1.setAttribute("class","error")
fecorreo.textContent="Valor no valido para correo electrónico"
fecorreo.style.setProperty("visibility","visible")
fecorreo.style.setProperty("opacity","1")
}

})



//SOLICITUD

formcontacto.addEventListener("submit", e=>{
e.preventDefault()
let nombres=document.getElementById("nombres").value
let telefono1=document.getElementById("telefono1").value
let correo=document.getElementById("correo").value
let asunto=document.getElementById("asunto").value
let mensaje=document.getElementById("mensaje").value



 if(nombres==0){
	alert("El nombre debe ser diligenciado")
	document.formulario.nombres.focus()
}


else if(telefono1==0){
	alert("El teléfono debe ser diligenciado")
	document.formulario.telefono1.focus()
}

else if (correo==0){
	alert("El correo electronico debe ser diligenciado")
	document.formulario.correo.focus()
}

else if (asunto==0){
	alert("Diligencie el motivo de su mensaje")
	document.formulario.asunto.focus()
}

else if (mensaje==0){
	alert("Por favor déjenos su mensaje ó sugerencia")
	document.formulario.mensaje.focus()
}

else{
	formcontacto.submit()
	alert("Gracias por comunicarse en breve nos contactaremos con usted.")
}
})

