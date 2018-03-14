# Distributed Data Protocol Implementation Demo With Meteor

Distributed Data Protocol is Client-Server Protocol based on WebSockets for queuing and updating a Server-Side database and for synchronizing such updates among clients. Project implemented to show

1)  Latency Compensation: Subscribe and publish functionality: how server polls database to pick up changes and push them on the client therefore updating screen immediately without waiting for network. Since DDP uses WebSockets instead of HTTP, the data can be pushed whenever changes occur. Every time user increments counter by clicking on insert and data is published and updated on server.

2)  Default connection and transparent reconnection: When connection is lost DDP server instance is automatically set up on the server, and each client is configured to automatically open a connection to that server on startup. When DDP client loses its connection and reconnects, subscriptions will restablish and resynchronized.

Below is youtube link of demo showing how project works and how DDP behaves when connection is lost and reestablished.

https://www.youtube.com/watch?v=FbgO2CJGfQ4&t=93s
