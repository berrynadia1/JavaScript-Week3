// // var data;
// // (function PersonallyIdentifiableInformation(){
// function dataSecurity (){
// var pii = {
//     name: 'Latoya Jackson',
//     // dob: number(10/26/1972),
//     ssn: 777930011,
    

// };

//    return{ 
// getName: function (){
//     return pii.name;

// }
//    }

// };

// var d = dataSecurity();
// console.log(d.dataSecurity())


function PersonallyIdentifiableInformation (){
    let pii ={
        name: 'Latoya Jackson',
        ssn: 777930011,
    }
    return{
        getName: function (){
            return pii.name;
        }
    }
}
const p = PersonallyIdentifiableInformation();

console.log(p.getName())