/*function calculateAge() {
  const inputDate = parseInt(document.getElementById("day").value);
  const inputMonth = parseInt(document.getElementById("month").value);
  const inputYear = parseInt(document.getElementById("year").value);
  const dateElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const inputElements = document.querySelectorAll("#day, #month, #year").value;

  if (isNaN(inputDate) && isNaN(inputMonth) && isNaN(inputYear)) {
    dateElement.style.border = "1px solid red";
    monthElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
    alert("wrong input");
  } else if (isNaN(inputDate) && isNaN(inputYear)) {
    dateElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
  } else if (isNaN(inputMonth) && isNaN(inputDate)) {
    monthElement.style.border = "1px solid red";
    dateElement.style.border = "1px solid red";
  } else if (isNaN(inputMonth) && isNaN(inputYear)) {
    monthElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
  } else if (isNaN(inputDate) || inputDate <= 0) {
    dateElement.style.border = "1px solid red";
    if (inputDate > 31) {
      dateElement.style.border = "1px solid red";
    }
  } else if (isNaN(inputMonth) || inputMonth <= 0) {
    monthElement.style.border = "1px solid red";
  } else if (isNaN(inputYear) || inputYear <= 0) {
    yearElement.style.border = "1px solid red";
  } else {
    dateElement.style.border = "1px solid black";
    monthElement.style.border = "1px solid black";
    yearElement.style.border = "1px solid black";
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let birthDate = currentDate - inputDate;
    let birthMonth = currentMonth - inputMonth;
    let birthYear = currentYear - inputYear;

    if (birthMonth < 0 || (birthMonth === 0 && currentDate < inputDate)) {
      birthYear--;
      birthMonth += 12;
    } else {
      birthYear;
      birthMonth;
    }
  }
}*/

let isValid = false;

function calculateAge() {
  const inputDate = parseInt(document.getElementById("day").value);
  const inputMonth = parseInt(document.getElementById("month").value);
  const inputYear = parseInt(document.getElementById("year").value);
  const birthDateContainers = document.querySelectorAll(
    ".years, .months, .days"
  );
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let birthDate = currentDate - inputDate;
  let birthMonth = currentMonth - inputMonth;
  let birthYear = currentYear - inputYear;

  if (
    birthMonth < 0 ||
    (birthMonth === 0 && currentDate < inputDate) ||
    birthDate < 0
  ) {
    birthYear--;
    birthMonth += 12;
    birthDate += 30;
  } else {
    birthYear;
    birthMonth;
  }

  validateInput();

  if (isValid) {
    birthDateContainers[0].innerHTML = birthYear;
    birthDateContainers[1].innerHTML = birthMonth;
    birthDateContainers[2].innerHTML = birthDate;
  } else {
    birthDateContainers[0].innerHTML = initial;
    birthDateContainers[1].innerHTML = initial;
    birthDateContainers[2].innerHTML = initial;
  }
}

function validateInput() {
  const inputElements = document.querySelectorAll("#day, #month, #year");
  const labelElements = document.querySelectorAll(".label");
  const spanElements = document.querySelectorAll(".span");

  inputElements.forEach((element, index) => {
    if (!isNaN(element.value) && element.value > 0) {
      element.style.border = "1px solid black";
      spanElements[index].innerHTML = "";
      isValid = true;
    } else {
      element.style.border = "1px solid red";
      labelElements[index].style.color = "red";
      spanElements[index].innerHTML = "this field is required";
      spanElements[index].style.color = "red";
      isValid = false;
    }

    element.addEventListener("input", () => {
      if (!isNaN(element.value) && element.value > 0) {
        element.style.border = "1px solid black";
        labelElements[index].style.color = "initial";
        spanElements[index].innerHTML = "";
        isValid = true;
      } else {
        element.style.border = "1px solid red";
        labelElements[index].style.color = "red";
        spanElements[index].innerHTML = "this field is required";
        spanElements[index].style.color = "red";
        isValid = false;
      }
    });
  });

  /* element.addEventListener("input", () => {});
  if (element[0].value > 31) {
    spanElements[0].innerHTML = "must be a valid value";
  } else if (element[1].value > 12) {
    spanElements[1].innerHTML = "must be a valid value";
  } else if (element[2].value > 2023) {
    spanElements[2].innerHTML = "must be a valid value";
  }*/
}

/*function calculateAge() {
  const inputDate = parseInt(document.getElementById("day").value);
  const inputMonth = parseInt(document.getElementById("month").value);
  const inputYear = parseInt(document.getElementById("year").value);
  const dateElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  if (isNaN(inputDate) && isNaN(inputMonth) && isNaN(inputYear)) {
    dateElement.style.border = "1px solid red";
    monthElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
    alert("wrong input");
  } else if (isNaN(inputDate) && isNaN(inputYear)) {
    dateElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
  } else if (isNaN(inputMonth) && isNaN(inputDate)) {
    monthElement.style.border = "1px solid red";
    dateElement.style.border = "1px solid red";
  } else if (isNaN(inputMonth) && isNaN(inputYear)) {
    monthElement.style.border = "1px solid red";
    yearElement.style.border = "1px solid red";
  } else if (isNaN(inputDate)) {
    dateElement.style.border = "1px solid red";
  } else if (isNaN(inputMonth)) {
    monthElement.style.border = "1px solid red";
  } else if (isNaN(inputYear)) {
    yearElement.style.border = "1px solid red";
  } else {
    dateElement.style.border = "1px solid black";
    monthElement.style.border = "1px solid black";
    yearElement.style.border = "1px solid black";
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let birthDate = currentDate - inputDate;
    let birthMonth = currentMonth - inputMonth;
    let birthYear = currentYear - inputYear;

    if (birthMonth < 0 || (birthMonth === 0 && currentDate < inputDate)) {
      birthYear--;
      birthMonth += 12;
    } else {
      birthYear;
      birthMonth;
    }
  }
}

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  calculateAge();
});*/

/*if (inputDate == NaN || inputDate) {
 dateElement.style.border = "1px solid red"
  
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let birthDate = currentDate - inputDate;
    let birthMonth = currentMonth - inputMonth;
    let birthYear = currentYear - inputYear;

    if (birthMonth < 0 || (birthMonth === 0 && currentDate < inputDate)) {
      birthYear--;
      birthMonth += 12;
    } else {
      birthYear;
      birthMonth;
    }
  }
  alert(inputDate);
}*/
