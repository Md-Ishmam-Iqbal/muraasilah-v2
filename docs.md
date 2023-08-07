# This file serves as a design file to be used for outlining the requirements and technologies used prior to building the app.

## Functional requirements:

- User must be able to send and receive messages realtime (Use websockets)
- Messaging history need to be stored
- User must be able to login (Implement proper authentication OAuth or JSON web token)
- End to end Message encryption for additional security

- Data validation on both FE and BE
- Dockerize the app

## FE

- React
- Tailiwind CSS
- React router for routing

#### FE components

- Sidebar/Navbar for navigating
- Routes:
  - Dashboard where all past chats is displayed
  - Chat page with certain individual if clicked on their profile
  - Profile
- Formik for forms, YUP for FE validation

## BE

- Websockets with NodeJs (socket.io)
- Express for server
- Testing for api

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
