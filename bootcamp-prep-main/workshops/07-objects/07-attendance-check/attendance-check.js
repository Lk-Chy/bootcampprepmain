// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```


let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

function attendanceCheck(day) {
  let result = [];

  for (let i = 0; i < classRoom.length; i++) {
    let studentObj = classRoom[i];
    let studentName = Object.keys(studentObj)[0]; // e.g., "Marnie"
    let attendanceArray = studentObj[studentName]; // the array of days

    for (let j = 0; j < attendanceArray.length; j++) {
      let dayRecord = attendanceArray[j]; // e.g., { Monday: true }

      if (day in dayRecord && dayRecord[day] === true) {
        result.push(studentName);
        break; // no need to check more days for this student
      }
    }
  }

  return result;
}

















// function attendanceCheck(day){
// let result = [];

//     for(let i=0; i<classRoom.length;i++){
//         let studentobj = classRoom[i];
//         let studentname = Object.keys(studentobj)[0];
//         let attendancearray = studentobj[studentname];
//         for(let days in student){
//             if(days === day){
//                 result.push(student);
//             }
//         }

//     }
// return result;

// }