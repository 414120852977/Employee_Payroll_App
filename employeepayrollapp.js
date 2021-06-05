/*JS code for slider*/
    const salary = document.querySelector('#salary');       
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function(){
            output.textContent = salary.value;
        });

        /*UC 10 Validating name*/
      /*JS code for the validation of name*/
      const text = document.querySelector('#name');       
        const textError = document.querySelector('.text-error');
        text.addEventListener('input',function(){
            /*Regex for name*/
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');      
            if(nameRegex.test(text.value))
                textError.textContent = "";
            else textError.textContent = "Name is incorrect";
        });    

        window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });


}); 