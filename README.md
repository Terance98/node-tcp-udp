# TCP & UPD implemenatation in Node

This is a boilerplate repository to test out the basic implementation of TCP and UDP protocols in Node.js

## TCP

- TCP stands for Transmission Control Protocol
- Used to send message from one server to another server
- HTTP is built up on TCP
- Databases use TCP underneath

### Pros :

- Acknowledgment : The recipient server will send back an acknowledgment that it has recieved the message
- Guaranteed Delivery
- Connection based : They sender and the recipient first needs to set up a connection. A stateful connection is maintained on both ends.
- Congestion control : When the network is congested, it will wait till the network becomes free again to send the packets
- Ordered packets : The data packets will be sent through different paths. One all the packets are recieved at the recipient end, the TCP will order it.
-

### Cons :

- Larger packets
- More bandwidth
- Slower than UDP
- Stateful
- Server memory (DOS) - Use memory to maintain the connections with other servers. DOS stands for Denial of Service. Hence there is limit for no.of TCP connects at a time.

## UDP

- UDP stands for User Datagram protocol
- Used to send much smaller packet in a not so secure or ordered format but where the latency is more important
- Much more scalable approach since there is no stateful connections. Hence becomes very powerful for horizontal scaling

### Cons :

- No acknowledgement
- No guarenteed delivery
- Connectionless ( basically no need to maintain a stateful connection with the other server )
- No congestion control
- No ordered packets
- Security : Since there is no connection, so we can't say from where the data is coming from

### Pros :

- Smaller packets
- Less bandwidth ( beneficial for games )
- Faster than TCP
- Stateless

## Conclusion :

- TCP is more secure way of sending data and should be used for chat applications for sending messages or establishing a connection to a database
- UDP is a less secure but faster method for sending data and can be used for games, send video frames etc.
