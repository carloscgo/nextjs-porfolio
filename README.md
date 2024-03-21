# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/projects/screen.png)

## View live preview [here](https://www.ccamacho.cloud/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/carloscgo/nextjs-portfolio.git

cd nextjs-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/carloscgo/nextjs-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Carlos Camacho",
  profile: '/profile.png',
  designation: "Software Developer",
  description: "My name is Carlos Camacho. I am a professional and enthusiastic programmer in my daily life. I am a professional in the area of software development with 18 years of experience in web systems in both backend and frontend. Currently my focus is aimed at Fullstack development with typescript technologies. I use various tools applied in the different stages of development, currently learning Devops",
  email: 'carloscgo123@gmail.com',
  phone: '+57 321 268 44 53',
  address: 'Calle 167D #8-58, Bogota, Colombia',
  github: 'https://github.com/carloscgo',
  linkedIn: 'https://www.linkedin.com/in/carlos-camacho-29755043',
  stackOverflow: 'https://stackoverflow.com/users/21700205/carlos-camacho',
  devUsername: "carloscgo",
  resume: "https://bit.ly/cv-eng-carlos-camacho-"
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
