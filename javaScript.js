
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;

    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    get birthYear(){
        return new Date().getFullYear()-this.age;
    }

}


class Teacher extends User{
    constructor(firstName,lastName,age,group,yearsOfExperince){
        super(firstName,lastName,age);
        this.group=group;
        this.yearsOfExperince=yearsOfExperince;
    }
    isGroupTeacher(groupName){
        return this.group.includes(groupName);
    }
}
class Student extends User{
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;
    constructor(firstName,lastName,age,group,averageGrade){
        super(firstName,lastName,age);
        this.group=group;
        this.averageGrade=averageGrade;
    }
    isEligibleForScholarship(){
        return this.averageGrade>=Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}



const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4
