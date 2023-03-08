/** @format */

const elForm = findElement("form");
const errMessage = findElement("#ErrorMessage");

BASE_URL = "https://reqres.in/api/";

elForm.addEventListener("submit", e => {
   e.preventDefault();
   let inputName = e.target.email.value;
   let inputpasssword = e.target.password.value;

   fetch("https://reqres.in/api/register", {
      method: "post",
      body: JSON.stringify({
         email: inputName,
         password: inputpasssword,
      }),
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then(res => res.json())
      .then(res => {
         const token = res.token;
         console.log(token);
         console.log(token);
         localStorage.setItem("token", token);
         if (res.error) {
            throw new Error(res.error);
         }

         if (token) {
            window.location.href =
               "file:///C:/Users/user/Desktop/Front-end/imtihon-4/index.html";
         }
         // if () {

         // }
      })
      .catch(err => {
         errMessage.textContent =
            "Bunday foydalanuvchi mavjud emas";
         console.log(err);
      });
});
