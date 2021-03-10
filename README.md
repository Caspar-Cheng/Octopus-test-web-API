# Octopus-test-web-API
This is a technical test from Octopus Deploy company


Instructions


Create your website using the tools, language and platform of your choice
Implement the APIs listed below
Run your website so it is publicly accessible. Tip: We recommend using ngrok.com. ngrok is free and will allow you to expose your locally running website without fiddling with firewalls making your code easier to debug. Once ngrok is started it will tell you the public url (`Forwarding`).
Enter the URL into this site and we'll run the tests
Wait for the results
Fix, rinse and repeat. There are some edge cases, so you'll need to debug your app to capture those cases and return the appropriate response. We expect you to run the tests multiple times. You may also not be able to get all cases to pass, and that is fine.
Hello
GET /hello

This API is to test that your website is up and running. We will make a GET request to the path hello under the url you have specified.

For example if your web site is at http://8f166b0d6fd7.ngrok.io/ then the request will be made to http://8f166b0d6fd7.ngrok.io/hello.

The request body will be empty.

Your API should return a 204 (NoContent) response with an empty body.

Sum
GET /sum?numbers=<command_seperated_numbers>

This API should return the sum of the supplied integers.

The URL will contain a query (search) parameter numbers that is a comma separated list of integers to sum.

The request body will be empty.

Your API should return a 200 (OK) response and the sum should be in the body of the response.

It should not be JSON formatted.

Reverse Words
GET /reverse-words?sentence=<a_string>

This API should reverse each of the words in the supplied string and return the result.

The URL will contain a query (search) parameter sentence containing words and special characters.

A word is defined as one or more english alphabet characters (a-z, A-Z) in a row. All other characters, should be kept in place.

For example the sentence

Hi, Octopus

Would become

iH, supotcO

The request body will be empty.

Your API should return a 200 (OK) response and the resultant string should be in the body of the response. It should not be JSON formatted or quoted.
