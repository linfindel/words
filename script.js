let words = [];
let submittedWords = [];

fetch("https://gist.githubusercontent.com/bmschmidt/7a903432d42606ead4c22b677646df1a/raw/0feb5962658ac8b92c6a33971973357333b6fe53/wordlist.txt")
  .then(response => response.text())
  .then(data => {
    // Split the fetched text into an array of words
    words = data.split("\n");
  })
  .catch(error => {
    console.error("Error fetching the word list:", error);
  });

document.getElementById("input").addEventListener("input", () => {
  const input = document.getElementById("input").value.trim(); // Trim whitespace

  if (words.includes(input) && input.length > 1 && !submittedWords.includes(input)) {
    const outputElement = document.getElementById("output");
    outputElement.innerText += input + "\n"; // Add the word to the displayed list
    submittedWords.push(input); // Add the submitted word to the tracking array

    document.getElementById("input").value = ""; // Clear the input field

    document.getElementById("number").innerText = submittedWords.length;
  }
});