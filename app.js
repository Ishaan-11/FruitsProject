const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Why no Name?"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Apple",
  rating: 7,
  // rating: 34,
  review: "Pretty solid as a fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit!"
});

// pineapple.save();

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit."
});

// mango.save();

/* const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
}); */

// person.save();

Fruit.find(function(err, fruits) {
  if(err) {
    console.log(err);
  } else {
    // console.log(fruits);
    fruits.forEach(function(fruit) {
      mongoose.connection.close();
      console.log(fruit.name);
    });
  }
});

Person.updateOne({name: "John"},{favouriteFruit: mango}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated!");
  }
});
