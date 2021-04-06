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
}