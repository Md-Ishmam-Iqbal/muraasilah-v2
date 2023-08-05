This file serves as a design file to be used for outlining the requirements and technologies used prior to building the app.

# Functional requirements:

- User must be able to send and receive messages
- Messaging history need to be stored
- User must be able to login (Implement proper authentication OAuth or JSON web token)
- Message encryption for additional security

- Data validation on both FE and BE
- Dockerize the app

# FE

- React
- Tailiwind CSS

# BE

- Websockets with NodeJs (socket.io)
- Express for server
- Testing for api

# DB

- MongoDB
- Prisma as ORM

# Test for scalability

- Simulate horizontal scaling
  - Run multiple instances on localhost
  - set up a simple load balancer
  - Message queue system with redis
  - Use benchmarking tools like Apache JMeter or Artillery to simulate user traffic
