// Import React and necessary hooks
import React, { useState } from 'react';

// Define component
function MotivationalToDoList() {
    // State variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Array of questions
    const questions = [
        {
            question: "Do you struggle with anxiety?",
            id: "question1"
        },
        {
            question: "Do you find it difficult to manage your emotions?",
            id: "question2"
        },
        {
            question: "Do you often feel overwhelmed?",
            id: "question3"
        },
        {
            question: "Are you easily distracted during work or study?",
            id: "question4"
        },
        {
            question: "Do you have trouble staying motivated?",
            id: "question5"
        }
    ];

    // Handle form submission
    const handleLoginSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Assuming login is successful for demonstration
        if (email && password) {
            navigateToQuestions();
        } else {
            alert('Please enter valid credentials.');
        }
    };

    // Navigate to questions page
    const navigateToQuestions = () => {
        renderQuestion(currentQuestionIndex);
    };

    // Render current question
    const renderQuestion = (index) => {
        return (
            <div className="question-page">
                <h1>{questions[index].question}</h1>
                <div className="answer-buttons">
                    <button className="answer-btn" data-answer="yes" onClick={(event) => handleAnswerClick(event, index)}>Yes</button>
                    <button className="answer-btn" data-answer="no" onClick={(event) => handleAnswerClick(event, index)}>No</button>
                </div>
            </div>
        );
    };

    // Handle answer button click
    const handleAnswerClick = (event, index) => {
        event.preventDefault(); // Prevent default button action (form submission)

        setCurrentQuestionIndex(index + 1);

        if (currentQuestionIndex < questions.length - 1) {
            navigateToQuestions();
        } else {
            displayQuoteOfTheDay();
        }
    };


    // Navigate to main hub page (to be implemented)
    const navigateToMainHub = () => {
        // Implement navigation logic or further actions here
    };

    // JSX structure
    return (
        <div className="container">
            <header>
                <h1>Welcome to Sigma</h1>
                <p>Login to get started!</p>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            </header>

            {/* Render question or quote of the day based on current state */}
            {currentQuestionIndex < questions.length ? renderQuestion(currentQuestionIndex) : displayQuoteOfTheDay()}
        </div>
    );
}

// Export component
export default MotivationalToDoList;
