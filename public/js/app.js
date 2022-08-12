// fetch is browser/cliend side. Cannot be used in node.js/server side.

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1")
const message2 = document.querySelector("#message-2")



const fetchWeather = (location) => {

   message1.textContent = "...loading"
   message2.textContent = ""


   fetch(`/weather?address=${location}`).then(
      (response) => {
         response.json().then((data) => {
            if (data.error) {
               message1.textContent = data.error
            } else {
               message1.textContent = `${data.location}:`
               message2.textContent = `${data.forecast}.`
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
