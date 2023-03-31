const phoneInput = document.querySelector("#Phone");
const value = document.querySelector('.p');
var phoneNumber;

phoneInput.addEventListener('input',(e)=>{
    phoneNumber = e.target.value;
    console.log(phoneNumber);

    if (!/^\d{0,10}?$/.test(phoneNumber)) {
        const para = document.querySelector('.p');
        para.setAttribute('id','para-close');
    }
});
