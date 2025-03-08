//java script file running through html because it hah prompt() 
let a=Math.floor( Math.random()*3+1)
let b=Math.floor( Math.random()*3+1)
let c=Math.floor( Math.random()*3+1)
let d
let e=prompt("  1.engine\n2.food\ngarments")
let f
function generate() {
  
  if (a==1) {
    d=" crazy"
  }
  else if (a==2) {
     d=" amazing"
  }
  else if(a==3){
    d=" fire"
  }
  
  // if (b==1) {
  //   e=" engine"
  // }
  // else if (b==2) {
  //   e=" food"
  // }
  // else if(b==3){
  //   e=" garments"
  // }
  
  if (c==1) {
    f=" bros"
  }
  else if (c==2) {
     f=" limited"
  }
  else if(c==3){
     f=" hub"
  }
  console.log(d+e+f)
}
generate()




