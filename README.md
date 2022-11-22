# Face Authenticator

[Devpost](https://devpost.com/software/face-authenticator)

## Inspiration
From [123Loadboard Codejam 2022 challenges](https://codejam.123loadboard.com/), there are common scams that would involve sub-contracting loads; someone would book a load but would get a sub-contractor to haul the load for them. We wanted to build a platform which would prevent someone else to pretend to be the one who booked the load.

## What it does
In order to prevent someone to pretend to be the original contractor, the latter needs check in/check out with a face authenticator, which is what our platform provides. After logging in with user's face and PIN, the user can check in or out. The check in and check out would match the current location with the location of the truck.

## How we built it
* We built the face authenticator using JavaScript, [fio](https://faceio.net/integration-guide), [React.js](https://reactjs.org/), HTML, and CSS.
* We used [Visual Studio Code](https://code.visualstudio.com/) to write all the codes.

## Challenges we ran into
We are all unfamiliar with React, and we did not know we needed to properly export JavaScript functions in order to use them in React. At first, we wanted to do backend in Flask in Python, and frontend in React, but we had a hard time finding out how to link Flask with React, so we decided to switch to JavaScript, which not all of us are familiar with.

## What's next for Face Authenticator
We would need a database of users with their informations, including the user, check in time, and check out time.

# The Program

## Pre-requisites
`cd project\findface`
`npm install --save react-router-dom@5`
`npm install vite`

## Instructions
To run the program, do `npm run dev`

### Authors:
* Chen Jun Chi
* Felicia Chen
* Jia Lin Sun
* Michael Xi
