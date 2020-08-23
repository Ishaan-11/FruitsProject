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
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

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

/*  Fruit.updateOne({_id: "5f425779396a906c04680eb4"}, {name: "Peach"}, function(err) {
   if(err) {
     console.log(err);
   } else {
     console.log("Successfully updated!");
   }
 });  */

/*  Fruit.deleteOne({_id: "5f425779396a906c04680eb4"}, function(err) {
   if(err) {
    console.log(err);
  } else {
    console.log("Successfully deleted!");
  }
 }); */

/*  Person.deleteMany({name:"John"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully deleted!");
  }
 }); */