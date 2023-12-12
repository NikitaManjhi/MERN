/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let l = [];
  let n = transactions.length;
  for (let i = 0; i < n; i++) {
    let obj = {};
    let c = transactions[i].category;
    let p = transactions[i].price;
    let index = check(l, c);
    if (index >= 0) {
      l[index].totalSpent += p;
    } else {
      obj.category = c;
      obj.totalSpent = p;
      l.push(obj);
    }
  }
  return l;
}


function check(list,category){
  let size = list.length;
  for(let i=0;i<size;i++){
      if(list[i].category===category){
          return i;
      }
  }
  return -1;
}

module.exports = calculateTotalSpentByCategory;
