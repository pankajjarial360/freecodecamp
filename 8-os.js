const os = require(`os`);

// console.log(os.hostname);

// get user info
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem()
};
console.log(currentOS.freeMem);
console.log(currentOS.release);
console.log(currentOS.name);
console.log(currentOS.totalMem);
