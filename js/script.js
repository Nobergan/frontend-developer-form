const techVersionsData = {
  angular: ["1.1.1", "1.2.1", "1.3.3"],
  react: ["2.1.2", "3.2.4", "4.3.1"],
  vue: ["3.3.1", "5.2.1", "5.1.3"],
};

const techVersions = Object.assign(techVersionsData);

// console.log(techVersions);

// Выводит JSON на экран

const formInputRefs = document.querySelectorAll("[data-input]");
const btnRef = document.querySelector(".btn-primary");
const jsonRef = document.querySelector(".json");

btnRef.addEventListener("click", function () {
  event.preventDefault();

  let inputArray = [];
  formInputRefs.forEach((input) =>
    inputArray.push(`${input.id}: ${input.value}`)
  );

  console.log(inputArray);

  const myJson = Object.assign({}, inputArray);

  jsonRef.append(myJson);
  console.log(myJson);

  return myJson;
});
