const btn = document.getElementById('btn');
const date = document.getElementById('birthday');


function calculateAge(){
    const birthdayValue = date.value;
    if(birthdayValue === ""){
        alert('Please enter a birthday');
    }else{
        const age = getAge(birthdayValue);
        
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    console.log(currentDate.getFullYear());
}

btn.addEventListener('click',calculateAge)