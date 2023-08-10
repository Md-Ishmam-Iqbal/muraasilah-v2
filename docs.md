# This file serves as a design file to be used for outlining the requirements and technologies used prior to building the app.

## Functional requirements:

- User must be able to send and receive messages realtime (Use websockets)
<!-- - Later implement sending of different file types and images -->
- Messaging history need to be stored
- User must be able to login (Implement proper authentication OAuth or JSON web token)
- End to end Message encryption for additional security

## Other requirements

- Data validation on both FE and BE
- Dockerize the app
- Automated Testing to ensure quality and maintainability

## FE

- React
- Tailiwind CSS
- React router for routing
- Formik for forms, YUP for FE validation

#### FE components

- Sidebar/Navbar for navigating
- Routes:
  - Dashboard where all past chats are displayed
  - Chat with another user if clicked on their profile

## BE

- Websockets with NodeJs (socket.io)
- Express
- Testing for api

#### Routes

- **_User Routes_**
  - POST: `/api/users` - register user
  - POST: `/api/users/auth` - authorize registered user and get token
  - POST: `/api/users/logout` - log out user and clear cookie
  - GET: `/api/users/profile` - get user profile
  - POST: `/api/users/profile` - update user profile
- **_Other Routes_**

## DB

- MongoDB
- Prisma as ORM

## Test for scalability

- Simulate horizontal scaling
  - Run multiple instances on localhost
  - set up a simple load balancer
  - Message queue system with redis
  - Use benchmarking tools like Apache JMeter or Artillery to simulate user traffic

## App design:

- [Wireframe](https://whimsical.com/muraasilat-Wd6wZgqnRpEFvQ5Mp2PJdz)
