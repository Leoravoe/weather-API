//alert("Connected");
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let appid = "a818013d35a2a38d62a237d6985d0e3a";
//let units = "imperial";
let searchMethod;
function getsearchMethod(searchTerm) {
  if (searchTerm.length == 5 && Number.parseInt(searchTerm) + "" == searchTerm)
    alert("Enter a valid city name");
  else searchMethod = "q";
}
function searchWeather(searchTerm) {
  getsearchMethod(searchTerm);
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&appid=${appid}`
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result);
      console.log(result.city.name);
      console.log(result.list[0].weather[0].icon);
      console.log(result.list[0].main.temp);
      // today's status
      const { name, country } = result.city;
      let location1 = document.querySelector(".location");
      location1.textContent = "Weather in " + name + ", " + country;
      let iconcode = result.list[0].weather[0].icon;
      let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      document.getElementById("icon").src = iconurl;
      let temp1 = document.querySelector(".value");
      temp1.textContent =
        Math.floor(result.list[0].main.temp) -
        273 +
        "°C or " +
        (((Math.floor(result.list[0].main.temp) - 273) * 9) / 5 + 32) +
        "°F";
      let date1 = document.querySelector(".today");
      date1.textContent = day1();
      let wind1 = document.querySelector(".wind");
      wind1.textContent = result.list[0].wind.speed + " m/s";
      let cloud1 = document.querySelector(".cloudiness");
      cloud1.textContent = result.list[0].weather[0].description;
      let pressure1 = document.querySelector(".pressure");
      pressure1.textContent = result.list[0].main.pressure + " hpa";
      let humidity1 = document.querySelector(".humidity");
      humidity1.textContent = result.list[0].main.humidity + "%";

      // next 4 day status

      // 2nd day status
      let date2 = document.querySelector(".datestatus1");
      date2.textContent = day2();
      let temp2 = document.querySelector(".tempstatus1");
      temp2.textContent =
        Math.floor(result.list[8].main.temp) -
        273 +
        "°C or " +
        (((Math.floor(result.list[8].main.temp) - 273) * 9) / 5 + 32) +
        "°F";
      let weatherdetail1 = document.querySelector(".weatherstatus1");
      weatherdetail1.textContent = result.list[8].weather[0].description;
      // 3rd day status
      let date3 = document.querySelector(".datestatus2");
      date3.textContent = day3();
      let temp3 = document.querySelector(".tempstatus2");
      temp3.textContent =
        Math.floor(result.list[16].main.temp) -
        273 +
        "°C or " +
        (((Math.floor(result.list[16].main.temp) - 273) * 9) / 5 + 32) +
        "°F";
      let weatherdetail2 = document.querySelector(".weatherstatus2");
      weatherdetail2.textContent = result.list[16].weather[0].description;
      // 4th day status
      let date4 = document.querySelector(".datestatus3");
      date4.textContent = day4();
      let temp4 = document.querySelector(".tempstatus3");
      temp4.textContent =
        Math.floor(result.list[24].main.temp) -
        273 +
        "°C or " +
        (((Math.floor(result.list[24].main.temp) - 273) * 9) / 5 + 32) +
        "°F";
      let weatherdetail3 = document.querySelector(".weatherstatus3");
      weatherdetail3.textContent = result.list[24].weather[0].description;
      // 5th day status
      let date5 = document.querySelector(".datestatus4");
      date5.textContent = day5();
      let temp5 = document.querySelector(".tempstatus4");
      temp5.textContent =
        Math.floor(result.list[31].main.temp) -
        273 +
        "°C or " +
        (((Math.floor(result.list[31].main.temp) - 273) * 9) / 5 + 32) +
        "°F";
      let weatherdetail4 = document.querySelector(".weatherstatus4");
      weatherdetail4.textContent = result.list[31].weather[0].description;
      // what to wear today
      if (
        result.list[0].weather[0].icon == "01d" ||
        result.list[0].weather[0].icon == "01n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thin and light-coloured clothes";
          shoes.textContent = "Wear sandals or slippers";
          umbrella.textContent =
            "Umbrella can come in handy to protect from access sunlights";
        }
      } else if (
        result.list[0].weather[0].icon == "02d" ||
        result.list[0].weather[0].icon == "02n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thin and light-coloured clothes ";
          shoes.textContent = " Wear sandals or slippers or sneakers";
          umbrella.textContent = " Umbrella is not necessary";
        }
      } else if (
        result.list[0].weather[0].icon == "03d" ||
        result.list[0].weather[0].icon == "03n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thin and light-coloured clothes ";
          shoes.textContent = "Wear sandals or sneakers or slippers";
          umbrella.textContent = "Umbrealla is not necessary";
        }
      } else if (
        result.list[0].weather[0].icon == "04d" ||
        result.list[0].weather[0].icon == "04n"
      ) {
        //console.log(Math.floor(result.list[0].main.temp) - 273);
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thik clothes";
          shoes.textContent = "Wear Boots";
          umbrella.textContent =
            "An umbrella, cap, and \n hooded raincoat may come in handy";
        }
      } else if (
        result.list[0].weather[0].icon == "09d" ||
        result.list[0].weather[0].icon == "09n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thik clothes";
          shoes.textContent = "Wear Boots";
          umbrella.textContent =
            "An umbrella, cap, and hooded \n raincoat may come in handy";
        }
      } else if (
        result.list[0].weather[0].icon == "10d" ||
        result.list[0].weather[0].icon == "10n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thik clothes like jackets";
          shoes.textContent = "Wear Boots";
          umbrella.textContent =
            "An umbrella and a hooded raincoat is required";
        }
      } else if (
        result.list[0].weather[0].icon == "11d" ||
        result.list[0].weather[0].icon == "11n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear thik clothes like jackets";
          shoes.textContent = "Wear Boots";
          umbrella.textContent =
            "An umbrella and a hooded raincoat is required";
        }
      } else if (
        result.list[0].weather[0].icon == "13d" ||
        result.list[0].weather[0].icon == "13n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        }
      } else if (
        result.list[0].weather[0].icon == "50d" ||
        result.list[0].weather[0].icon == "50n"
      ) {
        if (Math.floor(result.list[0].main.temp) - 273 < 11) {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent =
            "Wear sweaters, thick clothing, jackets and wear thick socks";
          shoes.textContent = "Wear Boots with thick socks";
          umbrella.textContent =
            "Keep an Umbrella and wear a snow suits when going out";
        } else {
          let cloths = document.querySelector(".cloths");
          let shoes = document.querySelector(".shoes");
          let umbrella = document.querySelector(".umbrella");
          cloths.textContent = "Wear T-shirts, shirts, shorts, pants or jeans";
          shoes.textContent = "Wear sandals or sneakers or flipflops";
          umbrella.textContent = "Umbrella is not necessary";
        }
      }
    })
    .catch((err) => {
      alert("City not Found");
    });
}

document.getElementById("searchBtn").addEventListener("click", () => {
  let searchTerm = document.getElementById("searchInput").value;
  if (searchTerm) searchWeather(searchTerm);
});

function day1() {
  let d = new Date();
  let n = day[d.getDay()];
  return n;
}

function day2() {
  let s;
  let d = new Date();
  let n = d.getDay() + 1;
  if (n >= 7) {
    s = n - 7;
  } else {
    s = n;
  }
  m = day[s];
  return m;
}

function day3() {
  let s;
  let d = new Date();
  let n = d.getDay() + 2;
  if (n >= 7) {
    s = n - 7;
  } else {
    s = n;
  }
  m = day[s];
  return m;
}

function day4() {
  let s;
  let d = new Date();
  let n = d.getDay() + 3;
  if (n >= 7) {
    s = n - 7;
  } else {
    s = n;
  }
  m = day[s];
  return m;
}

function day5() {
  let s;
  let d = new Date();
  let n = d.getDay() + 4;
  if (n >= 7) {
    s = n - 7;
  } else {
    s = n;
  }
  m = day[s];
  return m;
}
