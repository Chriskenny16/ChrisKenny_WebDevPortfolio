// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the quiz container element where the quiz will be displayed
    
    const quizContainer = document.getElementById('quiz-container');
    //quiz container is getting the element from the css file for the quiz to style it in the same way as the website
    
    const questions = [
    // array of question objects so each object contains a question string and options array. const sets a variable that cannot be reassigned - could have used let, let takes up more data. Const does not have to worry about changing.
        { question: "What is your preferred climate?", options: ["Warm", "Cold", "Moderate"] }, // this is question index 0
      //each question is induvidual object - there are two sub objects (question and options)   
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
        //An array that represent the possible results of the quiz
        "London", "Paris", "Berlin", "Madrid", "Rome", "Tokyo", "Seoul", "Beijing", "Sydney", "Madrid",
        "Santiago", "Panama City", "Toronto", "Vancouver", "Buenos Aires", "Rio de Janeiro", "Cape Town",
        "Dubai", "Singapore", "Hong Kong", "Bangkok", "Kuala Lumpur", "Istanbul", "Moscow", "Vienna", "Zurich",
        "Amsterdam", "Barcelona", "Lisbon", "Prague"
    ];

    // Initialize the current question index and an array to store the user's answers
    let currentQuestionIndex = 0;
    //tracks the current question; used let instead of const bc we are cycling through 
    let answers = [];
    // stores the answers

    // Function to display a question based on the current index
    function showQuestion(index) {
        // If all questions have been answered, show the result
        // every time it gets answer it adds 1 to question index - allows for the questions to move forward 
        if (index >= questions.length) {
            showResult();
            return;
        }
        // keeps going through until 

        // Get the current question and its options
        const question = questions[index];
        // Generate the HTML for the current question and its option
        // re creating display for the next question (below)
        quizContainer.innerHTML = ` //goes into html until semi-colon
            <h3>Question ${index + 1}</h3>  <!-- Question number (adds 1 since index starts at 0) -->
            <p>${question.question}</p> <!-- displays Question text -->
            <ul>
                ${question.options.map((option, i) => `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`).join('')}
            </ul>
            <!-- 
            
            Takes each option from options array 
            option: Current option text (e.g., "Warm", "Cold", "Moderate") i
            : Index of current option (0, 1, 2)
             -->
            <button class = "base-text" id="next-button">Next</button>

            <!-- 
            
            name="": assinging an index number to the selections, value="": Sets value to option index (so it only selects one at a time), option: Displays option text
            
            -->
        `;

        // Add an event listener to the "Next" button to handle the user's answer
        document.getElementById('next-button').addEventListener('click', function() {
            //Gets Next button element, Attaches click event listener, Function executes when button clicked
            // Get the selected option for the current question
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            // If an option is selected, store the answer and show the next question
            //Finds selected radio button for current question, name="q${index}": Groups radio buttons, :checked pseudo-class gets selected option
            if (selectedOption) {
                answers[index] = parseInt(selectedOption.value);
                showQuestion(index + 1);
                //Checks if option selected, Converts selected value to number, Stores in answers array, Advances to next question
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
        //number between 0 and # of locations - result index has to be in between that number
        //random equasion - summing all of the answers and diving by number of results
        // reduce() sums all answers array values, (acc, answer) => acc + answer: Accumulator function, 0: Initial accumulator value, % locations.length: Ensures index fits within locations array
        const resultLocation = locations[resultIndex];
        // string taken from locations array using the number result index
        // Display the result location to the user
        quizContainer.innerHTML = `
            <h3>Your recommended study abroad location is:</h3>
            <p>${resultLocation}</p>
        `;
    }

    // Start the quiz by showing the first question
    showQuestion(currentQuestionIndex);
});
//