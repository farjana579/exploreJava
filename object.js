//declare object
var student={id:10, phone:12345, name:"farjana"}
var student2={id:11, phone:66666,name:"tasmin"}
console.log(student)

//access a specific property
//first way
var stuName=student.name
console.log(stuName)
//second way
var stuPhone=student2["phone"]
console.log(stuPhone)
//thirdway
var stuPropId="id"
var stuId=student[stuPropId]
console.log(stuId)
//update an object property
console.log(student)
//first way
student.id=12
    console.log(student.id)
    //second way
    student2["phone"]=7777
    console.log(student2["phone"])
    //ceate a new property
    //first way
    student.adress="muradpur"
    console.log(student)
    //second way
    student["adress"]="chawkbazar"
    console.log(student)