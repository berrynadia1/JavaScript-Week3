class person{
    constructor(name,job,age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function(){
        console.log(`I do not like running.`)
    }
    this.fetchJob = function(){
        console.log(`${name} is a ${job}. `)
    }
}
}
class programmer extends person{
    constructor(name,job,age, languages, busy = true) {
    super(name,job, age,)
    this.languages = languages;
    this.busy = busy;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy === true){
            console.log(`No can do!`)
        }else {
            console.log(`I can help!`)
        }
    }
    learnLanguage (){
        var i;
for(i = 0; i < arguments.length; i++ ){
this.languages.push(arguments[i]);
    }

}
listLanguages() {
    console.log(`${this.name} knows the following languages: ${this.languages.join()} .`)
}
}

const Lucille = new programmer('Nadia', 'Software Developer', 24, ['English'])
const Oshea = new programmer('Taylor', 'Graphic Designer', 23, ['English', 'Spanish'])
Lucille.offerNewTask();
Oshea.offerNewTask();
Lucille.completeTask();
Oshea.completeTask();
Lucille.offerNewTask();
Oshea.offerNewTask();
Lucille.listLanguages();
Oshea.listLanguages();
Lucille.learnLanguage('Spanish','Geechie');
Lucille.listLanguages();
Oshea.listLanguages();
Oshea.learnLanguage('French');










// person.prototype.getName = function(){

// }
// var nadia = new person('Nadia', 32);

// function programmer(name,age, languages){
//     this.languages = languages;
//     person.call(this,arguments)
// }
// programmer.prototype = object.create(Person.prototype)