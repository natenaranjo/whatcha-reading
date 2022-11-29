<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Whatcha Reading</h2>

  <p align="center">
    Explore the document by the links below:
    <br />
    <br />
    <a href="https://whatcha-reading.herokuapp.com/"><strong>View Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/natenaranjo/whatcha-reading">Explore the docs </a>
    ·
    <a href="https://github.com/natenaranjo/whatcha-reading/issues">Report Bug</a>
    ·
    <a href="https://github.com/natenaranjo/whatcha-reading/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screenshot][project-screenshot-1]](https://whatcha-reading.herokuapp.com/)

> As an avid reader wanted to be able to search for books to read and save books for future reading or purchase.

First we had to setup an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.  We also modified the authentication middleware to work in the context of GraphQL API.

Second we use Apollo Provider in React to communicate with the Apollo Server then deployed to Heroku.

> A book search engine requirements for the web app.
- WHEN I load the search engine
  - [x] THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- WHEN I click on the Search for Books menu option
  - [x] THEN I am presented with an input field to search for books and a submit button
- WHEN I am not logged in and enter a search term in the input field and click the submit button
  - [x] THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
- WHEN I click on the Login/Signup menu option
  - [x] THEN a modal appears on the screen with a toggle between the option to log in or sign up
- WHEN the toggle is set to Signup
  - [x] THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
- WHEN the toggle is set to Login
  - [x] THEN I am presented with two inputs for an email address and a password and login button
- WHEN I enter a valid email address and create a password and click on the signup button
  - [x] THEN my user account is created and I am logged in to the site
- WHEN I enter my account’s email address and password and click on the login button
  - [x] THEN I the modal closes and I am logged in to the site
- WHEN I am logged in to the site
  - [x] THEN the menu options change to Search for Books, an option to see my saved books, and Logout
- WHEN I am logged in and enter a search term in the input field and click the submit button
  - [x] THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
- WHEN I click on the Save button on a book
  - [x] THEN that book’s information is saved to my account
- WHEN I click on the option to see my saved books
  - [x] THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
- WHEN I click on the Remove button on a book
  - [x] THEN that book is deleted from my saved books list
- WHEN I click on the Logout button
  - [x] THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
## Installation

> Pull a clone of the repo

> Run npm install -> to install all the necessary dependenacies

> Run npm run develop -> to run the application in localhost.


---

<!-- USAGE EXAMPLES -->
## Usage
> After Login, when searching for a book there will be a button available to now save the book to your collection.  This only will show once the user has logged in.  Also after the user clicks to save the book the button will transform to show this book is already saved once it is added to collection.
[![Project Screenshot][project-screenshot-2]](https://whatcha-reading.herokuapp.com/)

> Clicking on "See your Books" will take you to a pade to show all the books that you saved also gives an accound of how many books are saved at the top.  Here there a button will appear on each book as well to remove the book from your collection if so desire.
[![Project Screenshot][project-screenshot-3]](https://whatcha-reading.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This was accomplished by those listed below:

- Main Developer (Nate)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/natenaranjo/whatcha-reading.svg?style=for-the-badge
[contributors-url]: https://github.com/natenaranjo/whatcha-reading/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/undefined/whatcha-reading.svg?style=for-the-badge
[forks-url]: https://github.com/natenaranjo/whatcha-reading/network/members
[stars-shield]: https://img.shields.io/github/stars/natenaranjo/whatcha-reading.svg?style=for-the-badge
[stars-url]: https://github.com/natenaranjo/whatcha-reading/stargazers
[issues-shield]: https://img.shields.io/github/issues/natenaranjo/whatcha-reading.svg?style=for-the-badge
[issues-url]: https://github.com/natenaranjo/whatcha-reading/issues
[license-shield]: https://img.shields.io/github/license/natenaranjo/whatcha-reading.svg?style=for-the-badge
[license-url]: https://github.com/natenaranjo/whatcha-reading/blob/master/LICENSE.txt
[project-screenshot-1]: /client/src/imgs/screenshot.png
[project-screenshot-2]: ./client/src/imgs/screenshot-2.png
[project-screenshot-3]: ./client/src/imgs/screenshot-3.png
[project-screenshot-4]: ./client/src/imgs/screenshot-4.png
[project-screenshot-5]: ./client/src/imgs/screenshot-5.png
