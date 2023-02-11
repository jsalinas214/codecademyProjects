const menu = {
   _meal: '',
   _price: 0,

   set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
         return this._meal = mealToCheck;
      }
   },

   set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
         return this._price = priceToCheck;
      }
   },

// step 9 & 10 of 11
   get todaysSpecial() {
      if (this._meal && this._price) {
         return `Today's Meal of the day is ${this._meal} for only ${this._price} dollars.`
      } else {
         return `Meal or price not set correctly!`
      }
   } 
};

// step 4 of 11.

// menu._meal = 8;
// menu._price = 'Pizza';
// console.log(menu)


// step 8 of 11.

// menu.meal = 'Pizza';
// menu.price = 8;


// step 11 of 11.

menu.meal = 'Pizza';
menu.price = 8;

console.log(menu.todaysSpecial);

