<h1>FlighttyPro ✈ </h1>

<p>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/Language-Typescript-3178C6.svg?logo=typescript"/>
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/Powered%20by-React-5ED3F3.svg?logo=react"/>
  </a>
  <a href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/Style-SCSS-CF649A.svg?logo=sass"/>
  </a> 
  <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/Tests-Cypress-23272C.svg?logo=cypress"/>
  </a> 
  <a href="https://flighttypro.netlify.app/">
    <img src="https://img.shields.io/badge/Deployed%20on-Netlify-3FA7BD.svg?logo=netlify">
  </a>
</p>

**Single Page Application** that shows you the **cheapest flights** between two italian airports (stop-overs included).

It uses the [ShippyPro Flight Engine API](https://react-dev.recruitment.shippypro.com/) to fetch airports, airlines and flights data.

Need a vacation? [Explore now!](https://flighttypro.netlify.app/) 👈

<a href="https://flighttypro.netlify.app/" title="Explore now!">
  <img width="100%" src="./docs/Mockups.png" alt="mockups">
</a>

> 🌐 [Website](https://flighttypro.netlify.app/)

A **solo project** built in **1 week** as a coding challenge given by [ShippyPro](https://www.shippypro.com/) during the interview process.

## Features 💡

### Responsive 📱💻

The **mocks** were designed in [Figma](https://www.figma.com/) with a **mobile-first** approach and support phones, tablets and desktops.

<img src="./docs/figma-designs.png" width="450px" alt="figma designs">

### Interactive 🎯

**User experience** is taken very seriously providing several **microinteractions** to guide and delight visitors during the flow.

<img src="./docs/card-animation.gif" width="450px" alt="card aniamtion">

<p>
  <img src="./docs/flights-list-animation.gif" width="150px" alt="flights list">
  <img src="./docs/logo-animation.gif" width="150px" alt="logo">
  <img src="./docs/take-flight-animation.gif" width="150px" alt="take flight">
</p>

### Fast ⚡

A **caching layer** based on [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) improves the overall **performance**, making API calls less frequent.

<img src="./docs/local-storage.png" width="450px" alt="local storage">

### Tested 🛡

Reliability is granted by **e2e tests** done with [Cypress](https://www.cypress.io/).

<img src="./docs/cypress-test-medium.gif" width="450px" alt="cypress test">

### Solid 🧱

The app's **quality** is cheked against various [Lighthouse](https://developers.google.com/web/tools/lighthouse) audits run on the desktop version

<img src="docs/lighthouse-report.png" width="450px" alt="lighthouse audits">

## Future plans 💭

This app is still in active development, here are **some ideas** I'm working on:

- [ ] **Internationalization**
- [ ] **4K screens support**

## Tech Stack 🛠

**Built with** [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/), and [Sass](https://sass-lang.com/). API calls made with [Axios](https://www.npmjs.com/package/axios) and animations with [GSAP](https://greensock.com/gsap/). E2E tests powered by [Cypress](https://www.cypress.io/). **Deployed** on [Netlify](https://www.netlify.com/).

<!-- front end stack logos -->

<p>
  <img title="Typescript" width ='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/typescript.svg'>
  <img title="React" width ='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'>  
  <img title="Sass" width ='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/sass.svg'>
  <img title="Axios" width ='32px' src ='https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png'>
  <img title="GSAP" width ='32px' src ='https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg'>
  <img title="Cypress" width ='32px' src ='https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.png'>
  <img title="Netlify" width ='32px' src ='https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png'>
</p>

## Contributing 🤝

First step is to **clone** this project

```bash
$ git clone https://github.com/vikvikvr/flightty-pro.git
$ cd flightty-pro
```

Get an **API token** from the [ShippyPro team](mailto:developer@shippypro.com).

```bash
$ cp .env.example .env
$ npm install
$ npm start
```

Happy hacking and remember: **PRs are welcome**! 😄
