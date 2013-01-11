function interceptRequest(request) {
	if (!endsWith(request.url, '?w=1')) {
		return {redirectUrl: request.url + '?w=1'}
	}
}

chrome.webRequest.onBeforeRequest.addListener(
  interceptRequest, 
  { urls: [ '*://github.com/*/commit/*', ] },
  ['blocking']);

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}