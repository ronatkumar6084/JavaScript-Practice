let map = new Map();
map.set("Ronat","Java"); //.set() to add 
map.set("Susil","Python");
map.set("Biraj","JS");
map.set("Susil","Machine Learning")
console.log(map.keys()); //.key() to get all the keys
console.log(map.has("Susil"));//.has() to check is present or not in map
console.log(map.get("Biraj"));//.get() to get the value of key

for(let [k,v] of map){
    console.log(k," : ",v);
}