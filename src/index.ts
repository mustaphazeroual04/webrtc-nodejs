//https://github.com/Miczeq22/simple-chat-app/blob/master/public/scripts/index.js
import { Server } from "./server";
 
const server = new Server();
 
server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});