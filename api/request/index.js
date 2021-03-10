export default async function FetchAPI(url, data) {
  let header = { 'Content-Type': 'application/json' };
  let response = null;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers(header),
    mode: 'cors',
  }).then((res)=> {
    response = res.json();
  }).catch((err) => {
    response = []
  });

  if(response.errors) {
    throw new Error('response data analysis failed!')
  }

  return response;
}