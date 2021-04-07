class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;

    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents
        } else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }

    }
    quickFacts() {
        console.log(`${this.name} educates ${this._numberOfStudents} students at the at ${this._level}.`);
    }
    //static method. The method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array
    static pickSubstituteTeacher(substitueTeachers){
        let randomTeacher = Math.floor(substitueTeachers.length * Math.random() -1);
        return substitueTeachers[randomTeacher];
    }
}
//primary school class extends to School
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents); //super. Primary as the argument for the level
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy
    }
}
//High School class
class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeam(){
        this._sportsTeams = this.sportsTeams;
    }
}
//PrimarySchool instannce with following properties
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students mus be picked up by a parent, guardianm or a family memeber over the age of 13.')
//creating quickfacts on lorrainehnsbury
lorraineHansbury.quickFacts();
//call pickSubstitue on School and passing with following array
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

//creating new High School
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith);