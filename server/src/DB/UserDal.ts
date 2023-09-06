const jsonfile = require("jsonfile");
import path from 'node:path'



export function read() {
  const file = path.join(__dirname, "./users.json")
  const data = jsonfile.readFileSync(file);
  return data;
}
export function write(data:any) {
  const file = path.join(__dirname, "./users.json")
  jsonfile.writeFileSync(file, data, (err: any, resultData: any) => {
    if (err) {
      return err;
    }
  });
  return "user is registered in the list of users";
}
