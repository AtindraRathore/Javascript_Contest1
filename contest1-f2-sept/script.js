const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i in data){
    if(data[i].profession === "doveloper"){
      console.log(data[i]);
    }
  }
}

// 2. Add Data
function addData() {
 let newdata = prompt("Enter data:  "); 
 data.push(newdata);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i in data){
    if(data[i].profession === "admin"){
      delete data[i];
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  let newarr = [45,"Atindra"];
    newarr.push(data);
   console.log(newarr);
}

// 5. Average Age
function averageAge() {
 let sum=0;
 for(let i in data){
   sum+=data[i].age;
 }
 console.log(sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i in data){
    if(data[i].age > 25){
      console.log(data[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  for(let i in data){
    if(data[i].profession !== data[i+1].profession){
      console.log(data[i].profession);
    }
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort( (a,b)=>{
    return a.age-b.age;
  } )
}

// 9. Update Profession
function updateJohnsProfession() {
  for(i in data){
    if(data[i].name == "john"){
      data[i].profession = "manager";
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let count=0;
  for(i in data){
    if(data[i].profession){
      count+=1;
    }
  }
  console.log(count);
}
