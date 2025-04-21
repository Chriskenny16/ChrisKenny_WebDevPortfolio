// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the quiz container element where the quiz will be displayed
    const quizContainer = document.getElementById('quiz-container');
    
    const questions = [
        { question: "What is your preferred climate?", options: ["Warm", "Cold", "Moderate"] },
        { question: "What type of city do you prefer?", options: ["Big city", "Small town", "Suburban"] },
        { question: "What is your budget?", options: ["$1,000-$2,000", "$2,000-$6,000", "$6,000,$10,000"] },
        { question: "What types of languages do you want to learn?", options: ["Romance", "Eurasian", "None"] },
        { question: "What is your preferred continent?", options: ["Europe", "Asia", "Latin America"] },
        { question: "What type of cuisine do you prefer?", options: ["Asian", "European", "American"] },
        { question: "What is your preferred activity?", options: ["Sightseeing", "Outdoor activities", "Cultural experiences"] },
        { question: "What is your preferred mode of transportation?", options: ["Public transport", "Walking", "Driving"] },
        { question: "What is your preferred accommodation?", options: ["Homestay", "House", "Apartment"] },
        { question: "What is your preferred study environment?", options: ["University", "Language school", "Online"] }
    ];

    const locations = [
        "London", "Paris", "Berlin", "Madrid", "Rome", "Tokyo", "Seoul", "Beijing", "Sydney", "Madrid",
        "Santiago", "Panama City", "Toronto", "Vancouver", "Buenos Aires", "Rio de Janeiro", "Cape Town",
        "Dubai", "Singapore", "Hong Kong", "Bangkok", "Kuala Lumpur", "Istanbul", "Moscow", "Vienna", "Zurich",
        "Amsterdam", "Barcelona", "Lisbon", "Prague"
    ];

    // Initialize the current question index and an array to store the user's answers
    let currentQuestionIndex = 0;
    let answers = [];

    // Function to display a question based on the current index
    function showQuestion(index) {
        // If all questions have been answered, show the result
        if (index >= questions.length) {
            showResult();
            return;
        }

        // Get the current question and its options
        const question = questions[index];
        // Generate the HTML for the current question and its options
        quizContainer.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${question.question}</p>
            <ul>
                ${question.options.map((option, i) => `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`).join('')}
            </ul>
            <button class = "base-text" id="next-button">Next</button>
        `;

        // Add an event listener to the "Next" button to handle the user's answer
        document.getElementById('next-button').addEventListener('click', function() {
            // Get the selected option for the current question
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            // If an option is selected, store the answer and show the next question
            if (selectedOption) {
                answers[index] = parseInt(selectedOption.value);
                showQuestion(index + 1);
            } else {
                // If no option is selected, alert the user to select an option
                alert("Please select an option.");
            }
        });
    }

    // Function to calculate and display the result based on the user's answers
    function showResult() {
        // Calculate the result index by summing the answers and using the modulus operator
        const resultIndex = answers.reduce((acc, answer) => acc + answer, 0) % locations.length;
        // Get the corresponding location based on the result index
        const resultLocation = locations[resultIndex];
        // Display the result location to the user
        quizContainer.innerHTML = `
            <h3>Your recommended study abroad location is:</h3>
            <p>${resultLocation}</p>
        `;
    }

    // Start the quiz by showing the first question
    showQuestion(currentQuestionIndex);
});