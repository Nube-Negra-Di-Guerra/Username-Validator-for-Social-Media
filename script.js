
        function validateUsername(username) {
            
            if (typeof username !== "string") {
                return `The username must be a string, ${typeof username} types aren't accepted.`
            };
            
            if (username === "") {
                return `The string mustn't be empty.`
            };
            
            // This checks if there are symbols in the username, and rejects them. I allowed dots and underscores though.

    const forbiddenSymbols = username.includes(",") 
    || username.includes(":") || username.includes(";") 
    || username.includes("#") || username.includes("!") 
    || username.includes("@") || username.includes(" ") 
    || username.includes("?") || username.includes("$") 
    || username.includes("%") || username.includes("&") 
    || username.includes("*") || username.includes("^") 
    || username.includes("+") || username.includes("=") 
    || username.includes("~") || username.includes("`") 
    || username.includes("{") || username.includes("}") 
    || username.includes("[") || username.includes("]") 
    || username.includes("|") || username.includes("<") 
    || username.includes(">") || username.includes("/") 
    || username.includes("\"") || username.includes("'") 
    || username.includes(")") || username.includes("(") 
    || username.includes("-");

            if (forbiddenSymbols){
                return `Username may contain only letters, numbers, dots, and underscores.`;
            };

            const firstCharLetter = username[0];

            if (firstCharLetter.toLowerCase() === firstCharLetter.toUpperCase()) {
            return `Username must start with a letter`;
            };

            if (username.length > 15 || username.length < 3) {
                return `Your username must be between 3 and 15 characters, current number of characters: ${username.length}`;
            }
    
            else {
                return `${username} : Username Accepted.`
            };
        };


        // Testing Phase:
        console.log(validateUsername("My name is")) // Your usernames cannot contain spaces nor special symbols!

        
        console.log(validateUsername("My name is Oliver Queen. After 5 years on a deserter island, I came back")) // Your usernames cannot contain spaces nor special symbols!

        
        console.log(validateUsername("MynameisOliverQueen.After5yearsnadesterislandIcameback")) // Your username must be between 3 and 15 characters, current number of characters: 54

        
        console.log(validateUsername("1MynameisOliverQueen.After5yearsnadesterislandIcameback")) // Username must start with a letter

        
        console.log(validateUsername("!MynameisOliverQueen.After5yearsnadesterislandIcameback")) // Your usernames cannot contain spaces nor special symbols!


        console.log(validateUsername("MynameisOliverQueen.After5yearsnadesterislandIcameback")) // Your username must be between 3 and 15 characters, current number of characters: 54

        
        console.log(validateUsername("My name is Oliver Queen After 5 years on a dester island I came back")) // Your usernames cannot contain spaces nor special symbols!

        
        console.log(validateUsername()) // The username must be a string, undefined types aren't accepted.

        
        console.log(validateUsername(234)) // The username must be a string, number types aren't accepted.

        
        console.log(validateUsername(null)) // The username must be a string, object types aren't accepted.

        
        console.log(validateUsername("")) // The string mustn't be empty.
