// Fungsi untuk membaca isi input dan mengembalikan objek data
function handleGetFormData() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

// Fungsi untuk memeriksa apakah sebuah string hanya mengandung angka
function isNumber(inputString) {
    return !isNaN(inputString)
}

// Fungsi untuk memeriksa apakah checkbox dengan id "status" dicentang
function checkboxIsChecked() {
    return handleGetFormData().status
}

// Fungsi untuk memvalidasi objek data
function validateFormData(formData) {
    if (
        formData.name !== "" &&
        formData.city !== "" &&
        formData.email !== "" &&
        formData.zipCode !== "" &&
        isNumber(formData.zipCode) == true &&
        checkboxIsChecked() == true
    )   { return true; } 
    else { return false; }  
  
}


// Fungsi untuk menghandle proses submit
function submit() {
    if (validateFormData(handleGetFormData()) == false) {
      return (warning.innerHTML = "Periksa form anda sekali lagi");
    } else {
    warning.innerHTML = "";
    console.log('Data yang diisi pada form:', handleGetFormData());
    }
}
  
let submitData = document.getElementById('submit-form')
    submitData.addEventListener("click", (event) => {
    event.preventDefault();
    submit();
    });