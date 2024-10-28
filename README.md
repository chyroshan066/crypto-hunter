# Crypto Hunter



## Installing / Getting started

A quick introduction of the minimal setup you need to get the app running.

<br>To create React app through CRA, run the following command:
``` js
npx create-react-app "AppName"
```
The execution speed of the program created through create-react-app (CRA) is slow compared to that of vite. CRA is used to create those app which is bit complex and large.
<br>You can even create react app through vite. Run the following command if you want to create react app via vite;
``` js
npm create vite@latest
```
This create the app. After that you need to write the project & package name (you can even skip this part).
<br>Then choose the required framework using which you intend to build this app.
<br>Then choose the desired variant (Here you have 4 options: TypeScript, TypeScript with compiler, JavaScript & JavaScript with compiler).

Then run the following commands to navigate to the folder:
``` js
cd "folder_name"
```
Install all necessary packages using the following command;
``` js
npm install
```
**OR**
``` js
npm i
```
Then start the app using the following command;
``` js
npm run start
```
On following the link provided, you get to see the sample app.
<br>If you ever intend to change the command for runnig the code, you can do that by making some changes in the package.json file.

### Initial Configuration

Here are some of the dependencies and devDependencies packages needed to be installed for the project development:

1. Material UI
<br>We are going to use material UI to built react app faster.
<br> If you want it's installation process, how to import it and use the components then, go <a href="https://github.com/chyroshan066/notesApp">here</a>

2. react-router-dom
<br>Our app is gonna be multipage website, so for that we need react router dom.
<br> If you want it's installation process, how to use it then, go <a href="https://github.com/chyroshan066/react/tree/main/context-api">here</a>

3. axios
<br>For fetching API's we use axios. Install it using the following command;
``` js
npm i axios
```
After installing import "axios" in the file, where you want to fetch data using the following code;
``` js
import axios from 'axios';
```
Then instead of using "fetch()" use "axios.get()" to fetch the URL as;
``` js
const fetchTrendingCoins = async() => {
    const { data } = await axios.get(TrendingCoins(currency));
}
```

4. react-slick
<br> For carousel/slider we use react-slick. 
<br> If you want it's installation process, how to import it and use then, go <a href="https://github.com/chyroshan066/react/tree/main/react-slick">here</a>

### Building

To build the project for deployment, run the following command;
``` js
npm run build
```

### Deploying/Publishing

To deploy the project on github pages, follow these steps;
<br>1. Put the following code in your 'package.json' file;
``` js
"homepage": "https://myusername.github.io/my-app",
```
Replace 'myusername' with your github username and 'my-app' with your repository name.
<br>2. Then run the following code in terminal to install github pages
``` js
npm install --save gh-pages
```
<br>3. After installing github pages, add the following script in your 'package.json' file;
``` js
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
<br>4. To deploy, run the following command;
``` js
npm run deploy
```

## Features

+ Used context API instead of props drilling to make code readable and easier for debugging & maintenance.
+ Used react-router-dom for no page reloading
+ Used material UI

## Sources

+ Google Font
  To get free fonts like Montserrat
+ Coin Gecko API
  To get API of crypto currency valuation per share, its performance of last 365 days for charts

[comment]: # (## Contributing)

## Links
+ <a href = "https://github.com/chyroshan066/crypto-hunter">Project homepage</a>
+ Other Projects:
  - <a href = "https://github.com/chyroshan066/text-formatter">Text Formatter</a>
  - <a href = "https://github.com/chyroshan066/notes">Notes</a>
+ <a href = "https://github.com/chyroshan066">Profile</a>
  
[comment]: # (## Licensing)

