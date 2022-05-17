const crawlUrl = async (url: string) => {
  const requestUrl =
    'http://localhost:8080/api/v1/search?' +
    new URLSearchParams({
      search: url
    }).toString()
  const response = await fetch(requestUrl)

  if (response.ok) {
    switch (response.status) {
      case 200:
        return await response.json()
    }
  }
}

export { crawlUrl }
