const div1 = document.getElementById("about");
const div2 = document.getElementById("education");
const div3 = document.getElementById("portfolio");
const div4 = document.getElementById("skills");
const div5 = document.getElementById("contact");

//console logs
console.log("About Section:", div1);
console.log("Education Section:", div2);
console.log("Portfolio Section:", div3);
console.log("Skills Section:", div4);
console.log("Contact Section:", div5);

// script.js
const StudentjsonURL = "https://raw.githubusercontent.com/empleomonicaamelia03-commits/html/main/students.json";

fetch(StudentjsonURL)
    .then(response => response.json())
    .then(data => {
        let studentList = document.getElementById("student-list");

        if (data.students && Array.isArray(data.students)) {
            data.students.forEach(student => {
                let listItem = document.createElement("li");
                listItem.textContent = `${student.name} - ${student.age} (Course: ${student.course})`;
                studentList.appendChild(listItem);
            });
        } else {
            console.error("Expected 'students' array but got:", data);
        }
    })
    .catch(error => console.error("Error fetching Students:", error));

const CoursesjsonURL = "https://raw.githubusercontent.com/empleomonicaamelia03-commits/html/main/courses.json";

fetch(CoursesjsonURL)
    .then(response => response.json())
    .then(data => {
        let courseList = document.getElementById("course-list");

        if (data.courses && Array.isArray(data.courses)) {
            data.courses.forEach(course => {
                let listItem = document.createElement("li");
                listItem.textContent = `${course.year_level} - ${course.sem} - ${course.code} - ${course.description} (Credit: ${course.credit})`;
                courseList.appendChild(listItem);
            });
        } else {
            console.error("Expected 'courses' array but got:", data);
        }
    })
    .catch(error => console.error("Error fetching Courses:", error));