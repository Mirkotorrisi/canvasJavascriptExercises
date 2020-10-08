fetch(
    `https://glosbe.com/gapi/translate?from=pol&dest=eng&format=json&phrase=witaj&pretty=true:[https://glosbe.com/gapi/translate?from=pol&dest=eng&format=json&phrase=witaj&pretty=true]`, { mode: "no-cors" }
).then((data) => console.log(data));