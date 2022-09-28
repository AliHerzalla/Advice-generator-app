const API_Key = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector(".advice-generator__advice-number");
const adviceQuote = document.querySelector(".advice-generator__quote");
const generatorBtn = document.querySelector(".advice-generator__btn");

async function fetchData() {
    const response = await fetch(API_Key);
    const adviceData = await response.json();
    return adviceData;
}

let ID_B;
function renderAdvice(advice) {
    const adviceData = {
        id: advice.id,
        text: advice.advice,
    };
    ID_B = adviceData.id;
    adviceNumberSpan.textContent = `ADVICE # ${adviceData.id}`;
    adviceQuote.textContent = `“ ${adviceData.text} ”`;
}

async function generateData() {
    const data = await fetchData();
    const advice = data.slip;

    //check if the current id is equal 2ed id
    let ID_A = advice.id;
    if (ID_A == ID_B)
        generateData();
    // render the data on screen
    renderAdvice(advice);
}

window.addEventListener('load', generateData);
generatorBtn.addEventListener("click", generateData)

