# Bridge Suite

Bridge Suite is a website developed using React. It provides an engaging user experience with a responsive layout, leveraging React Router for navigation and EmailJS for handling form submissions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Clone the Repository](#1-clone-the-repository)
  - [Navigate to the Project Directory](#2-navigate-to-the-project-directory)
  - [Install Dependencies](#3-install-dependencies)
  - [EmailJS Setup](#4-emailjs-setup)
- [Running the Project](#running-the-project)
  - [Development](#development)
  - [Production](#production)
- [Usage](#usage)
- [Video](#video)

## Introduction

Bridge Suite is a website created using React, featuring a modern design and responsive layout. It includes functionalities for seamless navigation between pages and form submissions using EmailJS. The website is designed to provide an excellent user experience across various devices.

## Features

- Responsive layout with flexible navigation
- Integration with EmailJS for form handling
- Separate pages for Home, About, and Contact
- Clean and modern design with CSS styling

## Technologies Used

### Languages

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Libraries

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![EmailJS](https://img.shields.io/badge/EmailJS-00C5E8?style=for-the-badge&logo=emailjs&logoColor=white)

### Tools

- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Prerequisites

### Before running this project locally, ensure you have the following installed:

- Node.js: You can download it from the official website at [https://nodejs.org/](https://nodejs.org/).
- NPM (Node Package Manager): Comes with Node.js. Verify by running `npm -v`.
- An IDE such as Visual Studio Code: You can download it from [https://code.visualstudio.com/](https://code.visualstudio.com/).

## Setup

### 1. Clone the repository

- Clone the repository using the following command:

  ```bash
  git clone https://github.com/mohdimrandev/Bridge-Suite.git
  ```

### 2. Navigate to the project directory

- Change to the project directory using the following command:

  ```cmd
  cd Bridge-Suite
  ```

### 3. Install dependencies

- Run the following command in the project directory to install the required dependencies from `package.json`.

  ```cmd
  npm install
  ```

### 4. EmailJS Setup

- Follow these steps to set up EmailJS:

  #### 1. Create an EmailJS Account

  - Sign up at [EmailJS](https://www.emailjs.com/).

  #### 2. Create an Email Service

  - Log in to your EmailJS dashboard.
  - Navigate to `Email Services` and add a new service.
  - **Copy the `Service ID` as you will need it for the environment variables in the upcoming steps.**

  #### 3. Create an Email Template

  - Go to `Email Templates` and create a new template.
  - **Copy the `Template ID` as you will need it for the environment variables in the upcoming steps.**

  #### 4. Obtain API Credentials

  - Copy your Public API Key from the `Account` section in your EmailJS dashboard as you will need this API Key for the environment variables in the upcoming steps.

  #### 5. Configure Environment Variables

  - Create a `.env` file in the root directory with the following content:

    ```plaintext
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_API_KEY=your_api_key
    ```

## Running the Project

- Start the React application in development or production mode based on your requirements.

### Development

- Start the React application in development mode:

  ```cmd
  npm start
  ```

### Production

- To run the react application in a production environment, follow these steps:

1. **Build the React application:**

   ```cmd
   npm run build
   ```

This command compiles your React application into static files for production and places them in the build/ directory.

2. **Serve the production build:**

   ```cmd
   npm run prod
   ```

This command runs the compiled JavaScript files using Node.js. It's suitable for deploying your application in a production environment.

By building the React application (npm run build) before running in production (npm run prod), you ensure that the code is optimized and ready for deployment, utilizing a static server to efficiently serve the compiled assets.

## Usage

- Access the React application via http://localhost:3000 during development.

## Video

[Demo Video](https://youtu.be/cz5N3m6_jhI)
