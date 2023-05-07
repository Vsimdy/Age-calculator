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
}
