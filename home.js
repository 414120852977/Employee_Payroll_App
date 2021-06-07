window.addEventListener('DOMContentLoaded', () => {
    employeePayrollList = getEmployeePayrollDataFromLocalStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
    localStorage.removeItem('editEmp');
});
//get Employee Data from local storage
const getEmployeePayrollDataFromLocalStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [] ;
}


//Template literal ES6 feature 
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();

    for  ( const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
         <tr>
             <td>
                 <img class="profile" alt="" src="${employeePayrollData._profilePic}">
             </td>
             <td>${employeePayrollData._name}</td>
             <td>${employeePayrollData._gender}</td>
             <td>${getDeptHtml(employeePayrollData._department)}</td>
             <td>${employeePayrollData._salary}</td>
             <td>${employeePayrollData._startDate}</td>
             <td> 
                <img id="${employeePayrollData._id}" onclick ="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                 <img id="${employeePayrollData._id}" alt="Edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
             </td>
         </tr>
         `;
    }
     document.querySelector('#table-display').innerHTML=innerHtml;
}

//populate all department from department list
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

//create Employee Payroll JSON objects
const createEmployeePayrollJSON = () => {
    let employeePayrollList = [
        {
            _name : 'Ashok Mane',
            _gender : 'Male',
            _department : ['Engineering' ,
                           'HR'],
            _salary : '4000000',
            _startDate : '12 Oct 2019',
            _note : '',
            _id : new Date().getTime(),
            _profilePic : 'C:\Users\ashok\Downloads\javascriptProgramming\Employee_PayRoll_App\male.jfif'
        },
        {
            _name : 'vaibhav wankhede',
            _gender : 'Male',
            _department : ['HR' ,
                           'Finance'],
            _salary : '3500000',
            _startDate : '14 Nov 2019',
            _note : '',
            _id : new Date().getTime() + 1,
            _profilePic : 'C:\Users\ashok\Downloads\javascriptProgramming\Employee_PayRoll_App\male.jfif'
        }
    ];
    return employeePayrollList;
}

/ remove employee details from payroll list
const remove = (node)=> {
    let employeePayrollData = employeePayrollList.find(empData=>empData._id == node.id);
    if (!employeePayrollData) return;
    const index = employeePayrollList
                  .map(empData=>empData._id)
                  .indexOf(employeePayrollData._id);
    employeePayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
} 

//update employee details 
const update = (node) => {
    let employeePayrollData = employeePayrollList.find(empData=>empData._id == node.id);
    if (!employeePayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(employeePayrollData));
    window.location.replace(site_properties.add_employee_payroll_page);    
} 