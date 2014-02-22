function searchUrlBuilder(apiKey, engineId, query) {
  return "https://www.googleapis.com/customsearch/v1?key="
       + apiKey
       + "&cx="
       + engineId
       + "&q="
       + query;
}
