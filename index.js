// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDriver = [...drivers, name]
  return newDriver;
}

function prependDriver(name){
  let newDriver = [name, ...drivers]
  return newDriver;
}

function removeLastDriver(){
  let newDrivers = drivers
  slice(0, days.length - 1);
}
