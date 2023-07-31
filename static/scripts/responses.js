const dataset = [
        {
          input: "What are some popular fiction books?",
          output: "Some popular fiction books are 'The Great Gatsby,' 'To Kill a Mockingbird,' and 'Pride and Prejudice.'"
        },
        {
          input: "Can you recommend any fantasy novels?",
          output: "Sure! I recommend 'Harry Potter and the Sorcerer's Stone,' 'The Hobbit,' and 'A Game of Thrones.'"
        },
        {
          input: "Do you have any books on programming?",
          output: "Absolutely! We have several programming books available, such as 'Clean Code: A Handbook of Agile Software Craftsmanship' and 'Eloquent JavaScript: A Modern Introduction to Programming.'"
        },
        {
          input: "I'm looking for a cookbook. Any suggestions?",
          output: "Certainly! You might enjoy 'The Joy of Cooking,' 'Cravings: Recipes for All the Food You Want to Eat,' or 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking.'"
        },
        {
          input: "What's the latest book by Stephen King?",
          output: "The latest book by Stephen King is 'Billy Summers.' It was released recently and has been receiving rave reviews!"
        },
        {
          input: "How can I search for books on your website?",
          output: "To search for books on our website, you can use the search bar at the top of the page. Simply enter the title, author, or keywords related to the book you're looking for."
        },
        {
          input: "Are there any discounts or promotions available?",
          output: "Yes, we often have discounts and promotions on various books. It's best to check our 'Special Offers' section or subscribe to our newsletter to stay updated on the latest deals."
        },
        {
          input: "Can you recommend a good self-help book?",
          output: "Certainly! 'The Subtle Art of Not Giving a F*ck' by Mark Manson and 'Atomic Habits' by James Clear are highly recommended self-help books."
        },
        {
          input: "How can I track my order?",
          output: "To track your order, you can go to the 'Order Tracking' section on our website. Enter your order number, and you'll be able to see the status and estimated delivery date."
        },
        {
          input: "Do you have any books by J.R.R. Tolkien?",
          output: "Yes, we have a wide selection of books by J.R.R. Tolkien, including 'The Lord of the Rings' trilogy and 'The Silmarillion.'"
        }   ,   
  {
    input: "hello",
    output: "Hello there!"
  },
  {
    input: "Can i search for books based on my university or college",
    output: "Absolutely! Our search feature allows you to filter book listings based on your university or college. This way, you can find books that are specifically relevant to your academic institution."
  },
  {
    input: "I can't login my account",
    output: "Try forget password or contact us ."
  },
  {
    input: "default",
    output: "I understand your concern. Please allow us to fix this issue for you."
  }
];


function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Can i search for books based on my university of college") {
        return "Absolutely! Our search feature allows you to filter book listings based on your university or college. This way, you can find books that are specifically relevant to your academic institution.";
    }else if (input == "I'm not able to review or comment on posts") {
        return "We're working on it, will update in next version"; 
    }
        

    let match = false
    let res = null

    dataset.forEach(obj =>{
        if(input == obj.input){
            match = true;
            res = obj.output;
            return 
        }
    })
    if(match) return res
    else {
        return "I understand your concern. Please allow us to fix this issue for you.";
    }
}

// const cap= document.getElementsByTagName("li");
// cap.style.color ="red"


