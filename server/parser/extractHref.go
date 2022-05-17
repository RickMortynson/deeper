package parser

import (
	"errors"
	"strings"
)

func extractBody(html string) string {
	// After this line, body[bodyStart:] will return something like class="awesome_body" href="http://example.com"
	// To avoid this, in next line I will crop the string starting from current founded index and find
	// index of the first ">" character, to crop whole body starting from that index
	bodyStart := strings.Index(html, "<body")

	html = html[bodyStart:]
	bodyStart = strings.Index(html, ">") + 1

	bodyEnd := strings.LastIndex(html, "</body>")

	if bodyStart < 0 {
		bodyStart = 0
	}
	if bodyEnd < 0 {
		bodyEnd = 0
	}

	return html[bodyStart:bodyEnd]
}

func getUrl(str string) (string, int) {
	hrefStart := strings.Index(str, "href=\"")
	if hrefStart == -1 {
		return "", -1
	}

	str = str[hrefStart+len("href=\""):]

	hrefEnd := strings.Index(str, "\"")
	str = str[:hrefEnd]

	return str, hrefStart + hrefEnd + 1
}

func GetUrls(html string) ([]string, error) {
	// TODO: add filters (no http, no local links, etc. )
	body := extractBody(html)

	if body == "" {
		return nil, errors.New("empty body")
	}

	var urlArray []string
	var lastIndex int

	url, lastIndex := getUrl(body)
	for lastIndex != -1 {
		urlArray = append(urlArray, url)
		body = body[lastIndex:]
		url, lastIndex = getUrl(body)
	}

	return urlArray, nil
}
