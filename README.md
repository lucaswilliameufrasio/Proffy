# Proffy - Your learning platform

![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)

> Created following on Next Level Week #2 of [Rocketseat](https://www.rocketseat.com.br).

> Create beautiful applications.

> react, react native, nodejs, typescript, postgresql, prisma 2

![Proffy banner](https://user-images.githubusercontent.com/34021576/89958641-c15e6d80-dc10-11ea-8254-02598b4a89c5.png)
---
## :technologist: Technologies

The following technologies was used to built the project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)


## :books: Content

- 🖥 [Requirements](#requirements)
- 📦 [Usage](#usage)
- :question: [FAQ](#faq)
- :scroll: [License](#license)


---
<h2 id="requirements">🖥 Requirements </h2>

 - Git
 - NodeJS
 - PostgreSQL

<h2 id="usage">📦 Usage</h2>

### Clone the repository

👉  Clone this repo to your local machine using:

```shell
git clone https://github.com/lucaswilliameufrasio/Proffy.git
```

### 🔨 Setup

#### :brain: Backend (Required)
👉 Navigate to project's folder and install dependencies:

```shell
$ cd Proffy/backend
$ cp prisma/.env.example prisma/.env
$ yarn
$ npx prisma generate
```
> On .env file DATABASE_URL values with yours.

> This variable will look as follows: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA 


👉  Create database structure:

```shell
$ yarn prisma migrate save --name init --experimental
$ yarn prisma migrate up --experimental
```

👉  Run the application with:

```shell
$ yarn dev
```

> Open http://localhost:7777 on your favorite browser or continue to the next step.

####  :earth_americas: Web
👉 Navigate to web application folder and install dependencies with:

```shell
$ cd Proffy/web
$ yarn
$ cp .env.example .env.local
```
> Replace REACT_APP_API_URL with your backend url on .env.local

👉  Run the application with:

```shell
$ yarn start
```

👉 Open http://localhost:3000 on your favorite browser.

---

#### :iphone: Mobile
👉 Navigate to project's folder and install dependencies:

```shell
$ cd Proffy/mobile
$ yarn
```

> Replace baseURL with your backend url on services/api.ts

👉 Run the expo developer tools with:

```shell
$ yarn start
```
👉  Scan the QRCode with Expo or Expo Client application on your smartphone, or click "Run on Android Device/Emulator"

---

<h2 id="faq">:question: FAQ</h2>

- **Why to use React, React Native and NodeJS**
    - I can reuse the acquired knowledge, that is, I can create something in react and reuse in react native, and it's all javascript / typescript.

- **Can i participate of this week of knowledge?**
	- Yes, of course, only need to stay tuned on [Rockeseat's instagram](https://www.instagram.com/rocketseat_oficial/) to find out when registration starts.

---

<h2 id="license">:scroll: License</h2>

- **[MIT](http://opensource.org/licenses/mit-license.php)**