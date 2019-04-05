
const products = require('../products.json')

// const getProducts = (req, res) => {
//   res.status(200).send(products);
// }

function getProdByPrice(req, res) {
  if(req.query.price){
  const items = products.filter(product=> +product.price >= +req.query.price);
  return res.status(200).send(items);
}
return res.status(200).send(products);
}

module.exports = getProdByPrice;

