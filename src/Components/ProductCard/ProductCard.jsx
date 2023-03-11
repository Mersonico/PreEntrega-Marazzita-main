import "./ProductCard.css"

const ProductCard = ( {title, price=0, isRed, login} ) => {


  const saludar = (  )=>{
    console.log("hola ")
  }

  const saludo2 = ( nombre )=>{
    console.log("hola " + nombre )
  }

  
  return (
    <div>
        <h1 className={ isRed ? "red" : "blue" }> {title} </h1>
        <h2> {price} </h2>
        <button onClick={saludar}>Saludar</button>
        <button onClick={ ()=> saludo2("xxxxx") }>Saludar dos</button>
        <button onClick={login}>Ingresar</button>
    </div>
  )
}

export default ProductCard