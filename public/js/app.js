// fetch is browser/cliend side. Cannot be used in node.js/server side.

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const fetchWeather = (location) => {
   fetch(`http://localhost:3000/weather?address=${location}`).then(
      (response) => {
         response.json().then((data) => {
            if (data.error) {
               console.log(data.error);
            } else {
               console.log(data.location);
               console.log(data.forecast);
            }
         });
      }
   );

}

weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const location = search.value;
   fetchWeather(location)
   search.value = ""
});
