async function fetchUser(key){
    if(key === undefined){
          key = "ilcGMcUsxAQEUWGHZPHiCTCqVafdMfFx"
        }
      const res = await fetch(
        "https://apps.cloud.us.kontakt.io/v2/organization/account/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Api-Key": key,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
  };

  async function fetchCred(userName,pass ){
    if(userName === undefined || pass === undefined){
      confirm("There was a error in the fetch credentials.");
    }
  
  var details = {
      'username': userName,
      'password': pass,
  };
  
  // var formBody = [];
  // for (var property in details) {
  //   var encodedKey = encodeURIComponent(property);
  //   var encodedValue = encodeURIComponent(details[property]);
  //   formBody.push(encodedKey + "=" + encodedValue);
  // }
  // formBody = formBody.join("&");
  // console.log(formBody)
  
    // const x = encodeURIComponent(`username=${userName}&password=${pass}`)
    //       console.log(x)
  
    const params = new URLSearchParams(details);
    console.log(params)
    const res = await fetch(
        "https://apps-api.test.kontakt.io/v2/organization/account/authenticate",
        {
          method: "Post",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded",
            // 'username': userName,
            // 'password': pass,
          },
          body: params
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
  };

  
// async function fetchTestUser(key){
//   if(key === undefined){
//         confirm("There was a error in the fetch credentials.");
//         return;
//       }
//     const res = await fetch(
//       "https://apps-api.test.kontakt.io/v2/organization/account/me",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Api-Key": key,
//         },
//       }
//     );
//     const data = await res.json();
//     return data;
// };