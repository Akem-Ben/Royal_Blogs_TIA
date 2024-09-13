# Royal Blogs TIA - Frontend

## Overview

Royal Blogs TIA is a web application that allows users to interact with blog posts, including creating, viewing, and commenting on posts. The frontend is built using React, TypeScript, and various libraries to enhance functionality and user experience.

## Table of Contents

Features<br />
Technologies<br />
Setup<br />
Scripts<br />
Folder Structure<br />
Routing<br />
Forms<br />
Contributing<br />
License<br />


## Features

<ul>
<li>Landing Page: The homepage of the application.</li>
<li>Signup Page: Allows users to register.</li>
<li>Login Page: Users can log in with their credentials.</li>
<li>Single Post Page: Displays a single blog post.</li>
<li>Verification Page: Handles user email verification.</li>
<li>Privacy Page: Displays privacy policy.</li>
</ul>


## Technologies

<li>React: Frontend library for building user interfaces.</li>
<li>TypeScript: Superset of JavaScript that adds static types.</li>
<li>Vite: Build tool and development server.</li>
<li>Bootstrap: CSS framework for responsive design.</li>
<li>React Router DOM: Routing library for single-page applications.</li>
<li>Formik: Form management library.</li>
<li>Yup: Schema validation library.</li>
<li>React Toastify: For displaying notifications.</li>
<li>Tailwind CSS: Utility-first CSS framework.</li>
<li>React Icons: Icon library for React.</li>


## Setup
To get started with the frontend application, follow these steps:<br />

#### Clone the repository:

```
git clone <repository-url>
```

#### Navigate to the project directory:

```
cd royal-blogs-tia
```

#### Install dependencies:

```
npm install
```

#### Start the development server:

```
npm run dev
```

#### You can also build the project for deployment:

```
npm run build
```

#### Preview the build:

```
npm run preview
```

## Scripts
test: Runs tests using Vitest.
test:ui: Runs Vitest with a UI for tests.
coverage: Runs tests with coverage.
dev: Starts the development server with Vite.
build: Compiles TypeScript and builds the project with Vite.
lint: Lints the codebase with ESLint.
preview: Previews the production build.


## Folder Structure

```
src/
├── _tests_/
├── assets/
│   └── body/
│   ├── header/
├── axiosFolder/
│   └── axiosFunctions/
│   ├── configurations/
├── Components/
│   ├── AdvertBanner/
│   ├── Cards/
│   ├── Contexts/
│   ├── Footer/
│   ├── Header/
│   ├── LoginForm/
│   ├── Modals/
│   ├── Navbar/
│   ├── Posts/
│   ├── RegisterForm/
├── helper functions/
├── pages/
│   ├── LandingPage/
│   ├── LoginPage/
│   ├── PrivacyPage/
│   ├── ProfilePage/
│   ├── SignupPage/
│   ├── SinglePostPage/
│   ├── VerificationPage/
├── utilities/
├── _redirects
├── App.tsx
└── index.css
└── main.tsx
└── setupTest.ts
└── vite-env.d.ts
```


## Routing
The application uses React Router for navigation:<br/>
<ul>
<li>
/ - Landing Page
</li>
<li>
/signup - Signup Page
</li>
<li>
/privacy - Privacy Policy
</li>
<li>
/login - Login Page
</li>
<li>
/singlepost/:postId - Single Post Page
</li>
<li>
/verification/:token - Verification Page
</li>
</ul>


## Forms
<ul>
<li>LoginForm:<br/>
Handles user login with email/username and password.<br/>
Displays errors and loading states.<br/>
Allows resending of verification links.
</li>
<li>
RegisterForm<br/>
Handles user registration with fields for profile image, full name, username, email, and password.<br/>
Validates input and shows errors.<br/>
Submits user data to the server.<br/>
</li>
</ul>

## Contributing
If you'd like to contribute to the project, please follow these steps:</br>

<ul>
<li>Fork the repository.</li>
<li>Create a new branch for your changes.</li>
<li>Commit your changes.</li>
<li>Push your changes to your forked repository.</li>
<li>Open a pull request.</li>
</ul>