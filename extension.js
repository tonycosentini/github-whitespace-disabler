chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
	var url = new URL(request.url);
	
	if ( ! url.searchParams.has('w')){
		url.searchParams.set('w', 1);

		return {redirectUrl: url.href};
	}
  },
  { urls: [ '*://github.com/*/commits/*', '*://github.com/*/pull/*/files'] },
  ['blocking']);