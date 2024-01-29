export default async function DatabaseConnection(
  username: string,
  password: string
) {
  username = "hamletmarekhashvili";
  password = "PQrcrR4yc4QYV3yX";

  const uri =
    "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster0.1e3zxzq.mongodb.net/";

  localStorage.setItem("databaseUri", uri);
}
