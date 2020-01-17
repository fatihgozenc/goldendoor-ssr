const getLang = (browserCookie, requestPath) => {
	if (requestPath === '/en/' || requestPath === '/en') {
		return 'en'
	} else if (requestPath === null || '/') {
		return 'de'
	} else if (browserCookie === 'lang=de') {
		return 'de'
	} else if (browserCookie === 'lang=en') {
		return 'en'
	} else {
		return 'de'
	}
}

export default getLang;