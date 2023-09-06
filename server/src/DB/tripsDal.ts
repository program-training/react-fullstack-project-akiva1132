const jsonfile = require("jsonfile");
import path from 'node:path'



export function read() {
  const file = path.join(__dirname, "./trips.json")
  const data = jsonfile.readFileSync(file);
  return data;
}
export function write(data:any) {
  const file = path.join(__dirname, "./trips.json")
  jsonfile.writeFileSync(file, data, (err: any, resultData: any) => {
    if (err) {
      return err;
    }
  });
  return "user is registered in the list of users";
}

export const updateData = ()=>{
  const fileTrip = path.join(__dirname, "./trips.json")
  const fileUser = path.join(__dirname, "./users.json")

  const NfileTrip = path.join(__dirname, "./t.json")
  const dataTrip = jsonfile.readFileSync(NfileTrip);

  const NfileUser = path.join(__dirname, "./u.json")
  const dataUser = jsonfile.readFileSync(NfileUser);
  console.log("bggftttt");
  jsonfile.writeFileSync(fileTrip, dataTrip, (err: any, resultData: any) => {
    if (err) {
      return err;
    }
  });

  jsonfile.writeFileSync(fileUser, dataUser, (err: any, resultData: any) => {
    if (err) {
      return err;
    }
  });

}