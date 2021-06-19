/**
 * TCP stands for Transmission Control Protocol
 * Used to send message from one server to another server
 * HTTP is built up on TCP
 * Databases use TCP underneath
 *
 * Pros :
 *      - Acknowledgment : The recipient server will send back an acknowledgment that it has recieved the message
 *      - Guaranteed Delivery
 *      - Connection based : They sender and the recipient first needs to set up a connection. A stateful connection is maintained on both ends.
 *      - Congestion control : When the network is congested, it will wait till the network becomes free again to send the packets
 *      - Ordered packets : The data packets will be sent through different paths. One all the packets are recieved at the recipient end, the TCP will order it.
 *
 * Cons :
 *      - Larger packets
 *      - More bandwidth
 *      - Slower than UDP
 *      - Stateful
 *      - Server memory (DOS) - Use memory to maintain the connections with other servers. DOS stands for Denial of Service. Hence there is limit for no.of TCP connects at a time.
 */

const net = require("net");

/**
 * node index.js to start up the server
 * Open up the terminal and type : telnet  127.0.0.1 8080
 * socket.write() will send data from here to the terminal with telent
 * socket.on() listens for data from telnet and logs it
 * When we connect with telnet we will get a message connected to telnet
 * When we close the server, we get "connection closed by foreign host" message on the telnet server
 */
const server = net.createServer((socket) => {
  socket.write("Hello.");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});

server.listen(8080);
