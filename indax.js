/* Javascript Crud App */

/* DataForm Add , Remove , Delete */

document.addEventListener('DOMContentLoaded' , () => {
    const addForm = document.getElementById('AddForm')
    const editForm = document.getElementById('EditForm')
    const studentTable = document.querySelector('.student-table')

    let students = [];
    
    let editIndex  = -1;
    
    addForm.addEventListener('submit' , (e) => {
      e.preventDefault();
      const newStudent = {
        name:addForm.studen-tname.value,
        age:addForm.student-age.value,
        email:addForm.student-email.value,
        phoneno:addForm.student-phoneno.value,
        address:addForm.student-address.value,
      };
      students.push(newStudent)
      addForm.reset()
      renderTable();
    })
    
    editForm.addEventListener('submit' , (e) => {
      e.preventDefault();
      const updateStudent = {
        name:editForm.studentedit-name.value,
        age:editForm.studentedit-age.value,
        email:editForm.studentedit-email.value,
        phoneno:editForm.studentedit-phoneno.value,
        address:editForm.studentedit-address.value
      };
      students[editIndex] = updateStudent;
      editIndex = -1
      editForm.reset()
      renderTable()
    })
    
    const renderTable = () => {
      const tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phoneno</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${students.map((student , index) => `
                <tr>
                  <td>${student.name}</td>
                  <td>${student.age}</td>
                  <td>${student.email}</td>
                  <td>${student.phoneno}</td>
                  <td>${student.address}</td>
                  <td>
                    <button onclick='editStudent(${index})'>Edit</button>
                    <button onclick='deleteStudent(${index})'>Delete</button>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      `;
      studentTable.innerHTML  = tableHTML;
    }
    
    window.editStudent  = (index) => {
      editIndex = index;
      const student = students[index];
      editForm.studentEditName.value = student.name
      editForm.studentEditAge.value = student.Age
      editForm.studentEditEmail.value = student.Email
      editForm.studentEditPhoneNo.value = student.Phoneno
      editForm.studentEditAddress.value = student.Address
    }
    
    window.deleteStudent = (index) => {
      students.splice(index , 1);
      renderTable();
    }
  })
  
  
  
  