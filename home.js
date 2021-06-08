
//declare global variable for employee payroll list
let employeePayrollList; 
window.addEventListener('DOMContentLoaded', (event) => {
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
    if (employeePayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;

    for  ( const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
         <tr>
             <td>
                 <img class="profile" alt="" src="${employeePayrollData._profilePic}" alt="">
             </td>
             <td>${employeePayrollData._name}</td>
             <td>${employeePayrollData._gender}</td>
             <td>${getDeptHtml(employeePayrollData._department)}</td>
             <td>${employeePayrollData._salary}</td>
             <td>${employeePayrollData._startDate}</td>
             
             <td> 
                <img id="${employeePayrollData._id}" onclick ="remove(this)" src="C:\Users\ashok\Downloads\javascriptProgramming\Employee_PayRoll_App\svgimage\create-black-18dp.svg"  alt="delete" >
                 <img id="${employeePayrollData._id}" onclick="update(this)" src="C:\Users\ashok\Downloads\javascriptProgramming\Employee_PayRoll_App\svgimage\delete-black-18dp.svg" alt="Edit"  >
             </td>
             
         </tr>
        `;
    }
     document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
    }
    return deptHtml;
}


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


const update = (node) => {
    let employeePayrollData = employeePayrollList.find(empData=>empData._id == node.id);
    if (!employeePayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(employeePayrollData));
    window.location.replace(site_properties.add_employee_payroll_page);    
} 