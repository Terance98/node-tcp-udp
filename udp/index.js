/**
 * UDP stands for User Datagram protocol
 *
 * Cons :
 *      - No acknowledgement
 *      - No guarenteed delivery
 *      - Connectionless ( basically no need to maintain a stateful connection with the other server )
 *      - No congestion control
 *      - No ordered packets
 *      - Security : Since there is no connection, so we can't say from where the data is coming from
 *
 * Pros :
 *      - Smaller packets
 *      - Less bandwidth ( beneficial for games )
 *      - Faster than TCP
 *      - Stateless
 */

const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

/**
 * node index.js to start up the server
 * Open up the terminal and type : echo "hi" | nc -w1 -u 127.0.0.1 8081
 * nc stands for netcat. w1 denotes wait upto one second before exiting with a timeout
 */
socket.on("message", (msg, rinfo) => {
  console.log(`Server got ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);
