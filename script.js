/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
 
    arr.map((ele)=>ele.marks >50 ?  console.log(ele) : "")
  
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  arr.forEach((ele)=>ele.marks >50 ?  console.log(ele) : "")
  //Write your code here , just console.log
}

function addData() {
 let data={
  id:4,
  name:"susan",
  age:"20",
  marks:45
 }
 arr.push(data)
  console.log(arr)
  //Write your code here, just console.log
}

function removeFailedStudent() {
  arr.forEach((ele)=>ele.marks >50 ?  console.log(ele) : "")
  //Write your code here, just console.log
}

function concatenateArray() {
  var student=[
     {
      id: 5,
      name: "Dhananjay",
      age: "22",
      marks: 88
     },
    {
      id: 6,
      name: "Vikarm",
      age: "21",
      marks: 90
    },
    {
      id: 7,
      name: "Pranit",
      age: "22",
      marks: 92

    }
  ]
  student.map((data)=>{
    return arr.push(data)
  })
  console.log(arr)
  //Write your code here, just console.log
}
