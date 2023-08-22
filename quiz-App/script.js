let quizQues = [
  {
    question: "what is JS stands for ?",
    a: "JavaQuery",
    b: "Java",
    c: "Javascript",
    d: "none",
    correct: "c",
  },
  {
    question: "which one is capital of India",
    a: "Ahemdabad",
    b: "Bangalore",
    c: "Madhya Pardesh",
    d: "New Delhi",
    correct: "d",
  },
  {
    question: "what city is called as IT hub in India",
    a: "Bangalore",
    b: "Delhi",
    c: "Ahemdabad",
    d: "none",
    correct: "a",
  },
  {
    question: "which is consider as best IT company in India",
    a: "Cisco Ltd",
    b: "TCS consultancy",
    c: "Microsoft",
    d: "Google",
    correct: "d",
  },
];
const apiUrl =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"; // Replace with your API URL

let arr = [];

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
    // const dataElement = document.getElementById("data");
    // dataElement.textContent = JSON.stringify(data, null, 2);
    // arr.push(data.Array)
//     console.log(data.results);
//     arr = data.results;

//     console.log(arr);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });


const submitBtn = document.querySelector("form");

const question = document.querySelector("#question");
const a_text = document.querySelector("#a");
const b_text = document.querySelector("#b");
const c_text = document.querySelector("#c");
const d_text = document.querySelector("#d");

let index = 0;
const marks = quizQues.length;
let score = 0;

loadFunc();
function loadFunc() {
  if (index < quizQues.length) {
    question.innerText = quizQues[index].question;
    a_text.innerText = quizQues[index].a;
    b_text.innerText = quizQues[index].b;
    c_text.innerText = quizQues[index].c;
    d_text.innerText = quizQues[index].d;
    clearRadio();
  } else {
    alert(`you have scored ${score}/${marks}`);
  }
}

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.answer.value !== "") {
    if (index < quizQues.length) {
      if (quizQues[index].correct == e.target.answer.value) {
        score++;
      }
      index++;
      loadFunc();
    } else {
      alert(`you have scored ${score}/${marks}`);
    }
  } else {
    alert("choose anyone");
  }
});

function clearRadio() {
  let radio = document.querySelectorAll(".radio_btn");
  for (var i = 0; i < radio.length; i++) {
    radio[i].checked = false;
  }
}
