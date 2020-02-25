const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  

//Function #1
const getSubjects = (student) => {
    const studiedSubjects = Object.keys(student.subjects);
    const studentSubjects = studiedSubjects.map(function(name) {
        let nameOfSubjects = name.split("_").join(" ");
        return nameOfSubjects.slice(0,1).toUpperCase() + nameOfSubjects.slice(1).toLowerCase();
    });
    return studentSubjects;
}; 
console.log('Function # 1:',getSubjects(students[0]));


//Function #2
const getAverageMark = (student) => {
    const marks = Object.values(student.subjects).flat();
    return (marks.reduce((sum, mark) => {
      sum += mark;
      return sum;
  }, 0) / marks.length).toFixed(2);
};
console.log('Function # 2:',getAverageMark(students[0]));

//Function #3
 const getStudentInfo = (student) => {
    const {course, name} = student;
    const studentInfo = { 
        course, 
        name,
      averageMark: getAverageMark(student),
  };
  return studentInfo;
 };
console.log('Function # 3:',getStudentInfo(students[0]));

//Function #4
const getStudentsNames  = (students) => {
    return students.map((obj, i) => students[i].name).sort();
};
console.log('Function # 4:',getStudentsNames(students));

//Function #5
const getBestStudent = (student) => {
   const bestStudent = student.reduce((previousValue, currentValue) => {
       return getAverageMark(previousValue) > getAverageMark(currentValue) ? previousValue : currentValue
   });
   return bestStudent.name;
};
console.log('Function # 5:',getBestStudent(students));

//Function #6
const calculateWordLetters = (str) => {
    const countLetters = {};
    for ( let i = 0; i< str.length; i++) {
        str[i] in countLetters ? countLetters [str[i]] +=1 : countLetters[str[i]] = 1;
    }
    return countLetters;
};
console.log('Function # 6:', calculateWordLetters("тест"));

