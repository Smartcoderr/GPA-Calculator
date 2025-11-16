function addCourse() {
  const container = document.getElementById("course-container");
  const row = document.createElement("div");
  row.classList.add("course-row");

  row.innerHTML = `
    <input type="text" placeholder="Course Code" class="course">
    <input type="number" placeholder="Unit" class="unit">
    <select class="grade">
      <option value="5">A</option>
      <option value="4">B</option>
      <option value="3">C</option>
      <option value="2">D</option>
      <option value="1">E</option>
      <option value="0">F</option>
    </select>
  `;
  container.appendChild(row);
}

function calculateCGPA() {
  const units = document.querySelectorAll(".unit");
  const grades = document.querySelectorAll(".grade");

  let totalUnits = 0;
  let totalPoints = 0;

  units.forEach((unit, index) => {
    const courseUnit = parseFloat(unit.value);
    const gradePoint = parseFloat(grades[index].value);

    if (courseUnit > 0) {
      totalUnits += courseUnit;
      totalPoints += courseUnit * gradePoint;
    }
  });

  if (totalUnits === 0) {
    document.getElementById("result").innerText = "Please enter valid course units.";
    return;
  }

  const cgpa = (totalPoints / totalUnits).toFixed(2);
  document.getElementById("result").innerText = "Your CGPA is: " + cgpa;
}

function resetForm() {
  document.getElementById("course-container").innerHTML = `
    <div class="course-row">
      <input type="text" placeholder="Course Code" class="course">
      <input type="number" placeholder="Unit" class="unit">
      <select class="grade">
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
      </select>
    </div>
  `;

  document.getElementById("result").innerText = "Your CGPA will appear here";
}
