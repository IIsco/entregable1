class productManager {
    
  constructor (){
      this.products = [];
  } // llave del constructor. 
  getproducts = () => {// el getproduct es para ver la lista del array products.
      console.log(this.products); // para mostrar en la consola el array vacio.
      return;
    }; // llave de la funcion flecha 

  addProduct = () => {
      const product = {

          id: this.products.length + 1, // que valla auto incrementando.
          title: "producto prueba",
          descripcion: "Este es un producto prueba",
          price: 200,
          thumbnail: "sin imagen",
          code:"abc123",
          stock:25,

      };
      const productoRepetido = this.products.find((product) => product.code === product.code);
      if(!productoRepetido){

          this.products.push(product); // es una accion lo que va hacer el evento y lo va aguardar en el array 
  
      }else{
          console.log("I won't add, code reapeated. "); 

      }
  

  };

  getProductById = (productId) => {// funcion que permite verificar si hay un id para el producto.
      const buscarIdIndex = this.products.findIndex((product) => product.id === productId); // devuelve siempre 0 si es positivo y -1 si es negativo
      const mostrarProducts = this.products.find((product) => product.id === productId);// devuelve el producto que coincida con el id.

      if (buscarIdIndex === -1) {

          console.log(`not found`);
          return;

      }else {
          console.log(mostrarProducts);
      }

  };

}
const Manager = new productManager();
Manager.addProduct(); // agrega el prooducto 
Manager.getproducts(); // te muestra el producta 
Manager.addProduct(); // no puede agregar porque ya tiene es codigo igual 
Manager.getProductById(1); // existe 1 
Manager.getProductById(2); // no existe 2

