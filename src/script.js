"use strict";

// const getCountryData = (country, lan, cur) => {
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = (msg) => {
    countriesContainer.insertAdjacentText("beforeend", msg);

    countriesContainer.style.opacity = 1;
};

const renderCountry = (data, className = "") => {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src=${data.flags.png} />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${"language"}</p>
    <p class="country__row"><span>💰</span>${"currency"}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};

//   ///////////////////////////////////////
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//       console.log(this.responseText);

//       const [data] = JSON.parse(this.responseText);
//       console.log(data);

//       const html = `
//         <article class="country">
//         <img class="country__img" src=${data.flags.png} />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}{</h4>
//         <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${lan}</p>
//         <p class="country__row"><span>💰</span>${cur}</p>
//         </div>
//     </article>`;
//       countriesContainer.insertAdjacentHTML("beforeend", html);
//       countriesContainer.style.opacity = 1;
//     });
// };
// getCountryData("portugal", "Portugese", "Euro");
// getCountryData("usa", "English", "USD");

// const getCountryAndNeighbor = (country) => {

//     //ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         //render country 1
//         renderCountry(data)

//         // get neightbor country (2)
//         const [neighbor] = data.borders;

//         if(!neighbor) return;

//         //ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const [data2] = JSON.parse(this.responseText)
//             console.log('2', data2)

//             renderCountry(data2, 'neighbour')
//         })
//     });
//   };
//   getCountryAndNeighbor('usa');
//   getCountryAndNeighbor("usa", "English", "USD");

//call 3 example

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/${'usa'}`)
// console.log(request)

// const getCountryData = (country) => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((res)=>{
//         console.log(res)
//         return res.json()
//     }).then( function (data)  {
//         console.log(data)
//         renderCountry(data[0]);
//     })
// }

const request = fetch(`https://restcountries.com/v3.1/name/${"usa"}`);

const getJSON = (url, errMsg = "Something went wrong.") => {
    return fetch(url).then((res) => {
        if (!res.ok) throw new Error(` ${errMsg} (${res.status})`);

        return res.json();
    });
};
// const getCountryData = (country) => {

//     fetch(`https://restcountries.com/v3.1/name/${country}`)

//     .then((res)=> {
//         console.log(res)

//         if(!res.ok)
//             throw new Error(`Country not found. (${res.status})`);
//         return res.json()
//     })

//     .then((data) => {

//         renderCountry(data[0])

//         // const neighbor = data[0].borders[0];
//         const neighbor= 'asdfasdf'

//         if(!neighbor) return;

//         //country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
//     })
//     .then(res=> {

//         if(!res.ok)
//             throw new Error(`Country not found. (${res.status})`);

//         res.json()})
//     .then(data=> renderCountry(data[0], 'neighbour'))
//     .catch(err=> {
//         console.error('user error', err)
//         renderError(`Something went wrong, ${err.message}`)

//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1

//     })
// }

// api= 'https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=238024259415716263527x20166'

// const getCountryData = (country) => {
//     getJson(
//         `https://restcountries.com/v3.1/name/${country}`,
//         `Country not found.`
//         )
//         .then((data) => {
//             renderCountry(data[0]);

//             let neighbor = "";

//             if (typeof data[0].borders === undefined) {
//                 neighbor = data[0].borders[0];
//             } else {
//                 throw new Error("No Neighbor found");
//             }

//             //country 2
//             return getJson(
//                 `https://restcountries.com/v3.1/alpha/${neighbor}`,
//                 `Country not found.`
//                 );
//             })
//             .then((data) => renderCountry(data[0], "neighbour"))
//         .catch((err) => {
//             renderError(`Something went wrong, ${err.message}`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
//     };

//     btn.addEventListener("click", () => getCountryData("japan"));
// const whereAmI = (lat, long)=> {
//     fetch('https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=238024259415716263527x20166')
//     .then((res)=> {
//         if(!res.ok) throw new Error('Lat/long does not exist')
//         return res.json()
//     })
//     .then(data => {
//         console.log(`You are in ${data.city} in ${data.country}`)
//     })
//     .catch(err => {
//         renderError(`something wrong, ${err.message}`)
//     })
// }

// whereAmI()

// const lotteryPromise = new Promise((res, rej)=>{
//     console.log('draw is happening');
//     setTimeout(()=>{
//         if(Math.random() >= 0.5) {
//             res('You Win');
//         } else{
//             rej(new Error('You lost'));
//         }
//     }, 2000)
// })

// lotteryPromise.then(res=> console.log(res)).catch(err=> console.log(err));

// //promisifying setTimeout
// const wait = (sec) =>{
//     return new Promise((res) => {
//         setTimeout(res, sec * 1000);
//     })
// }

// wait(1)
// .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1)
// })
// .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1)
// })
// .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1)
// }).then(()=>console.log('waited for 4 second'))

// Promise.resolve('abc').then(x=> console.log(x))
// Promise.reject(new Error('Problem!')).catch(x=> console.log(x))

// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
// // getPosition().then(pos => console.log(pos));
// const whereAmI = async () => {
//     try {
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         const resGeo = await fetch(
//             `https://geocode.xyz/${lat},${lng}?geoit=json`
//         );
//         if (!resGeo.ok) throw new Error("problem getting location data");

//         const dataGeo = await resGeo.json();

//         const res = await fetch(
//             `https://restcountries.com/v2/name/${dataGeo.country}`
//         );
//         if (!resGeo.ok) throw new Error("problem getting country");

//         const data = await res.json();
//         renderCountry(data[0]);

//         return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//     } catch (err) {
//         renderError(`${err.message}`);

//         //reject promise returned from async function
//         throw err;
//     }
// };

// // whereAmI()
// //     .then(city => console.log(city))
// //     .catch(err => console.log(`2 ${err.message}`))
// //     .finally(()=> console.log('finished'));
// //     console.log("first");

// //refactored to use async await rather than .then()

// (async () => {
//     try {
//         const city = await whereAmI();
//         console.log(city);
//     } catch (err) {
//         console.log(`2 ${err.message}`);
//     }
//     console.log("finished");
// })();

const get3countries = async (c1, c2, c3) => {
    try {
       const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`),
        ]);
        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.log(err)
    }
};
get3countries("portugal", "usa", "turkey");
