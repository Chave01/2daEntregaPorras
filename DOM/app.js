// ENTIDAD

 class datos {
    constructor (producto , precio , id) {

       this.producto = producto ;
       this.precio = precio;
       this.id = id;
       
   }
}

let selector1 = document.getElementById ("DOM")
let agregarItemID = document.getElementById ("agregaritem")


let agregaritem = []


//Constante

const listaProd = [];



const producto1 = new datos ("cafe", 1300, 1)
const producto2 = new datos ("miel", 2300, 2)
const producto3 = new datos ("box 1", 10300, 3)
const producto4 = new datos ("box 2", 7300, 4)
const producto5 = new datos ("box 3", 4300, 5)
const producto6 = new datos ("box 4", 6300, 6)





listaProd.push (producto1)
listaProd.push (producto2)
listaProd.push (producto3)
listaProd.push (producto4)
listaProd.push (producto5)
listaProd.push (producto6)


// Guardar mi info de productos en el storage 


let ObjtoJsonbox = JSON.stringify (listaProd);
localStorage.setItem (`listaProd`,ObjtoJsonbox)




// IMPRIMIR DATOS EN LA WEB

listaProd.forEach (e => {


   let div1 = document.createElement ("div") 

   let button1 = document.createElement ("button")
    
   
   button1.textContent = ("agregar")
  
   button1.addEventListener ('click',()=>{

      console.log(e);
      agregaritem.push (e)

      localStorage.setItem ("agregaritem", JSON.stringify(agregaritem))
      
      //imprimirCarrito ()
      
   
   })

   
   let p1 = document.createElement ("p")
   p1.textContent = e.producto 
   
   
   let p2 = document.createElement ("p")
   p2.textContent = e.precio
   
   
   
   div1.appendChild (p1)
   div1.appendChild (p2)
   
   selector1.appendChild (div1)
   selector1.appendChild (button1)
  
   
   })
   

   // IMPRIMIR MI CARRITO 


const imprimirCarrito = () => {


   let agregarGuardado= JSON.parse(localStorage.getItem ("agregaritem"))

   agregarGuardado.forEach (e => {

      agregarItemID.innerHTML = `


      <div class = > 
        <p> ${e.producto} <br></p>
        <p> ${e.precio} <br> </p>
    </div>
    `

   })

}
