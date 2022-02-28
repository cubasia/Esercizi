function createStore() {
  let Store = []
  
  function add(prodotto) {
  console.log("Start List");
    Store.push(prodotto)
    for (i = 0; i < Store.length; i++) {
      console.log(Store[i]);
    }
    console.log('End List')
  }
  
  return add
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);