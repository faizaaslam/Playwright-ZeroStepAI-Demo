## Playwright X ZeroStep AI

ZeroStep is an AI tool that enhances Playwright tests with the power of GPT3.5 and GPT 4.
It offers ai() function that allows users to use generative AI to write playwright tests.
That means instead of using Xpaths and CSS selectors, ZeroStep's AI assistant takes action at runtime based on plain-text instruction. 

## Setup and Configurations:
- Clone the project.
- Download Node.js https://nodejs.org/en
- Open the project in any editor (VS-Code Or Webstorm)
- Go to ZeroStep's website https://zerostep.com/ and sign up for free.
- Copy the token provided at the bottom of the dashboard.
- Now we need to expose the ZeroStep token to the playwright. We can do that directly in the terminal by:
```export ZEROSTEP_TOKEN="<your token here>"```  
OR 
- By creating a `zerostep.config.json` file.

## To execute the tests
To execute the tests, execute the following command:
`npm run test`


