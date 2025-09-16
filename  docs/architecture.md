graph TD
  subgraph Frontend
    FE1[React App]
    FE2[User Interface]
    FE3[Movie Search]
    FE4[Seat Selection]
    FE5[Booking Management]
    FE6[User Registration]
    FE7[Movie Recommendations]
  end

  subgraph Backend
    BE1[Spring Boot Application]
    BE2[REST API]
    BE3[Seat Availability]
    BE4[Booking Logic]
    BE5[User Management]
    BE6[Movie Data Integration]
    BE7[Real-time Updates]
  end

  subgraph Database
    DB1[MySQL Database]
    DB2[User Data]
    DB3[Movie Data]
    DB4[Booking Records]
    DB5[Session Information]
  end

  FE1 --> FE2
  FE2 --> FE3
  FE3 --> FE4
  FE4 --> FE5
  FE5 --> FE6
  FE6 --> FE7

  FE1 --> BE2
  BE2 --> BE3
  BE2 --> BE4
  BE2 --> BE5
  BE2 --> BE6
  BE2 --> BE7

  BE3 --> DB1
  BE4 --> DB1
  BE5 --> DB1
  BE6 --> DB1
  BE7 --> DB1
