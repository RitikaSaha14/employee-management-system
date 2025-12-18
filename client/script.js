const API = "http://localhost:3000/employees";

function loadEmployees() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("list");
            list.innerHTML = "";
            data.forEach(emp => {
                list.innerHTML += `
                  <li>
                    ${emp.name} - ${emp.role} - ₹${emp.salary}
                    <button onclick="deleteEmp(${emp.id})">X</button>
                  </li>
                `;
            });
        });
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const salary = document.getElementById("salary").value;

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, salary })
    }).then(() => loadEmployees());
}

function deleteEmp(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(() => loadEmployees());
}

loadEmployees();
