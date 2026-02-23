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
const jsonURL = "https://raw.githubusercontent.com/empleomonicaamelia03-commits/html/main/students.json";

fetch(jsonURL)
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
    .catch(error => console.error("Error fetching JSON:", error));