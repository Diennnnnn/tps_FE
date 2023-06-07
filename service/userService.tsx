import fetch from "isomorphic-unfetch";

// export async function AllUser_API() {
//   const response = await fetch("http://localhost:8080/api/get-all-users");
//   const data = await response.json();
//   return data;
// }

export async function SearchPhone(params: { key: string }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    // `http://localhost:8080/clinics/search?keyword=${key}`
    `http://localhost:8080/api/get-history?SDT=${key}`

  );
  const data = await response.json();
  return data;
}

// export async function CreateAppointment(params: {
//   username: string;
//   password: string;
// }): Promise<any> {
//   const response = await fetch(http://localhost:8080/api/login, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(params),
//   });
//   const data = await response.json();
//   return data;
// }