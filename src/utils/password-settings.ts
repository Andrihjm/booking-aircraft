const bcrypt = require("bcrypt");

export async function hashSyncPassword() {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hashSync("admin12", salt);
}
