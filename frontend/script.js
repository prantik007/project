
fetch('http://localhost:5000/api/employees')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('employee-list');
    list.innerHTML = data.map(emp => `<p>${emp.name} - ${emp.position}</p>`).join('');
  });
