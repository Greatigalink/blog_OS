export default async function FetchAPI(url, data) {
  let header = { 'Content-Type': 'application/json' };
  let result = null
  let response = null
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers(header),
    mode: 'cors',
  })
  .then((res) => response = res)
  .catch(() => {
    result = []
    console.log('暂时无法连上服务器...')
  })

  if(response) {
    await response.json()
    .then((res) => result = res)
    .catch(() => {
      result = []
      console.log('服务器数据返回异常...')
    })
  }

  return result;
}