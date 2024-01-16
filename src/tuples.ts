// // defining tuple
// type PersonInfo=readonly[string,number,boolean];

// //example usage
// const person1:PersonInfo=['vinod',22,true];
// const person2:PersonInfo=['thapa',18,false];

// //function to display personInfo
// const displayPersonInfo:(person:PersonInfo)=>void=(person:PersonInfo)=>{
//     const [name,age,hasDrivingLicence]=person;
//     console.log(`name:${name} , age:${age} ,driverLicence:${hasDrivingLicence?"yes":"no"}`);
// }

// displayPersonInfo(person1);
// displayPersonInfo(person2);


// //productInfo
// type ProductInfo=readonly[string,number,number];

// const product1:ProductInfo=['lays',10,6];
// const product2:ProductInfo=['kurkurey',5,9];

// const displayProductInfo:(product:ProductInfo)=>void=(product:ProductInfo)=>{
//     const [pname , price, stock]=product;
//     console.log(`name of product is:${pname} price is:${price} quantity is${stock}`);

// }

// displayProductInfo(product1);
// displayProductInfo(product2);

//subjectGrade
// Define the SubjectGrade tuple
class SubjectGrade {
    constructor(public subject: string, public grade: number) {}
  }
  
  // Create an array of SubjectGrade tuples for a student
  const studentGrades: SubjectGrade[] = [
    new SubjectGrade("Math", 90),
    new SubjectGrade("English", 85),
    new SubjectGrade("Science", 92),
  ];
  
  // Function to calculate overall grade
  function calculateOverallGrade(grades: SubjectGrade[]): number {
    // Assuming equal weight for all subjects
    const totalGrades = grades.reduce((total, subject) => total + subject.grade, 0);
    const averageGrade = totalGrades / grades.length;
    return averageGrade;
  }
  
  // Calculate overall grade for the student
  const overallGrade: number = calculateOverallGrade(studentGrades);
  
  // Display the results
  console.log("Student Grades:");
  studentGrades.forEach(subject => {
    console.log(`${subject.subject}: ${subject.grade}`);
  });
  
  console.log("\nOverall Grade: " + overallGrade);


//  