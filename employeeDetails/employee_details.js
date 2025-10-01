// 数据
const employees = [
  { id: 1, name: 'John Doe',  age: 30, department: 'IT',     salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR',     salary: 45000 },
  { id: 3, name: 'Bob Johnson',  age: 35, department: 'Finance', salary: 60000 }
];

// 工具：渲染到页面
function setHTML(html) {
  document.getElementById('employeeDetails').innerHTML = html;
}

// 1) 显示所有员工
function displayEmployees() {
  const html = employees
    .map(e => `<p>${e.id}: ${e.name} — ${e.department} — $${e.salary}</p>`)
    .join('');
  setHTML(html);
}

// 2) 计算总薪资
function calculateTotalSalaries() {
  const total = employees.reduce((acc, e) => acc + e.salary, 0);
  alert(`Total Salaries: $${total}`);
}

// 3) 显示 HR 员工
function displayHREmployees() {
  const hrs = employees.filter(e => e.department === 'HR');
  const html = hrs.length
    ? hrs.map(e => `<p>${e.id}: ${e.name} — ${e.department} — $${e.salary}</p>`).join('')
    : '<p>No HR employees found.</p>';
  setHTML(html);
}

// 4) 按 ID 查找
function findEmployeeById(employeeId) {
  const found = employees.find(e => e.id === employeeId);
  const html = found
    ? `<p>${found.id}: ${found.name} — ${found.department} — $${found.salary}</p>`
    : '<p>No employee found.</p>';
  setHTML(html);
}
