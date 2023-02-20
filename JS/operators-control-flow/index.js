// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects. 
let bolatito = "artsStudent";
let scienceSubjects = ["Physics","Chemistry","Biology","Technical Drawing"];
let socialScienceSubjects = ["Accounting","Commerce","Marketing","Geography"];
let artsSubjects = ["Government", "Economics", "Literature", "History"];
let generalSubjects = ["English", "Mathematics"];
//Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 

if (bolatito === "artsStudent"){
    console.log("Your subjects are" + " "+ artsSubjects + " " + generalSubjects);
} else {
    console.log("Your subjects are" + " " + generalSubjects);
}


