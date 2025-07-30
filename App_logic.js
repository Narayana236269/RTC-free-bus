const prodacces = document.getElementById("prodgroup");

const cartcontainer = document.getElementById("cartdata");
const feedback = document.getElementById("feedback");
var prodlist = [
  { id: 1, name: "laptop", price: 50000 },
  {
    id: 2,
    name: "iphone-16",
    price: 150000,
  },
  {
    id: 3,
    name: "JBL soundBar",
    price: 25000,
  },
  {
    id: 4,
    name: "Watch",
    price: 10000,
  },
  {
    id: 5,
    name: "Earbuds",
    price: 5000,
  },
  {
    id: 6,
    name: "Cloths",
    price: 7000,
  },
  {
    id: 7,
    name: "mac",
    price: 40000,
  },
  {
    id: 8,
    name: "shoee",
    price: 4000,
  },
];

var mycart = [];

// const [name, price] = prodlist;
prodlist.forEach(function (product) {
  const statement = `
  <div id="productslist">
   <p>${product.name}.${product.price}</p>
       <button onclick="testfun(${product.id})">Add to cart</button>
       </div>`;
  prodacces.insertAdjacentHTML("beforeend", statement);
  // ------------------------------------------
  // const divele = document.createElement("div");
  // divele.id = "productslist";
  // divele.innerHTML = ` <p>${product.name}.${product.price}</p>
  //   <button>Add to cart</button>
  //   </div>`;
  // prodacces.appendChild(divele);
});
let testfun = function (input) {
  console.log(input);
  //check if the product is available
  const prodavailable = mycart.some(function (input1) {
    return input1.id === input;
  });
  console.log(prodavailable);
  console.log(mycart);
  if (prodavailable) {
    message(`<b> Already Added to the cart`, "fail");
    return;
  }
  let prodadd = prodlist.find(function (productinput) {
    return productinput.id === input;
  });
  // console.log(prodadd);
  mycart.push(prodadd);
  // console.log(mycart);

  const cartitemsrow = `
     <div id="productslist">
          <p>${prodadd.name}.${prodadd.price}</p>
        <button>Remove</button>  
        </div>
  `;
  cartcontainer.insertAdjacentHTML("beforeend", cartitemsrow);

  // feedback.innerHTML = `<b>${prodadd.name} Added to the cart`;
  message(`  <b> ${prodadd.name} Added to the cart`, "sucess");
};
function message(msg, status) {
  if (status === "sucess") {
    feedback.style.background = "blue";
  } else {
    feedback.style.background = "red ";
  }
  feedback.innerHTML = msg;
}
