const emailregex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const email = "ronatkumarmuni42@gmail.com";
console.log(emailregex.test(email));
const email2= "ronat@mail";
console.log(emailregex.test(email2));