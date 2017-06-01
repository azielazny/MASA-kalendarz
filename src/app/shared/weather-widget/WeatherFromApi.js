/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
// myWidgetParam = {
//   id: 21,
//   event_date: 1496898730,
//   city_name: "Gdańsk",
//   appid: '9099fdbbe0e4de40bcfe29b960187173',
//   units: 'metric',
//   containerid: 'openweathermap-widget',
// };


!function e(t, a, r) {
  function i(s, o) {
    if (!a[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!o && l)return l(s, !0);
        if (n)return n(s, !0);
        var d = new Error("Cannot find module '" + s + "'");
        throw d.code = "MODULE_NOT_FOUND", d
      }
      var c = a[s] = {exports: {}};
      t[s][0].call(c.exports, function (e) {
        var a = t[s][1][e];
        return i(a || e)
      }, c, c.exports, e, t, a, r)
    }
    return a[s].exports
  }

  for (var n = "function" == typeof require && require, s = 0; s < r.length; s++)i(r[s]);
  return i
}({
  1: [function (e, t, a) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function n(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var s = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t
      }
    }(), o = function (e) {
      function t() {
        return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }

      return n(t, e), s(t, [{
        key: "numberDaysOfYearXXX", value: function (e) {
          return !(e > 365) && (e < 10 ? "00" + e : e < 100 ? "0" + e : e)
        }
      }, {
        key: "convertDateToNumberDay", value: function (e) {
          var t = new Date(e), a = new Date(t.getFullYear(), 0, 0), r = t - a, i = Math.floor(r / 864e5);
          return t.getFullYear() + "-" + this.numberDaysOfYearXXX(i)
        }
      }, {
        key: "convertNumberDayToDate", value: function (e) {
          var t = /(\d{4})(-)(\d{3})/, a = t.exec(e), r = new Date(a[1]), i = r.getTime() + 1e3 * a[3] * 60 * 60 * 24, n = new Date(i), s = n.getMonth() + 1, o = n.getDate(), l = n.getFullYear();
          return (o < 10 ? "0" + o : o) + "." + (s < 10 ? "0" + s : s) + "." + l
        }
      }, {
        key: "formatDate", value: function (e) {
          var t = new Date(e), a = t.getFullYear(), r = t.getMonth() + 1, i = t.getDate();
          return a + "-" + (r < 10 ? "0" + r : r) + " - " + (i < 10 ? "0" + i : i)
        }
      }, {
        key: "getCurrentDate", value: function () {
          var e = new Date;
          return this.formatDate(e)
        }
      }, {
        key: "getDateLastThreeMonth", value: function () {
          var e = new Date, t = (new Date).getFullYear(), a = new Date(e.getFullYear(), 0, 0), r = e - a, i = Math.floor(r / 864e5);
          return i -= 90, i < 0 && (t -= 1, i = 365 - i), t + "-" + this.numberDaysOfYearXXX(i)
        }
      }, {
        key: "getCurrentSummerDate", value: function () {
          var e = (new Date).getFullYear();
          return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")]
        }
      }, {
        key: "getCurrentSpringDate", value: function () {
          var e = (new Date).getFullYear();
          return [this.convertDateToNumberDay(e + "-03-01"), this.convertDateToNumberDay(e + "-05-31")]
        }
      }, {
        key: "getLastSummerDate", value: function () {
          var e = (new Date).getFullYear() - 1;
          return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")]
        }
      }, {
        key: "getFirstDateCurYear", value: function () {
          return (new Date).getFullYear() + " - 001"
        }
      }, {
        key: "timestampToDateTime", value: function (e) {
          return new Date(1e3 * e).toLocaleString().replace(/,/, "").replace(/:\w+$/, "")
        }
      }, {
        key: "timestampToTime", value: function (e) {
          var t = new Date(1e3 * e), a = t.getHours(), r = t.getMinutes();
          return (a < 10 ? "0" + a : a) + " : " + (r < 10 ? "0" + r : r) + " "
        }
      }, {
        key: "getNumberDayInWeekByUnixTime", value: function (e) {
          return new Date(1e3 * e).getDay()
        }
      }, {
        key: "getDayNameOfWeekByDayNumber", value: function (e) {
          return {0: "Nie", 1: "Pon", 2: "Wto", 3: "Śro", 4: "Czw", 5: "Pią", 6: "Sob"}[e]
        }
      }, {
        key: "getMonthNameByMonthNumber", value: function (e) {
          return "number" != typeof e || e <= 0 && e >= 12 ? null : {
              0: "Sty",
              1: "Lut",
              2: "Mar",
              3: "Kwi",
              4: "Maj",
              5: "Cze",
              6: "Lip",
              7: "Sie",
              8: "Wrz",
              9: "Paz",
              10: "Lis",
              11: "Gru"
            }[e]
        }
      }, {
        key: "compareDatesWithToday", value: function (e) {
          return e.toLocaleDateString() === (new Date).toLocaleDateString()
        }
      }, {
        key: "convertStringDateMMDDYYYHHToDate", value: function (e) {
          var t = /(\d{2})(\.{1})(\d{2})(\.{1})(\d{4})/, a = t.exec(e);
          return 6 === a.length ? new Date(a[5] + "-" + a[3] + "-" + a[1]) : new Date
        }
      }, {
        key: "getTimeDateHHMMMonthDay", value: function () {
          var e = new Date;
          return (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + " " + this.getMonthNameByMonthNumber(e.getMonth()) + " " + e.getDate()
        }
      }]), t
    }(Date);
    a.default = o
  }, {}],
  2: [function (e, t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    a.naturalPhenomenon = {
      en: {
        name: "English",
        main: "",
        description: {
          200: "thunderstorm with light rain",
          201: "thunderstorm with rain",
          202: "thunderstorm with heavy rain",
          210: "light thunderstorm",
          211: "thunderstorm",
          212: "heavy thunderstorm",
          221: "ragged thunderstorm",
          230: "thunderstorm with light drizzle",
          231: "thunderstorm with drizzle",
          232: "thunderstorm with heavy drizzle",
          300: "light intensity drizzle",
          301: "drizzle",
          302: "heavy intensity drizzle",
          310: "light intensity drizzle rain",
          311: "drizzle rain",
          312: "heavy intensity drizzle rain",
          313: "shower rain and drizzle",
          314: "heavy shower rain and drizzle",
          321: "shower drizzle",
          500: "light rain",
          501: "moderate rain",
          502: "heavy intensity rain",
          503: "very heavy rain",
          504: "extreme rain",
          511: "freezing rain",
          520: "light intensity shower rain",
          521: "shower rain",
          522: "heavy intensity shower rain",
          531: "ragged shower rain",
          600: "light snow",
          601: "snow",
          602: "heavy snow",
          611: "sleet",
          612: "shower sleet",
          615: "light rain and snow",
          616: "rain and snow",
          620: "light shower snow",
          621: "shower snow",
          622: "heavy shower snow",
          701: "mist",
          711: "smoke",
          721: "haze",
          731: "sand,dust whirls",
          741: "fog",
          751: "sand",
          761: "dust",
          762: "volcanic ash",
          771: "squalls",
          781: "tornado",
          800: "clear sky",
          801: "few clouds",
          802: "scattered clouds",
          803: "broken clouds",
          804: "overcast clouds",
          900: "tornado",
          901: "tropical storm",
          902: "hurricane",
          903: "cold",
          904: "hot",
          905: "windy",
          906: "hail",
          950: "setting",
          951: "calm",
          952: "light breeze",
          953: "gentle breeze",
          954: "moderate breeze",
          955: "fresh breeze",
          956: "strong breeze",
          957: "high wind, near gale",
          958: "gale",
          959: "severe gale",
          960: "storm",
          961: "violent storm",
          962: "hurricane"
        }
      },
      ru: {
        name: "Russian",
        main: "",
        description: {
          200: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¼ÐµÐ»ÐºÐ¸Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          201: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          202: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¿Ñ€Ð¾Ð»Ð¸Ð²Ð½Ñ‹Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          210: "Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð° Ð³Ñ€Ð¾Ð·Ð°",
          211: "Ð³Ñ€Ð¾Ð·Ð°",
          212: "Ð±ÑƒÑ€Ñ",
          221: "Ð¶ÐµÑÑ‚Ð¾ÐºÐ°Ñ Ð³Ñ€Ð¾Ð·Ð°",
          230: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¼ÐµÐ»ÐºÐ¸Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          231: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          232: "Ð³Ñ€Ð¾Ð·Ð° Ñ ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
          300: "ÑÑ‹Ñ€Ð¾",
          301: "ÑÑ‹Ñ€Ð¾",
          302: "Ð¾Ñ‡ÐµÐ½ÑŒ ÑÑ‹Ñ€Ð¾",
          310: "Ð»Ñ‘Ð³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          311: "Ð»Ñ‘Ð³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          312: "Ð¸Ð½Ñ‚ÐµÐ½ÑÐ¸Ð²Ð½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          321: "Ð¼ÐµÐ»ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          500: "Ð»ÐµÐ³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          501: "Ð´Ð¾Ð¶Ð´ÑŒ",
          502: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          503: "Ð¿Ñ€Ð¾Ð»Ð¸Ð²Ð½Ð¾Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          504: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          511: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          520: "Ð´Ð¾Ð¶Ð´ÑŒ",
          521: "Ð´Ð¾Ð¶Ð´ÑŒ",
          522: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
          600: "Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ¾Ð¹ ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
          601: "ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
          602: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
          611: "ÑÐ»ÑÐºÐ¾Ñ‚ÑŒ",
          621: "ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
          701: "Ñ‚ÑƒÐ¼Ð°Ð½",
          711: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
          721: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
          731: "Ð¿ÐµÑÑ‡Ð°Ð½Ð°Ñ Ð±ÑƒÑ€Ñ",
          741: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
          800: "ÑÑÐ½Ð¾",
          801: "Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
          802: "ÑÐ»ÐµÐ³ÐºÐ° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
          803: "Ð¿Ð°ÑÐ¼ÑƒÑ€Ð½Ð¾",
          804: "Ð¿Ð°ÑÐ¼ÑƒÑ€Ð½Ð¾",
          900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
          901: "Ñ‚Ñ€Ð¾Ð¿Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ð±ÑƒÑ€Ñ",
          902: "ÑƒÑ€Ð°Ð³Ð°Ð½",
          903: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ð¾",
          904: "Ð¶Ð°Ñ€Ð°",
          905: "Ð²ÐµÑ‚Ñ€ÐµÐ½Ð½Ð¾",
          906: "Ð³Ñ€Ð°Ð´",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      it: {
        name: "Italian",
        main: "",
        description: {
          200: "temporale con pioggerella",
          201: "temporale con pioggia",
          202: "temporale con pioggia forte",
          210: "temporale",
          211: "temporale",
          212: "temporale forte",
          221: "temporale",
          230: "temporale con pioggerella",
          231: "temporale con pioggerella",
          232: "temporale con pioggerella",
          300: "pioggerella",
          301: "pioggerella",
          302: "pioggerella",
          310: "pioggerella",
          311: "pioggerella",
          312: "forte pioggerella",
          321: "acquazzone",
          500: "pioggia leggera",
          501: "pioggia moderata",
          502: "forte pioggia",
          503: "pioggia fortissima",
          504: "pioggia estrema",
          511: "pioggia gelata",
          520: "pioggerella",
          521: "acquazzone",
          522: "acquazzone",
          600: "neve",
          601: "neve",
          602: "forte nevicata",
          611: "nevischio",
          621: "forte nevicata",
          701: "foschia",
          711: "fumo",
          721: "foschia",
          731: "mulinelli di sabbia/polvere",
          741: "nebbia",
          800: "cielo sereno",
          801: "poche nuvole",
          802: "nubi sparse",
          803: "nubi sparse",
          804: "cielo coperto",
          900: "tornado",
          901: "tempesta tropicale",
          902: "uragano",
          903: "freddo",
          904: "caldo",
          905: "ventoso",
          906: "grandine",
          950: "Setting",
          951: "Calmo",
          952: "Bava di vento",
          953: "Brezza leggera",
          954: "Brezza tesa",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Tempesta",
          961: "Tempesta violenta",
          962: "Uragano"
        }
      },
      sp: {
        name: "Spanish",
        main: "",
        description: {
          200: "tormenta con lluvia ligera",
          201: "tormenta con lluvia",
          202: "tormenta con lluvia intensa",
          210: "ligera tormenta",
          211: "tormenta",
          212: "fuerte tormenta",
          221: "tormenta irregular",
          230: "tormenta con llovizna ligera",
          231: "tormenta con llovizna",
          232: "tormenta con llovizna intensa",
          300: "llovizna ligera",
          301: "llovizna",
          302: "llovizna de gran intensidad",
          310: "lluvia y llovizna ligera",
          311: "lluvia y llovizna",
          312: "lluvia y llovizna de gran intensidad",
          321: "chubasco",
          500: "lluvia ligera",
          501: "lluvia moderada",
          502: "lluvia de gran intensidad",
          503: "lluvia muy fuerte",
          504: "lluvia muy fuerte",
          511: "lluvia helada",
          520: "chubasco de ligera intensidad",
          521: "chubasco",
          522: "chubasco de gran intensidad",
          600: "nevada ligera",
          601: "nieve",
          602: "nevada intensa",
          611: "aguanieve",
          621: "chubasco de nieve",
          701: "niebla",
          711: "humo",
          721: "niebla",
          731: "torbellinos de arena/polvo",
          741: "bruma",
          800: "cielo claro",
          801: "algo de nubes",
          802: "nubes dispersas",
          803: "nubes rotas",
          804: "nubes",
          900: "tornado",
          901: "tormenta tropical",
          902: "huracÃ¡n",
          903: "frÃ­o",
          904: "calor",
          905: "ventoso",
          906: "granizo",
          950: "Setting",
          951: "calma",
          952: "Viento flojo",
          953: "Viento suave",
          954: "Viento moderado",
          955: "Brisa",
          956: "Viento fuerte",
          957: "Viento fuerte, prÃ³ximo a vendaval",
          958: "Vendaval",
          959: "Vendaval fuerte",
          960: "Tempestad",
          961: "Tempestad violenta",
          962: "HuracÃ¡n"
        }
      },
      ua: {
        name: "Ukrainian",
        main: "",
        description: {
          200: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð»ÐµÐ³ÐºÐ¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
          201: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ð¾Ñ‰ÐµÐ¼",
          202: "Ð³Ñ€Ð¾Ð·Ð° Ð·Ñ– Ð·Ð»Ð¸Ð²Ð¾ÑŽ",
          210: "Ð»ÐµÐ³ÐºÐ° Ð³Ñ€Ð¾Ð·Ð°",
          211: "Ð³Ñ€Ð¾Ð·Ð°",
          212: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð³Ñ€Ð¾Ð·Ð°",
          221: "ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ñ‡Ð°ÑÐ½Ñ– Ð³Ñ€Ð¾Ð·Ð¸",
          230: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
          231: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ð¾Ñ‰ÐµÐ¼",
          232: "Ð³Ñ€Ð¾Ð·Ð° Ð· ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¼ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
          300: "Ð»ÐµÐ³ÐºÐ° Ð¼Ñ€ÑÐºÐ°",
          301: "Ð¼Ñ€ÑÐºÐ°",
          302: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð¼Ñ€ÑÐºÐ°",
          310: "Ð»ÐµÐ³ÐºÐ¸Ð¹ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          311: "Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          312: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          321: "Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          500: "Ð»ÐµÐ³ÐºÐ° Ð·Ð»Ð¸Ð²Ð°",
          501: "Ð¿Ð¾Ð¼Ñ–Ñ€Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          502: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          503: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð·Ð»Ð¸Ð²Ð°",
          504: "Ð·Ð»Ð¸Ð²Ð°",
          511: "ÐºÑ€Ð¸Ð¶Ð°Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
          520: "Ð´Ð¾Ñ‰",
          521: "Ð´Ð¾Ñ‰",
          522: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð·Ð»Ð¸Ð²Ð°",
          600: "Ð»ÐµÐ³ÐºÐ¸Ð¹ ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
          601: "ÑÐ½Ñ–Ð³ ",
          602: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
          611: "Ð¼Ð¾ÐºÑ€Ð¸Ð¹ ÑÐ½Ñ–Ð³",
          621: "ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
          701: "Ñ‚ÑƒÐ¼Ð°Ð½",
          711: "Ñ‚ÑƒÐ¼Ð°Ð½",
          721: "ÑÐµÑ€Ð¿Ð°Ð½Ð¾Ðº",
          731: "Ð¿Ñ–Ñ‰Ð°Ð½Ð° Ð·Ð°Ð¼ÐµÑ‚Ñ–Ð»ÑŒ",
          741: "Ñ‚ÑƒÐ¼Ð°Ð½",
          800: "Ñ‡Ð¸ÑÑ‚Ðµ Ð½ÐµÐ±Ð¾",
          801: "Ñ‚Ñ€Ð¾Ñ…Ð¸ Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
          802: "Ñ€Ð¾Ð·Ñ–Ñ€Ð²Ð°Ð½Ñ– Ñ…Ð¼Ð°Ñ€Ð¸",
          803: "Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
          804: "Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
          900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
          901: "Ñ‚Ñ€Ð¾Ð¿Ñ–Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
          902: "Ð±ÑƒÑ€ÐµÐ²Ñ–Ð¹",
          903: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ð¾",
          904: "ÑÐ¿ÐµÐºÐ°",
          905: "Ð²Ñ–Ñ‚Ñ€ÑÐ½Ð¾",
          906: "Ð³Ñ€Ð°Ð´",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      de: {
        name: "German",
        main: "",
        description: {
          200: "Gewitter mit leichtem Regen",
          201: "Gewitter mit Regen",
          202: "Gewitter mit starkem Regen",
          210: "leichte Gewitter",
          211: "Gewitter",
          212: "schwere Gewitter",
          221: "einige Gewitter",
          230: "Gewitter mit leichtem Nieselregen",
          231: "Gewitter mit Nieselregen",
          232: "Gewitter mit starkem Nieselregen",
          300: "leichtes Nieseln",
          301: "Nieseln",
          302: "starkes Nieseln",
          310: "leichter Nieselregen",
          311: "Nieselregen",
          312: "starker Nieselregen",
          321: "Nieselschauer",
          500: "leichter Regen",
          501: "mÃ¤ÃŸiger Regen",
          502: "sehr starker Regen",
          503: "sehr starker Regen",
          504: "Starkregen",
          511: "Eisregen",
          520: "leichte Regenschauer",
          521: "Regenschauer",
          522: "heftige Regenschauer",
          600: "mÃ¤ÃŸiger Schnee",
          601: "Schnee",
          602: "heftiger Schneefall",
          611: "Graupel",
          621: "Schneeschauer",
          701: "trÃ¼b",
          711: "Rauch",
          721: "Dunst",
          731: "Sand / Staubsturm",
          741: "Nebel",
          800: "klarer Himmel",
          801: "ein paar Wolken",
          802: "Ã¼berwiegend bewÃ¶lkt",
          803: "Ã¼berwiegend bewÃ¶lkt",
          804: "wolkenbedeckt",
          900: "Tornado",
          901: "Tropensturm",
          902: "Hurrikan",
          903: "kalt",
          904: "heiÃŸ",
          905: "windig",
          906: "Hagel",
          950: "Setting",
          951: "Windstille",
          952: "Leichte Brise",
          953: "Milde Brise",
          954: "MÃ¤ÃŸige Brise",
          955: "Frische Brise",
          956: "Starke Brise",
          957: "Hochwind, annÃ¤hender Sturm",
          958: "Sturm",
          959: "Schwerer Sturm",
          960: "Gewitter",
          961: "Heftiges Gewitter",
          962: "Orkan"
        }
      },
      pt: {
        name: "Portuguese",
        main: "",
        description: {
          200: "trovoada com chuva leve",
          201: "trovoada com chuva",
          202: "trovoada com chuva forte",
          210: "trovoada leve",
          211: "trovoada",
          212: "trovoada pesada",
          221: "trovoada irregular",
          230: "trovoada com garoa fraca",
          231: "trovoada com garoa",
          232: "trovoada com garoa pesada",
          300: "garoa fraca",
          301: "garoa",
          302: "garoa intensa",
          310: "chuva leve",
          311: "chuva fraca",
          312: "chuva forte",
          321: "chuva de garoa",
          500: "chuva fraca",
          501: "Chuva moderada",
          502: "chuva de intensidade pesado",
          503: "chuva muito forte",
          504: "Chuva Forte",
          511: "chuva com congelamento",
          520: "chuva moderada",
          521: "chuva",
          522: "chuva de intensidade pesada",
          600: "Neve branda",
          601: "neve",
          602: "Neve pesada",
          611: "chuva com neve",
          621: "banho de neve",
          701: "NÃ©voa",
          711: "fumaÃ§a",
          721: "neblina",
          731: "turbilhÃµes de areia/poeira",
          741: "Neblina",
          800: "cÃ©u claro",
          801: "Algumas nuvens",
          802: "nuvens dispersas",
          803: "nuvens quebrados",
          804: "tempo nublado",
          900: "tornado",
          901: "tempestade tropical",
          902: "furacÃ£o",
          903: "frio",
          904: "quente",
          905: "com vento",
          906: "granizo",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      ro: {
        name: "Romanian",
        main: "",
        description: {
          200: "furtunÄƒ cu ploaie uÈ™oarÄƒ",
          201: "furtunÄƒ",
          202: "furtunÄƒ cu ploaie puternicÄƒ",
          210: "furtunÄƒ uÈ™oarÄƒ",
          211: "furtunÄƒ",
          212: "furtunÄƒ puternicÄƒ",
          221: "furtunÄƒ aprigÄƒ",
          230: "furtunÄƒ cu burniÈ›Äƒ",
          231: "furtunÄƒ cu burniÈ›Äƒ",
          232: "furtunÄƒ cu burniÈ›Äƒ",
          300: "burniÈ›Äƒ de intensitate joasÄƒ",
          301: "burniÈ›Äƒ",
          302: "burniÈ›Äƒ de intensitate mare",
          310: "burniÈ›Äƒ de intensitate joasÄƒ",
          311: "burniÈ›Äƒ",
          312: "burniÈ›Äƒ de intensitate mare",
          321: "burniÈ›Äƒ",
          500: "ploaie uÈ™oarÄƒ",
          501: "ploaie",
          502: "ploaie puternicÄƒ",
          503: "ploaie torenÈ›ialÄƒ ",
          504: "ploaie extremÄƒ",
          511: "ploaie Ã®ngheÈ›atÄƒ",
          520: "ploaie de scurtÄƒ duratÄƒ",
          521: "ploaie de scurtÄƒ duratÄƒ",
          522: "ploaie de scurtÄƒ duratÄƒ",
          600: "ninsoare uÈ™oarÄƒ",
          601: "ninsoare",
          602: "ninsoare puternicÄƒ",
          611: "lapoviÈ›Äƒ",
          621: "ninsoare de scurtÄƒ duratÄƒ",
          701: "ceaÈ›Äƒ",
          711: "ceaÈ›Äƒ",
          721: "ceaÈ›Äƒ",
          731: "vÃ¢rtejuri de nisip",
          741: "ceaÈ›Äƒ",
          800: "cer senin",
          801: "cÃ¢È›iva nori",
          802: "nori Ã®mprÄƒÈ™tiaÈ›i",
          803: "cer fragmentat",
          804: "cer acoperit de nori",
          900: "tornadÄƒ",
          901: "furtuna tropicalÄƒ",
          902: "uragan",
          903: "rece",
          904: "fierbinte",
          905: "vant puternic",
          906: "grindinÄƒ",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      pl: {
        name: "Polish",
        main: "",
        description: {
          200: "Burza z lekkimi opadami deszczu",
          201: "Burza z opadami deszczu",
          202: "Burza z intensywnymi opadami deszczu",
          210: "Lekka burza",
          211: "Burza",
          212: "Silna burza",
          221: "Burza",
          230: "Burza z lekkÄ… mÅ¼awkÄ…",
          231: "Burza z mÅ¼awka",
          232: "Burza z intensywnÄ… mÅ¼awkÄ…",
          300: "Lekka mÅ¼awka",
          301: "MÅ¼awka",
          302: "Intensywna mÅ¼awka",
          310: "Lekkie opady drobnego deszczu",
          311: "Deszcz / mÅ¼awka",
          312: "Intensywny deszcz / mÅ¼awka",
          321: "Silna mÅ¼awka",
          500: "Lekki deszcz",
          501: "Umiarkowany deszcz",
          502: "Intensywny deszcz",
          503: "bardzo silny deszcz",
          504: "Ulewa",
          511: "MarznÄ…cy deszcz",
          520: "KrÃ³tka ulewa",
          521: "Deszcz",
          522: "Intensywny, lekki deszcz",
          600: "Lekkie opady Å›niegu",
          601: "Åšnieg",
          602: "Mocne opady Å›niegu",
          611: "Deszcz ze Å›niegem",
          621: "ÅšnieÅ¼yca",
          701: "MgieÅ‚ka",
          711: "Smog",
          721: "Zamglenia",
          731: "ZamieÄ‡ piaskowa",
          741: "MgÅ‚a",
          800: "Bezchmurnie",
          801: "Lekkie zachmurzenie",
          802: "Rozproszone chmury",
          803: "Pochmurno z przejaÅ›nieniami",
          804: "Pochmurno",
          900: "tornado",
          901: "burza tropikalna",
          902: "Huragan",
          903: "ChÅ‚odno",
          904: "GorÄ…co",
          905: "wietrznie",
          906: "Grad",
          950: "Setting",
          951: "Spokojnie",
          952: "Lekka bryza",
          953: "Delikatna bryza",
          954: "Umiarkowana bryza",
          955: "ÅšwieÅ¼a bryza",
          956: "Silna bryza",
          957: "Prawie wichura",
          958: "Wichura",
          959: "Silna wichura",
          960: "Sztorm",
          961: "GwaÅ‚towny sztorm",
          962: "Huragan"
        }
      },
      fi: {
        name: "Finnish",
        main: "",
        description: {
          200: "ukkosmyrsky ja kevyt sade",
          201: "ukkosmyrsky ja sade",
          202: "ukkosmyrsky ja kova sade",
          210: "pieni ukkosmyrsky",
          211: "ukkosmyrsky",
          212: "kova ukkosmyrsky",
          221: "lievÃ¤ ukkosmyrsky",
          230: "ukkosmyrsky ja kevyt tihkusade",
          231: "ukkosmyrsky ja tihkusade",
          232: "ukkosmyrsky ja kova tihkusade",
          300: "lievÃ¤ tihuttainen",
          301: "tihuttaa",
          302: "kova tihuttainen",
          310: "lievÃ¤ tihkusade",
          311: "tihkusade",
          312: "kova tihkusade",
          321: "tihkusade",
          500: "pieni sade",
          501: "kohtalainen sade",
          502: "kova sade",
          503: "erittÃ¤in runsasta sadetta",
          504: "kova sade",
          511: "jÃ¤Ã¤tÃ¤vÃ¤ sade",
          520: "lievÃ¤ tihkusade",
          521: "tihkusade",
          522: "kova sade",
          600: "pieni lumisade",
          601: "lumi",
          602: "paljon lunta",
          611: "rÃ¤ntÃ¤",
          621: "lumikuuro",
          701: "sumu",
          711: "savu",
          721: "sumu",
          731: "hiekka/pÃ¶ly pyÃ¶rre",
          741: "sumu",
          800: "taivas on selkeÃ¤",
          801: "vÃ¤hÃ¤n pilviÃ¤",
          802: "ajoittaisia pilviÃ¤",
          803: "hajanaisia pilviÃ¤",
          804: "pilvinen",
          900: "tornado",
          901: "trooppinen myrsky",
          902: "hirmumyrsky",
          903: "kylmÃ¤",
          904: "kuuma",
          905: "tuulinen",
          906: "rakeita",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      nl: {
        name: "Dutch",
        main: "",
        description: {
          200: "onweersbui met lichte regen",
          201: "onweersbui met regen",
          202: "onweersbui met zware regenval",
          210: "lichte onweersbui",
          211: "onweersbui",
          212: "zware onweersbui",
          221: "onregelmatig onweersbui",
          230: "onweersbui met lichte motregen",
          231: "onweersbui met motregen",
          232: "onweersbui met zware motregen",
          300: "lichte motregen",
          301: "motregen",
          302: "zware motregen",
          310: "lichte motregen/regen",
          311: "motregen",
          312: "zware motregen/regen",
          321: "zware motregen",
          500: "lichte regen",
          501: "matige regen",
          502: "zware regenval",
          503: "zeer zware regenval",
          504: "extreme regen",
          511: "Koude buien",
          520: "lichte stortregen",
          521: "stortregen",
          522: "zware stortregen",
          600: "lichte sneeuw",
          601: "sneeuw",
          602: "hevige sneeuw",
          611: "ijzel",
          621: "natte sneeuw",
          701: "mist",
          711: "mist",
          721: "nevel",
          731: "zand/stof werveling",
          741: "mist",
          800: "onbewolkt",
          801: "licht bewolkt",
          802: "half bewolkt",
          803: "zwaar bewolkt",
          804: "geheel bewolkt",
          900: "tornado",
          901: "tropische storm",
          902: "orkaan",
          903: "koud",
          904: "heet",
          905: "stormachtig",
          906: "hagel",
          950: "Windstil",
          951: "Kalm",
          952: "Lichte bries",
          953: "Zachte bries",
          954: "Matige bries",
          955: "Vrij krachtige wind",
          956: "Krachtige wind",
          957: "Harde wind",
          958: "Stormachtig",
          959: "Storm",
          960: "Zware storm",
          961: "Zeer zware storm",
          962: "Orkaan"
        }
      },
      fr: {
        name: "French",
        main: "",
        description: {
          200: "orage et pluie fine",
          201: "orage et pluie",
          202: "orage et fortes pluies",
          210: "orages lÃ©gers",
          211: "orages",
          212: "gros orages",
          221: "orages Ã©parses",
          230: "Orage avec lÃ©gÃ¨re bruine",
          231: "orages Ã©parses",
          232: "gros orage",
          300: "Bruine lÃ©gÃ¨re",
          301: "Bruine",
          302: "Fortes bruines",
          310: "Pluie fine Ã©parse",
          311: "pluie fine",
          312: "Crachin intense",
          321: "Averses de bruine",
          500: "lÃ©gÃ¨res pluies",
          501: "pluies modÃ©rÃ©es",
          502: "Fortes pluies",
          503: "trÃ¨s fortes prÃ©cipitations",
          504: "grosses pluies",
          511: "pluie verglaÃ§ante",
          520: "petites averses",
          521: "averses de pluie",
          522: "averses intenses",
          600: "lÃ©gÃ¨res neiges",
          601: "neige",
          602: "fortes chutes de neige",
          611: "neige fondue",
          621: "averses de neige",
          701: "brume",
          711: "Brouillard",
          721: "brume",
          731: "tempÃªtes de sable",
          741: "brouillard",
          800: "ensoleillÃ©",
          801: "peu nuageux",
          802: "partiellement ensoleillÃ©",
          803: "nuageux",
          804: "Couvert",
          900: "tornade",
          901: "tempÃªte tropicale",
          902: "ouragan",
          903: "froid",
          904: "chaud",
          905: "venteux",
          906: "grÃªle",
          950: "Setting",
          951: "Calme",
          952: "Brise lÃ©gÃ¨re",
          953: "Brise douce",
          954: "Brise modÃ©rÃ©e",
          955: "Brise fraiche",
          956: "Brise forte",
          957: "Vent fort, presque violent",
          958: "Vent violent",
          959: "Vent trÃ¨s violent",
          960: "TempÃªte",
          961: "empÃªte violente",
          962: "Ouragan"
        }
      },
      bg: {
        name: "Bulgarian",
        main: "",
        description: {
          200: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ»Ð°Ð± Ð´ÑŠÐ¶Ð´",
          201: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ð²Ð°Ð»ÐµÐ¶",
          202: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ð¿Ð¾Ñ€Ð¾Ð¹",
          210: "Ð¡Ð»Ð°Ð±Ð° Ð³Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
          211: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
          212: "Ð¡Ð¸Ð»Ð½Ð° Ð³Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
          221: "Ð Ð°Ð·ÐºÑŠÑÐ°Ð½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
          230: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ»Ð°Ð± Ñ€ÑŠÐ¼ÐµÐ¶",
          231: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ñ€ÑŠÐ¼ÐµÐ¶",
          232: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
          300: "Ð¡Ð»Ð°Ð± Ñ€ÑŠÐ¼ÐµÐ¶",
          301: "Ð ÑŠÐ¼Ð¸",
          302: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
          310: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
          311: "Ð ÑŠÐ¼ÑÑ‰ Ð´ÑŠÐ¶Ð´",
          312: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
          321: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
          500: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
          501: "Ð£Ð¼ÐµÑ€ÐµÐ½ Ð´ÑŠÐ¶Ð´",
          502: "Ð¡Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
          503: "ÐœÐ½Ð¾Ð³Ð¾ ÑÐ¸Ð»ÐµÐ½ Ð²Ð°Ð»ÐµÐ¶",
          504: "Ð¡Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
          511: "Ð”ÑŠÐ¶Ð´ ÑÑŠÑ ÑÑ‚ÑƒÐ´",
          520: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
          521: "ÐžÐ±Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
          522: "ÐŸÐ¾Ñ€Ð¾Ð¹",
          600: "Ð¡Ð»Ð°Ð± ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
          601: "Ð¡Ð½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
          602: "Ð¡Ð¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
          611: "Ð˜Ð·Ð½ÐµÐ½Ð°Ð´Ð²Ð°Ñ‰ Ð²Ð°Ð»ÐµÐ¶",
          621: "ÐžÐ±Ð¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
          701: "ÐœÑŠÐ³Ð»Ð°",
          711: "Ð”Ð¸Ð¼",
          721: "ÐÐ¸ÑÐºÐ° Ð¼ÑŠÐ³Ð»Ð°",
          731: "ÐŸÑÑÑŠÑ‡Ð½Ð°/ÐŸÑ€Ð°ÑˆÐ½Ð° Ð±ÑƒÑ€Ñ",
          741: "ÐœÑŠÐ³Ð»Ð°",
          800: "Ð¯ÑÐ½Ð¾ Ð½ÐµÐ±Ðµ",
          801: "ÐÐ¸ÑÐºÐ° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
          802: "Ð Ð°Ð·ÐºÑŠÑÐ°Ð½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
          803: "Ð Ð°Ð·ÑÐµÑÐ½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
          804: "Ð¢ÑŠÐ¼Ð½Ð¸ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
          900: "Ð¢Ð¾Ñ€Ð½Ð°Ð´Ð¾/Ð£Ñ€Ð°Ð³Ð°Ð½",
          901: "Ð¢Ñ€Ð¾Ð¿Ð¸Ñ‡ÐµÑÐºÐ° Ð±ÑƒÑ€Ñ",
          902: "Ð£Ñ€Ð°Ð³Ð°Ð½",
          903: "Ð¡Ñ‚ÑƒÐ´ÐµÐ½Ð¾",
          904: "Ð“Ð¾Ñ€ÐµÑ‰Ð¾ Ð²Ñ€ÐµÐ¼Ðµ",
          905: "Ð’ÐµÑ‚Ñ€Ð¾Ð²Ð¸Ñ‚Ð¾",
          906: "Ð“Ñ€Ð°Ð´",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      se: {
        name: "Swedish",
        main: "",
        description: {
          200: "Ã¥skovÃ¤der",
          201: "Ã¥skovÃ¤der",
          202: "fullt Ã¥skovÃ¤der",
          210: "Ã¥ska",
          211: "Ã¥skovÃ¤der",
          212: "Ã¥ska",
          221: "ojÃ¤mnt ovÃ¤der",
          230: "Ã¥skovÃ¤der",
          231: "Ã¥skovÃ¤der",
          232: "fullt Ã¥skovÃ¤der",
          300: "mjukt duggregn",
          301: "duggregn",
          302: "hÃ¥rt duggregn",
          310: "mjukt regn",
          311: "regn",
          312: "hÃ¥rt regn",
          321: "duggregn",
          500: "mjukt regn",
          501: "MÃ¥ttlig regn",
          502: "hÃ¥rt regn",
          503: "mycket kraftigt regn",
          504: "Ã¶sregn",
          511: "underkylt regn",
          520: "mjukt Ã¶sregn",
          521: "dusch-regn",
          522: "regnar smÃ¥spik",
          600: "mjuk snÃ¶",
          601: "snÃ¶",
          602: "kraftigt snÃ¶fall",
          611: "snÃ¶blandat regn",
          621: "snÃ¶ovÃ¤der",
          701: "dimma",
          711: "smogg",
          721: "dis",
          731: "sandstorm",
          741: "dimmigt",
          800: "klar himmel",
          801: "nÃ¥gra moln",
          802: "spridda moln",
          803: "molnigt",
          804: "Ã¶verskuggande moln",
          900: "storm",
          901: "tropisk storm",
          902: "orkan",
          903: "kallt",
          904: "varmt",
          905: "blÃ¥sigt",
          906: "hagel",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      zh_tw: {
        name: "Chinese Traditional",
        main: "",
        description: {
          200: "é›·é™£é›¨",
          201: "é›·é™£é›¨",
          202: "é›·é™£é›¨",
          210: "é›·é™£é›¨",
          211: "é›·é™£é›¨",
          212: "é›·é™£é›¨",
          221: "é›·é™£é›¨",
          230: "é›·é™£é›¨",
          231: "é›·é™£é›¨",
          232: "é›·é™£é›¨",
          300: "å°é›¨",
          301: "å°é›¨",
          302: "å¤§é›¨",
          310: "å°é›¨",
          311: "å°é›¨",
          312: "å¤§é›¨",
          321: "é™£é›¨",
          500: "å°é›¨",
          501: "ä¸­é›¨",
          502: "å¤§é›¨",
          503: "å¤§é›¨",
          504: "æš´é›¨",
          511: "å‡é›¨",
          520: "é™£é›¨",
          521: "é™£é›¨",
          522: "å¤§é›¨",
          600: "å°é›ª",
          601: "é›ª",
          602: "å¤§é›ª",
          611: "é›¨å¤¾é›ª",
          621: "é™£é›ª",
          701: "è–„éœ§",
          711: "ç…™éœ§",
          721: "è–„éœ§",
          731: "æ²™æ—‹é¢¨",
          741: "å¤§éœ§",
          800: "æ™´",
          801: "æ™´ï¼Œå°‘é›²",
          802: "å¤šé›²",
          803: "å¤šé›²",
          804: "é™°ï¼Œå¤šé›²",
          900: "é¾æ²é¢¨",
          901: "ç†±å¸¶é¢¨æš´",
          902: "é¢¶é¢¨",
          903: "å†·",
          904: "ç†±",
          905: "å¤§é¢¨",
          906: "å†°é›¹",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      tr: {
        name: "Turkish",
        main: "",
        description: {
          200: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ hafif yaÄŸmurlu",
          201: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ yaÄŸmurlu",
          202: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ saÄŸanak yaÄŸÄ±ÅŸlÄ±",
          210: "Hafif saÄŸanak",
          211: "SaÄŸanak",
          212: "Åžiddetli saÄŸanak",
          221: "AralÄ±klÄ± saÄŸanak",
          230: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ hafif yaÄŸÄ±ÅŸlÄ±",
          231: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ yaÄŸÄ±ÅŸlÄ±",
          232: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ ÅŸiddetli yaÄŸÄ±ÅŸlÄ±",
          300: "Yer yer hafif yoÄŸunluklu yaÄŸÄ±ÅŸ",
          301: "Yer yer yaÄŸÄ±ÅŸlÄ±",
          302: "Yer yer yoÄŸun yaÄŸÄ±ÅŸlÄ±",
          310: "Yer yer hafif yaÄŸÄ±ÅŸlÄ±",
          311: "Yer yer yaÄŸÄ±ÅŸlÄ±",
          312: "Yer yer yoÄŸun yaÄŸÄ±ÅŸlÄ±",
          321: "Yer yer saÄŸanak yaÄŸÄ±ÅŸlÄ±",
          500: "Hafif yaÄŸmur",
          501: "Orta ÅŸiddetli yaÄŸmur",
          502: "Åžiddetli yaÄŸmur",
          503: "Ã‡ok ÅŸiddetli yaÄŸmur",
          504: "AÅŸÄ±rÄ± yaÄŸmur",
          511: "YaÄŸÄ±ÅŸlÄ± ve soÄŸuk hava",
          520: "KÄ±sa sÃ¼reli hafif yoÄŸunluklu yaÄŸmur",
          521: "KÄ±sa sÃ¼reli yaÄŸmur",
          522: "KÄ±sa sÃ¼reli ÅŸiddetli yaÄŸmur",
          600: "Hafif kar yaÄŸÄ±ÅŸlÄ±",
          601: "Kar yaÄŸÄ±ÅŸlÄ±",
          602: "YoÄŸun kar yaÄŸÄ±ÅŸlÄ±",
          611: "Karla karÄ±ÅŸÄ±k yaÄŸmurlu",
          621: "KÄ±sa sÃ¼relÃ¼ kar yaÄŸÄ±ÅŸÄ±",
          701: "Sisli",
          711: "Sisli",
          721: "Hafif sisli",
          731: "Kum/Toz fÄ±rtÄ±nasÄ±",
          741: "Sisli",
          800: "AÃ§Ä±k",
          801: "Az bulutlu",
          802: "ParÃ§alÄ± az bulutlu",
          803: "ParÃ§alÄ± bulutlu",
          804: "KapalÄ±",
          900: "KasÄ±rga",
          901: "Tropik fÄ±rtÄ±na",
          902: "Hortum",
          903: "Ã‡ok SoÄŸuk",
          904: "Ã‡ok SÄ±cak",
          905: "RÃ¼zgarlÄ±",
          906: "Dolu yaÄŸÄ±ÅŸÄ±",
          950: "Durgun",
          951: "Sakin",
          952: "Hafif RÃ¼zgarlÄ±",
          953: "Az RÃ¼zgarlÄ±",
          954: "Orta Seviye RÃ¼zgarlÄ±",
          955: "RÃ¼zgarlÄ±",
          956: "Kuvvetli RÃ¼zgar",
          957: "Sert RÃ¼zgar",
          958: "FÄ±rtÄ±na",
          959: "Åžiddetli FÄ±rtÄ±na",
          960: "KasÄ±rga",
          961: "Åžiddetli KasÄ±rga",
          962: "Ã‡ok Åžiddetli KasÄ±rga"
        }
      },
      zh_cn: {
        name: "Chinese Simplified",
        main: "",
        description: {
          200: "é›·é˜µé›¨",
          201: "é›·é˜µé›¨",
          202: "é›·é˜µé›¨",
          210: "é›·é˜µé›¨",
          211: "é›·é˜µé›¨",
          212: "é›·é˜µé›¨",
          221: "é›·é˜µé›¨",
          230: "é›·é˜µé›¨",
          231: "é›·é˜µé›¨",
          232: "é›·é˜µé›¨",
          300: "å°é›¨",
          301: "å°é›¨",
          302: "å¤§é›¨",
          310: "å°é›¨",
          311: "å°é›¨",
          312: "å¤§é›¨",
          321: "é˜µé›¨",
          500: "å°é›¨",
          501: "ä¸­é›¨",
          502: "å¤§é›¨",
          503: "å¤§é›¨",
          504: "æš´é›¨",
          511: "å†»é›¨",
          520: "é˜µé›¨",
          521: "é˜µé›¨",
          522: "å¤§é›¨",
          600: "å°é›ª",
          601: "é›ª",
          602: "å¤§é›ª",
          611: "é›¨å¤¹é›ª",
          621: "é˜µé›ª",
          701: "è–„é›¾",
          711: "çƒŸé›¾",
          721: "è–„é›¾",
          731: "æ²™æ—‹é£Ž",
          741: "å¤§é›¾",
          800: "æ™´",
          801: "æ™´ï¼Œå°‘äº‘",
          802: "å¤šäº‘",
          803: "å¤šäº‘",
          804: "é˜´ï¼Œå¤šäº‘",
          900: "é¾™å·é£Ž",
          901: "çƒ­å¸¦é£Žæš´",
          902: "é£“é£Ž",
          903: "å†·",
          904: "çƒ­",
          905: "å¤§é£Ž",
          906: "å†°é›¹",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      cz: {
        name: "Czech",
        main: "",
        description: {
          200: "bouÅ™ka se slabÃ½m deÅ¡tÄ›m",
          201: "bouÅ™ka a dÃ©Å¡Å¥",
          202: "bouÅ™ka se silnÃ½m deÅ¡tÄ›m",
          210: "slabÅ¡Ã­ bouÅ™ka",
          211: "bouÅ™ka",
          212: "silnÃ¡ bouÅ™ka",
          221: "bouÅ™kovÃ¡ pÅ™ehÃ¡Åˆka",
          230: "bouÅ™ka se slabÃ½m mrholenÃ­m",
          231: "bouÅ™ka s mrholenÃ­m",
          232: "bouÅ™ka se silnÃ½m mrholenÃ­m",
          300: "slabÃ© mrholenÃ­",
          301: "mrholenÃ­",
          302: "silnÃ© mrholenÃ­",
          310: "slabÃ© mrholenÃ­ a dÃ©Å¡Å¥",
          311: "mrholenÃ­ s deÅ¡tÄ›m",
          312: "silnÃ© mrholenÃ­ a dÃ©Å¡Å¥",
          313: "mrholenÃ­ a pÅ™ehÃ¡Åˆky",
          314: "mrholenÃ­ a silnÃ© pÅ™ehÃ¡Åˆky",
          321: "obÄasnÃ© mrholenÃ­",
          500: "slabÃ½ dÃ©Å¡Å¥",
          501: "dÃ©Å¡Å¥",
          502: "prudkÃ½ dÃ©Å¡Å¥",
          503: "pÅ™Ã­valovÃ½ dÃ©Å¡Å¥",
          504: "prÅ¯trÅ¾ mraÄen",
          511: "mrznoucÃ­ dÃ©Å¡Å¥",
          520: "slabÃ© pÅ™ehÃ¡Åˆky",
          521: "pÅ™ehÃ¡Åˆky",
          522: "silnÃ© pÅ™ehÃ¡Åˆky",
          531: "obÄasnÃ© pÅ™ehÃ¡Åˆky",
          600: "mÃ­rnÃ© snÄ›Å¾enÃ­",
          601: "snÄ›Å¾enÃ­",
          602: "hustÃ© snÄ›Å¾enÃ­",
          611: "zmrzlÃ½ dÃ©Å¡Å¥",
          612: "smÃ­Å¡enÃ© pÅ™ehÃ¡Åˆky",
          615: "slabÃ½ dÃ©Å¡Å¥ se snÄ›hem",
          616: "dÃ©Å¡Å¥ se snÄ›hem",
          620: "slabÃ© snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
          621: "snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
          622: "silnÃ© snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
          701: "mlha",
          711: "kouÅ™",
          721: "opar",
          731: "pÃ­seÄnÃ© Äi prachovÃ© vÃ­ry",
          741: "hustÃ¡ mlha",
          751: "pÃ­sek",
          761: "praÅ¡no",
          762: "sopeÄnÃ½ popel",
          771: "prudkÃ© bouÅ™e",
          781: "tornÃ¡do",
          800: "jasno",
          801: "skoro jasno",
          802: "polojasno",
          803: "oblaÄno",
          804: "zataÅ¾eno",
          900: "tornÃ¡do",
          901: "tropickÃ¡ bouÅ™e",
          902: "hurikÃ¡n",
          903: "zima",
          904: "horko",
          905: "vÄ›trno",
          906: "krupobitÃ­",
          950: "bezvÄ›tÅ™Ã­",
          951: "vÃ¡nek",
          952: "vÄ›tÅ™Ã­k",
          953: "slabÃ½ vÃ­tr",
          954: "mÃ­rnÃ½ vÃ­tr",
          955: "ÄerstvÃ½ vÃ­tr",
          956: "silnÃ½ vÃ­tr",
          957: "prudkÃ½ vÃ­tr",
          958: "bouÅ™livÃ½ vÃ­tr",
          959: "vichÅ™ice",
          960: "silnÃ¡ vichÅ™ice",
          961: "mohutnÃ¡ vichÅ™ice",
          962: "orkÃ¡n"
        }
      },
      kr: {
        name: "Korea",
        main: "",
        description: {
          200: "thunderstorm with light rain",
          201: "thunderstorm with rain",
          202: "thunderstorm with heavy rain",
          210: "light thunderstorm",
          211: "thunderstorm",
          212: "heavy thunderstorm",
          221: "ragged thunderstorm",
          230: "thunderstorm with light drizzle",
          231: "thunderstorm with drizzle",
          232: "thunderstorm with heavy drizzle",
          300: "light intensity drizzle",
          301: "drizzle",
          302: "heavy intensity drizzle",
          310: "light intensity drizzle rain",
          311: "drizzle rain",
          312: "heavy intensity drizzle rain",
          321: "shower drizzle",
          500: "light rain",
          501: "moderate rain",
          502: "heavy intensity rain",
          503: "very heavy rain",
          504: "extreme rain",
          511: "freezing rain",
          520: "light intensity shower rain",
          521: "shower rain",
          522: "heavy intensity shower rain",
          600: "light snow",
          601: "snow",
          602: "heavy snow",
          611: "sleet",
          621: "shower snow",
          701: "mist",
          711: "smoke",
          721: "haze",
          731: "sand/dust whirls",
          741: "fog",
          800: "sky is clear",
          801: "few clouds",
          802: "scattered clouds",
          803: "broken clouds",
          804: "overcast clouds",
          900: "tornado",
          901: "tropical storm",
          902: "hurricane",
          903: "cold",
          904: "hot",
          905: "windy",
          906: "hail",
          950: "Setting",
          951: "Calm",
          952: "Light breeze",
          953: "Gentle Breeze",
          954: "Moderate breeze",
          955: "Fresh Breeze",
          956: "Strong breeze",
          957: "High wind, near gale",
          958: "Gale",
          959: "Severe Gale",
          960: "Storm",
          961: "Violent Storm",
          962: "Hurricane"
        }
      },
      gl: {
        name: "Galician",
        main: "",
        description: {
          200: "tormenta elÃ©ctrica con choiva lixeira",
          201: "tormenta elÃ©ctrica con choiva",
          202: "tormenta elÃ©ctrica con choiva intensa",
          210: "tormenta elÃ©ctrica lixeira",
          211: "tormenta elÃ©ctrica",
          212: "tormenta elÃ©ctrica forte",
          221: "tormenta elÃ©ctrica irregular",
          230: "tormenta elÃ©ctrica con orballo lixeiro",
          231: "tormenta elÃ©ctrica con orballo",
          232: "tormenta elÃ©ctrica con orballo intenso",
          300: "orballo lixeiro",
          301: "orballo",
          302: "orballo de gran intensidade",
          310: "choiva e orballo lixeiro",
          311: "choiva e orballo",
          312: "choiva e orballo de gran intensidade",
          321: "orballo de ducha",
          500: "choiva lixeira",
          501: "choiva moderada",
          502: "choiva de gran intensidade",
          503: "choiva moi forte",
          504: "choiva extrema",
          511: "choiva xeada",
          520: "choiva de ducha de baixa intensidade",
          521: "choiva de ducha",
          522: "choiva de ducha de gran intensidade",
          600: "nevada lixeira",
          601: "neve",
          602: "nevada intensa",
          611: "auganeve",
          621: "neve de ducha",
          701: "nÃ©boa",
          711: "fume",
          721: "nÃ©boa lixeira",
          731: "remuiÃ±os de area e polvo",
          741: "bruma",
          800: "ceo claro",
          801: "algo de nubes",
          802: "nubes dispersas",
          803: "nubes rotas",
          804: "nubes",
          900: "tornado",
          901: "tormenta tropical",
          902: "furacÃ¡n",
          903: "frÃ­o",
          904: "calor",
          905: "ventoso",
          906: "sarabia",
          951: "calma",
          952: "Vento frouxo",
          953: "Vento suave",
          954: "Vento moderado",
          955: "Brisa",
          956: "Vento forte",
          957: "Vento forte, prÃ³ximo a vendaval",
          958: "Vendaval",
          959: "Vendaval forte",
          960: "Tempestade",
          961: "Tempestade violenta",
          962: "FuracÃ¡n"
        }
      },
      vi: {
        name: "vietnamese",
        main: "",
        description: {
          200: "GiÃ´ng bÃ£o vÃ  MÆ°a nháº¹",
          201: "GiÃ´ng bÃ£o vÃ  MÆ°a",
          202: "GiÃ´ng bÃ£o MÆ°a lá»›n",
          210: "GiÃ´ng bÃ£o cÃ³ chá»›p giáº­t",
          211: "BÃ£o",
          212: "GiÃ´ng bÃ£o lá»›n",
          221: "BÃ£o vÃ i nÆ¡i",
          230: "GiÃ´ng bÃ£o vÃ  MÆ°a phÃ¹n nháº¹",
          231: "GiÃ´ng bÃ£o vá»›i mÆ°a phÃ¹n",
          232: "GiÃ´ng bÃ£o vá»›i mÆ°a phÃ¹n náº·ng",
          300: "Ã¡nh sÃ¡ng cÆ°á»ng Ä‘á»™ mÆ°a phÃ¹n",
          301: "mÆ°a phÃ¹n",
          302: "mÆ°a phÃ¹n cÆ°á»ng Ä‘á»™ náº·ng",
          310: "mÆ°a phÃ¹n nháº¹",
          311: "mÆ°a vÃ  mÆ°a phÃ¹n",
          312: "mÆ°a vÃ  mÆ°a phÃ¹n náº·ng",
          321: "mÆ°a rÃ o vÃ  mÆ°a phÃ¹n",
          500: "mÆ°a nháº¹",
          501: "mÆ°a vá»«a",
          502: "mÆ°a cÆ°á»ng Ä‘á»™ náº·ng",
          503: "mÆ°a ráº¥t náº·ng",
          504: "mÆ°a lá»‘c",
          511: "mÆ°a láº¡nh",
          520: "mÆ°a rÃ o nháº¹",
          521: "mÆ°a rÃ o",
          522: "mÆ°a rÃ o cÆ°á»ng Ä‘á»™ náº·ng",
          600: "tuyáº¿t rÆ¡i nháº¹",
          601: "tuyáº¿t",
          602: "tuyáº¿t náº·ng háº¡t",
          611: "mÆ°a Ä‘Ã¡",
          621: "tuyáº¿t mÃ¹ trá»i",
          701: "sÆ°Æ¡ng má»",
          711: "khÃ³i bá»¥i",
          721: "Ä‘Ã¡m mÃ¢y",
          731: "bÃ£o cÃ¡t vÃ  lá»‘c xoÃ¡y",
          741: "sÆ°Æ¡ng mÃ¹",
          800: "báº§u trá»i quang Ä‘Ã£ng",
          801: "mÃ¢y thÆ°a",
          802: "mÃ¢y ráº£i rÃ¡c",
          803: "mÃ¢y cá»¥m",
          804: "mÃ¢y Ä‘en u Ã¡m",
          900: "lá»‘c xoÃ¡y",
          901: "cÆ¡n bÃ£o nhiá»‡t Ä‘á»›i",
          902: "bÃ£o lá»‘c",
          903: "láº¡nh",
          904: "nÃ³ng",
          905: "giÃ³",
          906: "mÆ°a Ä‘Ã¡",
          950: "Cháº¿ Ä‘á»",
          951: "Nháº¹ nhÃ ng",
          952: "Ãnh sÃ¡ng nháº¹",
          953: "GÃ­o thoáº£ng",
          954: "GiÃ³ nháº¹",
          955: "GiÃ³ vá»«a pháº£i",
          956: "GiÃ³ máº¡nh",
          957: "GiÃ³ xoÃ¡y",
          958: "Lá»‘c xoÃ¡y",
          959: "Lá»‘c xoÃ¡y náº·ng",
          960: "BÃ£o",
          961: "BÃ£o cáº¥p lá»›n",
          962: "BÃ£o lá»‘c"
        }
      },
      ar: {
        name: "Arabic",
        main: "",
        description: {
          200: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø£Ù…Ø·Ø§Ø± Ø®ÙÙŠÙØ©",
          201: "Ø§Ù„Ø¹ÙˆØ§ØµÙ Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø§Ù„Ù…Ø·Ø±",
          202: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø§Ù…Ø·Ø§Ø± ØºØ²ÙŠØ±Ø©",
          210: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø®ÙÙŠÙØ©",
          211: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ©",
          212: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø«Ù‚ÙŠÙ„Ø©",
          221: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø®Ø´Ù†Ø©",
          230: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø° Ø®ÙÙŠÙ",
          231: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø°",
          232: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø° ØºØ²ÙŠØ±Ø©",
          300: "Ø±Ø°Ø§Ø° Ø®ÙÙŠÙ Ø§Ù„ÙƒØ«Ø§ÙØ©",
          301: "Ø±Ø°Ø§Ø°",
          302: "Ø±Ø°Ø§Ø° Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
          310: "Ø±Ø°Ø§Ø° Ù…Ø·Ø± Ø®ÙÙŠÙ Ø§Ù„ÙƒØ«Ø§ÙØ©",
          311: "Ø±Ø°Ø§Ø° Ù…Ø·Ø±",
          312: "Ø±Ø°Ø§Ø° Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
          321: "ÙˆØ§Ø¨Ù„ Ø±Ø°Ø§Ø°",
          500: "Ù…Ø·Ø± Ø®ÙÙŠÙ",
          501: "Ù…Ø·Ø± Ù…ØªÙˆØ³Ø· Ø§Ù„ØºØ²Ø§Ø±Ø©",
          502: "Ù…Ø·Ø± ØºØ²ÙŠØ±",
          503: "Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ØºØ²Ø§Ø±Ø©",
          504: "Ù…Ø·Ø± Ø¹Ø§Ù„ÙŠ Ø§Ù„ØºØ²Ø§Ø±Ø©",
          511: "Ù…Ø·Ø± Ø¨Ø±Ø¯",
          520: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø± Ø®ÙÙŠÙ",
          521: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø±",
          522: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
          600: "Ø«Ù„ÙˆØ¬ Ø®ÙÙŠÙÙ‡",
          601: "Ø«Ù„ÙˆØ¬",
          602: "Ø«Ù„ÙˆØ¬ Ù‚ÙˆÙŠØ©",
          611: "ØµÙ‚ÙŠØ¹",
          621: "ÙˆØ§Ø¨Ù„ Ø«Ù„ÙˆØ¬",
          701: "Ø¶Ø¨Ø§Ø¨",
          711: "Ø¯Ø®Ø§Ù†",
          721: "ØºÙŠÙˆÙ…",
          731: "ØºØ¨Ø§Ø±",
          741: "ØºÙŠÙ…",
          800: "Ø³Ù…Ø§Ø¡ ØµØ§ÙÙŠØ©",
          801: "ØºØ§Ø¦Ù… Ø¬Ø²Ø¦",
          802: "ØºÙŠÙˆÙ… Ù…ØªÙØ±Ù‚Ø©",
          803: "ØºÙŠÙˆÙ… Ù…ØªÙ†Ø§Ø«Ø±Ù‡",
          804: "ØºÙŠÙˆÙ… Ù‚Ø§ØªÙ…Ø©",
          900: "Ø¥Ø¹ØµØ§Ø±",
          901: "Ø¹Ø§ØµÙØ© Ø§Ø³ØªÙˆØ§Ø¦ÙŠØ©",
          902: "Ø²ÙˆÙŠØ¹Ø©",
          903: "Ø¨Ø§Ø±Ø¯",
          904: "Ø­Ø§Ø±",
          905: "Ø±ÙŠØ§Ø­",
          906: "ÙˆØ§Ø¨Ù„",
          950: "Ø¥Ø¹Ø¯Ø§Ø¯",
          951: "Ù‡Ø§Ø¯Ø¦",
          952: "Ù†Ø³ÙŠÙ… Ø®ÙÙŠÙ",
          953: "Ù†Ø³ÙŠÙ… Ù„Ø·ÙŠÙ",
          954: "Ù†Ø³ÙŠÙ… Ù…Ø¹ØªØ¯Ù„",
          955: "Ù†Ø³ÙŠÙ… Ø¹Ù„ÙŠÙ„",
          956: "Ù†Ø³ÙŠÙ… Ù‚ÙˆÙŠ",
          957: "Ø±ÙŠØ§Ø­ Ù‚ÙˆÙŠØ©",
          958: "Ø¹Ø§ØµÙ",
          959: "Ø¹Ø§ØµÙØ© Ø´Ø¯ÙŠØ¯Ø©",
          960: "Ø¹Ø§ØµÙØ©",
          961: "Ø¹Ø§ØµÙØ© Ø¹Ù†ÙŠÙØ©",
          962: "Ø¥Ø¹ØµØ§Ø±"
        }
      },
      mk: {
        name: "Macedonian", main: "", description: {
          200: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
          201: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ Ð´Ð¾Ð¶Ð´",
          202: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
          210: "ÑÐ»Ð°Ð±Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
          211: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
          212: "ÑÐ¸Ð»Ð½Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
          221: "Ð¼Ð½Ð¾Ð³Ñƒ ÑÐ¸Ð»Ð½Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
          230: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          231: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ Ñ€Ð¾ÑÐµÑšÐµ",
          232: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          300: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          301: "Ñ€Ð¾ÑÐµÑšÐµ",
          302: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          310: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          311: "Ñ€Ð¾ÑÐµÑšÐµ",
          312: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          321: "Ð´Ð¾Ð¶Ð´",
          500: "ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
          501: "ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
          502: "ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
          503: "Ð¼Ð½Ð¾Ð³Ñƒ ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
          504: "Ð¾Ð±Ð¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
          511: "Ð³Ñ€Ð°Ð´",
          520: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          521: "Ñ€Ð¾ÑÐ¸",
          522: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
          600: "ÑÐ»Ð°Ð± ÑÐ½ÐµÐ³",
          601: "ÑÐ½ÐµÐ³",
          602: "ÑÐ¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³",
          611: "Ð»Ð°Ð¿Ð°Ð²Ð¸Ñ†Ð°",
          621: "Ð»Ð°Ð¿Ð°Ð²Ð¸Ñ†Ð°",
          701: "Ð¼Ð°Ð³Ð»Ð°",
          711: "ÑÐ¼Ð¾Ð³",
          721: "Ð·Ð°Ð¼Ð°Ð³Ð»ÐµÐ½Ð¾ÑÑ‚",
          731: "Ð¿ÐµÑÐ¾Ñ‡ÐµÐ½ Ð²Ñ€Ñ‚Ð»Ð¾Ð³",
          741: "Ð¼Ð°Ð³Ð»Ð°",
          800: "Ñ‡Ð¸ÑÑ‚Ð¾ Ð½ÐµÐ±Ð¾",
          801: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
          802: "Ð¾Ð´Ð²Ð¾ÐµÐ½Ð¸ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
          803: "Ð¾Ð±Ð»Ð°Ñ†Ð¸",
          804: "Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
          900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
          901: "Ñ‚Ñ€Ð¾Ð¿ÑÐºÐ° Ð±ÑƒÑ€Ð°",
          902: "ÑƒÑ€Ð°Ð³Ð°Ð½",
          903: "Ð»Ð°Ð´Ð½Ð¾",
          904: "Ñ‚Ð¾Ð¿Ð»Ð¾",
          905: "Ð²ÐµÑ‚Ñ€Ð¾Ð²Ð¸Ñ‚Ð¾",
          906: "Ð³Ñ€Ð°Ð´",
          950: "Ð—Ð°Ð»ÐµÐ·",
          951: "ÐœÐ¸Ñ€Ð½Ð¾",
          952: "Ð¡Ð»Ð°Ð± Ð²ÐµÑ‚Ð°Ñ€",
          953: "Ð¡Ð»Ð°Ð± Ð²ÐµÑ‚Ð°Ñ€",
          954: "Ð’ÐµÑ‚Ð°Ñ€",
          955: "Ð¡Ð²ÐµÐ¶ Ð²ÐµÑ‚Ð°Ñ€",
          956: "Ð¡Ð¸Ð»ÐµÐ½ Ð²ÐµÑ‚Ð°Ñ€",
          957: "ÐœÐ½Ð¾Ð³Ñƒ ÑÐ¸Ð»ÐµÐ½ Ð²ÐµÑ‚Ð°Ñ€",
          958: "ÐÐµÐ²Ñ€ÐµÐ¼Ðµ",
          959: "Ð¡Ð¸Ð»Ð½Ð¾ Ð½ÐµÐ²Ñ€ÐµÐ¼Ðµ",
          960: "Ð‘ÑƒÑ€Ð°",
          961: "Ð¡Ð¸Ð»Ð½Ð° Ð±ÑƒÑ€Ð°",
          962: "Ð£Ñ€Ð°Ð³Ð°Ð½"
        }
      },
      sk: {
        name: "Slovak",
        main: "",
        description: {
          200: "bÃºrka so slabÃ½m daÅ¾Äom",
          201: "bÃºrka s daÅ¾Äom",
          202: "bÃºrka so silnÃ½m daÅ¾Äom",
          210: "mierna bÃºrka",
          211: "bÃºrka",
          212: "silnÃ¡ bÃºrka",
          221: "prudkÃ¡ bÃºrka",
          230: "bÃºrka so slabÃ½m mrholenÃ­m",
          231: "bÃºrka s mrholenÃ­m",
          232: "bÃºrka so silnÃ½m mrholenÃ­m",
          300: "slabÃ© mrholenie",
          301: "mrholenie",
          302: "silnÃ© mrholenie",
          310: "slabÃ© popÅ•chanie",
          311: "popÅ•chanie",
          312: "silnÃ© popÅ•chanie",
          321: "jemnÃ© mrholenie",
          500: "slabÃ½ dÃ¡Å¾Ä",
          501: "mierny dÃ¡Å¾Ä",
          502: "silnÃ½ dÃ¡Å¾Ä",
          503: "veÄ¾mi silnÃ½ dÃ¡Å¾Ä",
          504: "extrÃ©mny dÃ¡Å¾Ä",
          511: "mrznÃºci dÃ¡Å¾Ä",
          520: "slabÃ¡ prehÃ¡nka",
          521: "prehÃ¡nka",
          522: "silnÃ¡ prehÃ¡nka",
          600: "slabÃ© sneÅ¾enie",
          601: "sneÅ¾enie",
          602: "silnÃ© sneÅ¾enie",
          611: "dÃ¡Å¾Ä so snehom",
          621: "snehovÃ¡ prehÃ¡nka",
          701: "hmla",
          711: "dym",
          721: "opar",
          731: "pieskovÃ©/praÅ¡nÃ© vÃ­ry",
          741: "hmla",
          800: "jasnÃ¡ obloha",
          801: "takmer jasno",
          802: "polojasno",
          803: "oblaÄno",
          804: "zamraÄenÃ©",
          900: "tornÃ¡do",
          901: "tropickÃ¡ bÃºrka",
          902: "hurikÃ¡n",
          903: "zima",
          904: "horÃºco",
          905: "veterno",
          906: "krupobitie",
          950: "Nastavenie",
          951: "Bezvetrie",
          952: "SlabÃ½ vÃ¡nok",
          953: "JemnÃ½ vietor",
          954: "StrednÃ½ vietor",
          955: "ÄŒerstvÃ½ vietor",
          956: "SilnÃ½ vietor",
          957: "SilnÃ½ vietor, takmer vÃ­chrica",
          958: "VÃ­chrica",
          959: "SilnÃ¡ vÃ­chrica",
          960: "BÃºrka",
          961: "NiÄivÃ¡ bÃºrka",
          962: "HurikÃ¡n"
        }
      },
      hu: {
        name: "Hungarian",
        main: "",
        description: {
          200: "vihar enyhe esÅ‘vel",
          201: "vihar esÅ‘vel",
          202: "vihar heves esÅ‘vel",
          210: "enyhe zivatar",
          211: "vihar",
          212: "heves vihar",
          221: "durva vihar",
          230: "vihar enyhe szitÃ¡lÃ¡ssal",
          231: "vihar szitÃ¡lÃ¡ssal",
          232: "vihar erÅ‘s szitÃ¡lÃ¡ssal",
          300: "enyhe intenzitÃ¡sÃº szitÃ¡lÃ¡s",
          301: "szitÃ¡lÃ¡s",
          302: "erÅ‘s intenzitÃ¡sÃº szitÃ¡lÃ¡s",
          310: "enyhe intenzitÃ¡sÃº szitÃ¡lÃ³ esÅ‘",
          311: "szitÃ¡lÃ³ esÅ‘",
          312: "erÅ‘s intenzitÃ¡sÃº szitÃ¡lÃ³ esÅ‘",
          321: "zÃ¡por",
          500: "enyhe esÅ‘",
          501: "kÃ¶zepes esÅ‘",
          502: "heves intenzitÃ¡sÃº esÅ‘",
          503: "nagyon heves esÅ‘",
          504: "extrÃ©m esÅ‘",
          511: "Ã³nos esÅ‘",
          520: "enyhe intenzitÃ¡sÃº zÃ¡por",
          521: "zÃ¡por",
          522: "erÅ‘s intenzitÃ¡sÃº zÃ¡por",
          600: "enyhe havazÃ¡s",
          601: "havazÃ¡s",
          602: "erÅ‘s havazÃ¡s",
          611: "havas esÅ‘",
          621: "hÃ³zÃ¡por",
          701: "gyenge kÃ¶d",
          711: "kÃ¶d",
          721: "kÃ¶d",
          731: "homokvihar",
          741: "kÃ¶d",
          800: "tiszta Ã©gbolt",
          801: "kevÃ©s felhÅ‘",
          802: "szÃ³rvÃ¡nyos felhÅ‘zet",
          803: "erÅ‘s felhÅ‘zet",
          804: "borÃºs Ã©gbolt",
          900: "tornÃ¡dÃ³",
          901: "trÃ³pusi vihar",
          902: "hurrikÃ¡n",
          903: "hÅ±vÃ¶s",
          904: "forrÃ³",
          905: "szeles",
          906: "jÃ©gesÅ‘",
          950: "Nyugodt",
          951: "Csendes",
          952: "Enyhe szellÅ‘",
          953: "Finom szellÅ‘",
          954: "KÃ¶zepes szÃ©l",
          955: "Ã‰lÃ©nk szÃ©l",
          956: "ErÅ‘s szÃ©l",
          957: "ErÅ‘s, mÃ¡r viharos szÃ©l",
          958: "Viharos szÃ©l",
          959: "ErÅ‘sen viharos szÃ©l",
          960: "SzÃ©lvihar",
          961: "TombolÃ³ szÃ©lvihar",
          962: "HurrikÃ¡n"
        }
      },
      ca: {
        name: "Catalan",
        main: "",
        description: {
          200: "Tempesta amb pluja suau",
          201: "Tempesta amb pluja",
          202: "Tempesta amb pluja intensa",
          210: "Tempesta suau",
          211: "Tempesta",
          212: "Tempesta forta",
          221: "Tempesta irregular",
          230: "Tempesta amb plugim suau",
          231: "Tempesta amb plugin",
          232: "Tempesta amb molt plugim",
          300: "Plugim suau",
          301: "Plugim",
          302: "Plugim intens",
          310: "Plugim suau",
          311: "Plugim",
          312: "Plugim intens",
          313: "Pluja",
          314: "Pluja intensa",
          321: "Plugim",
          500: "Pluja suau",
          501: "Pluja",
          502: "Pluja intensa",
          503: "Pluja molt intensa",
          504: "Pluja extrema",
          511: "Pluja glaÃ§ada",
          520: "Pluja suau",
          521: "Pluja suau",
          522: "Pluja intensa",
          531: "Pluja irregular",
          600: "Nevada suau",
          601: "Nevada",
          602: "Nevada intensa",
          611: "Aiguaneu",
          612: "Pluja d'aiguaneu",
          615: "Plugim i neu",
          616: "Pluja i neu",
          620: "Nevada suau",
          621: "Nevada",
          622: "Nevada intensa",
          701: "Boira",
          711: "Fum",
          721: "Boirina",
          731: "Sorra",
          741: "Boira",
          751: "Sorra",
          761: "Pols",
          762: "Cendra volcÃ nica",
          771: "XÃ fec",
          781: "Tornado",
          800: "Cel net",
          801: "Lleugerament ennuvolat",
          802: "NÃºvols dispersos",
          803: "Nuvolositat variable",
          804: "Ennuvolat",
          900: "Tornado",
          901: "Tempesta tropical",
          902: "HuracÃ ",
          903: "Fred",
          904: "Calor",
          905: "Vent",
          906: "Pedra",
          950: "",
          951: "Calmat",
          952: "Brisa suau",
          953: "Brisa agradable",
          954: "Brisa moderada",
          955: "Brisa fresca",
          956: "Brisca fora",
          957: "Vent intens",
          958: "Vendaval",
          959: "Vendaval sever",
          960: "Tempesta",
          961: "Tempesta violenta",
          962: "HuracÃ "
        }
      },
      hr: {
        name: "Croatian",
        main: "",
        description: {
          200: "grmljavinska oluja s slabom kiÅ¡om",
          201: "grmljavinska oluja s kiÅ¡om",
          202: "grmljavinska oluja s jakom kiÅ¡om",
          210: "slaba grmljavinska oluja",
          211: "grmljavinska oluja",
          212: "jaka grmljavinska oluja",
          221: "orkanska grmljavinska oluja",
          230: "grmljavinska oluja sa slabom rosuljom",
          231: "grmljavinska oluja s rosuljom",
          232: "grmljavinska oluja sa jakom rosuljom",
          300: "rosulja slabog intenziteta",
          301: "rosulja",
          302: "rosulja jakog intenziteta",
          310: "rosulja s kiÅ¡om slabog intenziteta",
          311: "rosulja s kiÅ¡om",
          312: "rosulja s kiÅ¡om jakog intenziteta",
          313: "pljuskovi i rosulja",
          314: "rosulja s jakim pljuskovima",
          321: "rosulja s pljuskovima",
          500: "slaba kiÅ¡a",
          501: "umjerena kiÅ¡a",
          502: "kiÅ¡a jakog intenziteta",
          503: "vrlo jaka kiÅ¡a",
          504: "ekstremna kiÅ¡a",
          511: "ledena kiÅ¡a",
          520: "pljusak slabog intenziteta",
          521: "pljusak",
          522: "pljusak jakog intenziteta",
          531: "olujna kiÅ¡a s pljuskovima",
          600: "slabi snijeg",
          601: "snijeg",
          602: "gusti snijeg",
          611: "susnjeÅ¾ica",
          612: "susnjeÅ¾ica s pljuskovima",
          615: "slaba kiÅ¡a i snijeg",
          616: "kiÅ¡a i snijeg",
          620: "snijeg s povremenim pljuskovima",
          621: "snijeg s pljuskovima",
          622: "snijeg s jakim pljuskovima",
          701: "sumaglica",
          711: "dim",
          721: "izmaglica",
          731: "kovitlaci pijeska ili praÅ¡ine",
          741: "magla",
          751: "pijesak",
          761: "praÅ¡ina",
          762: "vulkanski pepeo",
          771: "zapusi vjetra s kiÅ¡om",
          781: "tornado",
          800: "vedro",
          801: "blaga naoblaka",
          802: "raÅ¡trkani oblaci",
          803: "isprekidani oblaci",
          804: "oblaÄno",
          900: "tornado",
          901: "tropska oluja",
          902: "orkan",
          903: "hladno",
          904: "vruÄ‡e",
          905: "vjetrovito",
          906: "tuÄa",
          950: "",
          951: "lahor",
          952: "povjetarac",
          953: "slab vjetar",
          954: "umjeren vjetar",
          955: "umjereno jak vjetar",
          956: "jak vjetar",
          957: "Å¾estok vjetar",
          958: "olujni vjetar",
          959: "jak olujni vjetar",
          960: "orkanski vjetar",
          961: "jak orkanski vjetar",
          962: "orkan"
        }
      },
      blank: {
        name: "Catalan",
        main: "",
        description: {
          200: "",
          201: "",
          202: "",
          210: "",
          211: "",
          212: "",
          221: "",
          230: "",
          231: "",
          232: "",
          300: "",
          301: "",
          302: "",
          310: "",
          311: "",
          312: "",
          313: "",
          314: "",
          321: "",
          500: "",
          501: "",
          502: "",
          503: "",
          504: "",
          511: "",
          520: "",
          521: "",
          522: "",
          531: "",
          600: "",
          601: "",
          602: "",
          611: "",
          612: "",
          615: "",
          616: "",
          620: "",
          621: "",
          622: "",
          701: "",
          711: "",
          721: "",
          731: "",
          741: "",
          751: "",
          761: "",
          762: "",
          771: "",
          781: "",
          800: "",
          801: "",
          802: "",
          803: "",
          804: "",
          900: "",
          901: "",
          902: "",
          903: "",
          904: "",
          905: "",
          906: "",
          950: "",
          951: "",
          952: "",
          953: "",
          954: "",
          955: "",
          956: "",
          957: "",
          958: "",
          959: "",
          960: "",
          961: "",
          962: ""
        }
      }
    }
  }, {}],
  3: [function (e, t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    a.windSpeed = {
      en: {
        Settings: {speed_interval: [0, .3], desc: "0-1   Smoke rises straight up"},
        Calm: {speed_interval: [.3, 1.6], desc: "1-3 One can see downwind of the smoke drift"},
        "Light breeze": {
          speed_interval: [1.6, 3.3],
          desc: "4-6 One can feel the wind. The leaves on the trees move, the wind can lift small streamers."
        },
        "Gentle Breeze": {
          speed_interval: [3.4, 5.5],
          desc: "7-10 Leaves and twigs move. Wind extends light flag and pennants"
        },
        "Moderate breeze": {
          speed_interval: [5.5, 8],
          desc: "11-16   The wind raises dust and loose papers, touches on the twigs and small branches, stretches larger flags and pennants"
        },
        "Fresh Breeze": {
          speed_interval: [8, 10.8],
          desc: "17-21   Small trees in leaf begin to sway. The water begins little waves to peak"
        },
        "Strong breeze": {
          speed_interval: [10.8, 13.9],
          desc: "22-27   Large branches and smaller tribes moves. The whiz of telephone lines. It is difficult to use the umbrella. A resistance when running."
        },
        "High wind, near gale": {
          speed_interval: [13.9, 17.2],
          desc: "28-33   Whole trees in motion. It is hard to go against the wind."
        },
        Gale: {
          speed_interval: [17.2, 20.7],
          desc: "34-40   The wind break twigs of trees. It is hard to go against the wind."
        },
        "Severe Gale": {
          speed_interval: [20.8, 24.5],
          desc: "41-47   All large trees swaying and throws. Tiles can blow down."
        },
        Storm: {speed_interval: [24.5, 28.5], desc: "48-55   Rare inland. Trees uprooted. Serious damage to houses."},
        "Violent Storm": {speed_interval: [28.5, 32.7], desc: "56-63   Occurs rarely and is followed by destruction."},
        Hurricane: {speed_interval: [32.7, 64], desc: "Occurs very rarely. Unusually severe damage."}
      }
    }
  }, {}],
  4: [function (e, t, a) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var i = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t
      }
    }(), n = function () {
      function e() {
        r(this, e), this.baseURL = document.location.protocol + "//openweathermap.org/themes/openweathermap/assets/vendor/owm", this.scriptD3SRC = this.baseURL + "/js/libs/d3.min.js", this.scriptSRC = this.baseURL + "/js/weather-widget-generator.js", this.mapWidgets = {
          "widget-1-left-blue": {
            code: '<script src="' + this.scriptD3SRC + '"><\/script>\n                       ' + this.getCodeForGenerateWidget(2, 524901, "Moscow", ""),
            schema: "blue"
          },
          "widget-2-left-blue": {
            code: "<script type=\"text/javascript\">\n                            myWidgetParam = {\n                                id: 2,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                      <\/script>",
            schema: "blue"
          },
          "widget-3-left-blue": {code: "script.js?type=left&schema=blue&id=3", schema: "blue"},
          "widget-4-left-blue": {code: "script.js?type=left&schema=blue&id=4", schema: "blue"},
          "widget-5-right-blue": {code: "script.js?type=right&schema=blue&id=5", schema: "blue"},
          "widget-6-right-blue": {code: "script.js?type=right&schema=blue&id=6", schema: "blue"},
          "widget-7-right-blue": {code: "script.js?type=right&schema=blue&id=7", schema: "blue"},
          "widget-8-right-blue": {code: "script.js?type=right&schema=blue&id=8", schema: "blue"},
          "widget-9-right-blue": {code: "script.js?type=right&schema=blue&id=9", schema: "blue"},
          "widget-1-left-brown": {
            code: '<script src="' + this.scriptD3SRC + "\"><\/script>\n                            <script type=\"text/javascript\">\n                                    myWidgetParam = {\n                                    id: 10,\n                                    cityid: 524901,\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " + this.scriptSRC + ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n                            <\/script>",
            schema: "brown"
          },
          "widget-2-left-brown": {
            code: "<script type=\"text/javascript\">\n                            myWidgetParam = {\n                                id: 11,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        <\/script>",
            schema: "brown"
          },
          "widget-3-left-brown": {
            code: "<script type=\"text/javascript\">\n                            myWidgetParam = {\n                                id: 12,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        <\/script>",
            schema: "brown"
          },
          "widget-4-left-brown": {code: "script.js?type=left&schema=brown&id=4", schema: "brown"},
          "widget-5-right-brown": {code: "script.js?type=left&schema=brown&id=5", schema: "brown"},
          "widget-6-right-brown": {code: "script.js?type=left&schema=brown&id=6", schema: "brown"},
          "widget-7-right-brown": {code: "script.js?type=right&schema=brown&id=7", schema: "brown"},
          "widget-8-right-brown": {code: "script.js?type=right&schema=brown&id=8", schema: "brown"},
          "widget-9-right-brown": {code: "script.js?type=right&schema=brown&id=9", schema: "brown"},
          "widget-1-left-white": {code: "script.js?type=left&schema=white&id=1", schema: "none"},
          "widget-2-left-white": {code: "script.js?type=left&schema=white&id=2", schema: "none"},
          "widget-3-left-white": {code: "script.js?type=left&schema=white&id=3", schema: "none"},
          "widget-4-left-white": {code: "script.js?type=left&schema=white&id=4", schema: "none"}
        }, this.domElements = {
          id1: {
            id: 1,
            type: "left",
            schema: "blue",
            colorPolilyne: "#DDF730",
            dom: '\n                    <div class="widget-left widget-left--blue">\n                    <div class="widget-left-menu widget-left-menu--blue">\n                      <div class="widget-left-menu__layout">\n                        <h1 class="widget-left-menu__header">Weather</h1>\n                        <div class="widget-left-menu__links"><span>More at</span><span href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</span></div>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number">0<sup class="weather-left-card__degree">0</sup></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means">-</p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item">Today<img src="" width="32" height="32" alt="Today"/></li>\n                          <li class="calendar__item">Sat<img src="" width="32" height="32" alt="Sat"/></li>\n                          <li class="calendar__item">Sun<img src="" width="32" height="32" alt="Sun"/></li>\n                          <li class="calendar__item">Mon<img src="" width="32" height="32" alt="Mon"/></li>\n                          <li class="calendar__item">Tue<img src="" width="32" height="32" alt="Tue"/></li>\n                          <li class="calendar__item">Wed<img src="" width="32" height="32" alt="Wed"/></li>\n                          <li class="calendar__item">Thu<img src="" width="32" height="32" alt="Thu"/></li>\n                          <li class="calendar__item">Fri<img src="" width="32" height="32" alt="Fri"/></li>\n                        </ul>\n                        <div id="graphic1" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>'
          },
          id2: {
            id: 2,
            type: "left",
            schema: "blue",
            dom: '<div class="widget-left widget-left--compact widget-left--blue">\n                            <div class="widget-left-menu widget-left-menu--compact widget-left-menu--blue">\n                                <div class="widget-left-menu__layout widget-left-menu__layout--blue">\n                                <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1>\n                                </div>\n                            </div>\n                            <div class="widget-left__body widget-left__body--compact widget-left__body--blue">\n                                <div class="weather-left-card weather-left-card--compact">\n                                <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                                <div class="weather-left-card__col">\n                                    <p class="weather-left-card__number">-<span class="weather-left-card__degree">0</span></p><span class="weather-left-card__rising">and rising</span>\n                                </div>\n                            </div>\n                            <div class="weather-left-card__row2">\n                                <p class="weather-left-card__means">-</p>\n                                <p class="weather-left-card__wind">Wind:</p>\n                            </div>\n                            </div>\n                            <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--blue">\n                                <div class="widget-left-menu__layout widget-left-menu__layout--blue"><span>More at</span><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                            </div>\n                            </div>\n                        </div>'
          },
          id3: {
            id: 3,
            type: "left",
            schema: "blue",
            dom: '<div class="widget-left widget-left--small widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                  <ul class="calendar calendar--small">\n                    <li class="calendar__item calendar__item--blue"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/04n.png"></li>\n                  </ul>\n                  <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--blue">\n                  <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                    <div class="widget-left__date">20:16 Mar 28</div>\n                  </div>\n                </div>\n              </div>'
          },
          id4: {
            id: 4,
            type: "left",
            schema: "blue",
            dom: '<div class="widget-left widget-left--small widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                  <ul class="calendar calendar--small2">\n                    <li class="calendar__item calendar__item--blue"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/04n.png"></li>\n                  </ul>\n                  <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--blue">\n                <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                <div class="widget-left__date">20:16 Mar 28</div>\n                </div>\n                </div>\n              </div>'
          },
          id5: {
            id: 5,
            type: "right",
            schema: "blue",
            dom: '<div class="widget-right weather-right--type1 widget-right--blue">\n                <div class="widget-right__header widget-right__header--blue">\n                  <div class="widget-right__layout">\n                  <h1 class="widget-right__title">Moscow, RU</h1>\n                  <p class="widget-right__description">light shower snow</p>\n                  </div><img width="128" height="128" alt="Weather in Moscow, RU" class="weather-right__icon weather-right__icon--type1" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13n.png">\n                </div>\n                <div class="weather-right weather-right--type1 weather-right--blue">\n                  <div class="weather-right__layout">\n                  <div class="weather-right__temperature">-3<span>°</span></div>\n                  <div class="weather-right__weather">\n                    <div class="weather-right-card">\n                    <table class="weather-right__table">\n                      <tbody><tr class="weather-right__items">\n                      <th colspan="2" class="weather-right__item">Details</th>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Feels like</td>\n                      <td class="weather-right__item weather-right__feels">-3<span>°</span></td>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Wind</td>\n                      <td class="weather-right__item weather-right__wind-speed">3 m/s West</td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Humidity</td>\n                      <td class="weather-right__item weather-right__humidity">86%</td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Precip</td>\n                      <td class="weather-right__item"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Pressure</td>\n                      <td class="weather-right__item weather-right__pressure">1023 mb</td>\n                      </tr>\n                    </tbody></table>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n                <div class="widget-right__footer widget-right__footer--blue">\n                  <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-right__link">OpenWeatherMap</a>\n                  <div class="widget-right__date">09:27 Dec 30</div>\n                  </div>\n                </div>\n              </div>'
          },
          id6: {
            id: 6,
            type: "right",
            schema: "blue",
            dom: '<div class="widget-right widget-right--type2 widget-right--blue">\n                          <div class="widget-right__header widget-right__header--blue">\n                            <div class="widget-right__layout">\n                              <h1 class="widget-right__title">Moscow</h1>\n                              <p class="widget-right__description">Cloudy Skies</p>\n                            </div>\n                          </div>\n                          <div class="weather-right weather-right--blue weather-right--type2">\n                            <div class="weather-right__layout">\n                              <div class="weather-right__temperature">-10<span class="widget-right__units">&#176;</span></div>\n                            </div>\n                          </div>\n                          <div class="widget-right__footer widget-right__footer--blue">\n                            <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                          </div>\n                      </div>'
          },
          id7: {
            id: 7,
            type: "right",
            schema: "blue",
            dom: '<div class="widget-right widget-right--type3 widget-right--blue">\n                      <div class="widget-right__header widget-right__header--blue">\n                        <div class="widget-right__layout">\n                          <h1 class="widget-right__title">Moscow</h1>\n                          <p class="widget-right__description">Cloudy Skies</p>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--blue weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature">-10<span class="widget-right__units">&#176;</span></div>\n                          <table class="weather-right-table weather-right-table--blue">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels">-13 &#176;</td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed">3 m/s W</td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pessure</td>\n                              <td class="weather-right-table__item weather-right__pressure"> 1003.0 mb</td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--blue">\n                        <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
          },
          id8: {
            id: 8,
            type: "right",
            schema: "blue",
            dom: '<div class="widget-right widget-right--type5 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title">Moscow</div>\n                      <div class="widget-right__description">Cloudy Skies</div>\n                    </div><img src="" width="64" height="64" alt="Cloudy Skies" class="weather-right__icon weather-right__icon--type5 weather-right__icon--blue"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min">-10&#176;</td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max">-14&#176;</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                    <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date">20:16 Mar 28</div>\n                    </div>\n                  </div>\n                </div>'
          },
          id9: {
            id: 9,
            type: "right",
            schema: "blue",
            dom: '<div class="widget-right widget-right--type4 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title">Moscow</div>\n                      <div class="widget-right__description">Cloudy Skies</div>\n                    </div><img src="" width="100" alt="Cloudy Skies" class="weather-right__icon weather-right__icon--type4 weather-right__icon--blue"/>\n                    <table class="weather-right-card weather-right-card--type4 weather-right-card--blue">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min">-10&#176;</td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max">-14&#176;</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                    <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date">20:16 Mar 28</div>\n                    </div>\n                  </div>\n                </div>'
          },
          id11: {
            id: 11, type: "left", schema: "brown", colorPolilyne: "#FEB020",
            dom: '<div class="widget-left">\n                    <div class="widget-left-menu widget-left-menu--brown">\n                      <div class="widget-left-menu__layout">\n                        <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1>\n                        <div class="widget-left-menu__links"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number">0<span class="weather-left-card__degree">&176;</span></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means">-</p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item">Today<img src="" width="32" height="32" alt="Today"/></li>\n                          <li class="calendar__item">Sat<img src="" width="32" height="32" alt="Sat"/></li>\n                          <li class="calendar__item">Sun<img src="" width="32" height="32" alt="Sun"/></li>\n                          <li class="calendar__item">Mon<img src="" width="32" height="32" alt="Mon"/></li>\n                          <li class="calendar__item">Tue<img src="" width="32" height="32" alt="Tue"/></li>\n                          <li class="calendar__item">Wed<img src="" width="32" height="32" alt="Wed"/></li>\n                          <li class="calendar__item">Thu<img src="" width="32" height="32" alt="Thu"/></li>\n                          <li class="calendar__item">Fri<img src="" width="32" height="32" alt="Fri"/></li>\n                        </ul>\n                        <div id="graphic2" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>'
          },
          id12: {
            id: 12,
            type: "left",
            schema: "brown",
            dom: '<div class="widget-left widget-left--compact">\n                      <div class="widget-left-menu widget-left-menu--compact widget-left-menu--brown">\n                        <div class="widget-left-menu__layout widget-left-menu__layout--brown">\n                          <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1>\n                        </div>\n                      </div>\n                      <div class="widget-left__body widget-left__body--compact">\n                        <div class="weather-left-card weather-left-card--compact">\n                          <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                            <div class="weather-left-card__col">\n                              <p class="weather-left-card__number">-<span class="weather-left-card__degree">&176;</span></p><span class="weather-left-card__rising">and rising</span>\n                            </div>\n                          </div>\n                          <div class="weather-left-card__row2">\n                            <p class="weather-left-card__means">-</p>\n                            <p class="weather-left-card__wind">Wind:</p>\n                          </div>\n                        </div>\n                        <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--brown">\n                          <div class="widget-left-menu__layout widget-left-menu__layout--brown"><span>More at</span><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                        </div>\n                      </div>\n                    </div>'
          },
          id13: {
            id: 13,
            type: "left",
            schema: "brown",
            dom: '<div class="widget-left widget-left--small widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                <ul class="calendar calendar--small">\n                  <li class="calendar__item calendar__item--brown"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13d.png"></li>\n                </ul>\n                <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--brown">\n                <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date">20:16 Mar 28</div>\n                </div>\n                </div>\n              </div>'
          },
          id14: {
            id: 14,
            type: "left",
            schema: "brown",
            dom: '<div class="widget-left widget-left--small widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                <ul class="calendar calendar--small2">\n                  <li class="calendar__item calendar__item--brown"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13d.png"></li>\n                </ul>\n                <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--brown">\n                <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date">20:16 Mar 28</div>\n                </div>\n                </div>\n              </div>'
          },
          id15: {
            id: 15,
            type: "right",
            schema: "brown",
            dom: '<div class="widget-right weather-right--type1 widget-right--brown">\n                    <div class="widget-right__header widget-right__header--brown">\n                      <div class="widget-right__layout">\n                        <h1 class="widget-right__title">Moscow</h1>\n                        <p class="widget-right__description">Cloudy Skies</p>\n                      </div><img src="" width="128" height="128" alt="Cloudy Skies" class="weather-right__icon weather-right__icon--type1"/>\n                    </div>\n                    <div class="weather-right weather-right--brown">\n                      <div class="weather-right__layout">\n                        <div class="weather-right__temperature">10<span class="widget-right__units">&#176;</span></div>\n                        <div class="weather-right__weather">\n                          <div class="weather-right-card">\n                            <table class="weather-right__table">\n                              <tr class="weather-right__items">\n                                <th colspan="2" class="weather-right__item">Details</th>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Feels like</td>\n                                <td class="weather-right__item weather-right__feels">-13<span class="widget-right-card__units">&#176;</span></td>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Wind</td>\n                                <td class="weather-right__item weather-right__wind-speed">3 m/s West</td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Humidity</td>\n                                <td class="weather-right__item weather-right__humidity">74%</td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Precip</td>\n                                <td class="weather-right__item"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Pressure</td>\n                                <td class="weather-right__item weather-right__pressure">1003.0 mb</td>\n                              </tr>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="widget-right__footer widget-right__footer--brown">\n                      <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                        <div class="widget-right__date">20:16 Mar 28</div>\n                      </div>\n                    </div>\n                  </div>'
          },
          id16: {
            id: 16,
            type: "right",
            schema: "brown",
            dom: '<div class="widget-right widget-right--type2 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <h1 class="widget-right__title">Moscow</h1>\n                          <p class="widget-right__description">Cloudy Skies</p>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type2">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature">-10<span class="widget-right__units">&#176;</span></div>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                        <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
          },
          id17: {
            id: 17,
            type: "right",
            schema: "brown",
            dom: '<div class="widget-right widget-right--type3 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <h1 class="widget-right__title">Moscow</h1>\n                          <p class="widget-right__description">Cloudy Skies</p>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature">-10<span class="widget-right__units">&#176;</span></div>\n                          <table class="weather-right-table">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels">-13 &#176;</td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed"> 3 m/s W</td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pessure</td>\n                              <td class="weather-right-table__item weather-right__pressure"> 1003.0 mb</td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                        <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
          },
          id18: {
            id: 18,
            type: "right",
            schema: "brown",
            dom: '<div class="widget-right widget-right--type5 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title">Moscow</div>\n                      <div class="widget-right__description">Cloudy Skies</div>\n                    </div><img src="" width="64" height="64" alt="Cloudy Skies" class="weather-right__icon weather-right__icon--type5 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min">-10&#176;</td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max">-14&#176;</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date">20:16 Mar 28</div>\n                    </div>\n                  </div>\n                </div>'
          },
          id19: {
            id: 19,
            type: "right",
            schema: "brown",
            dom: '<div class="widget-right widget-right--type4 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title">Moscow</div>\n                      <div class="widget-right__description">Cloudy Skies</div>\n                    </div><img src="" width="100" alt="Cloudy Skies" class="weather-right__icon weather-right__icon--type4 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min">-10&#176;</td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max">-14&#176;</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout"><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date">20:16 Mar 28</div>\n                    </div>\n                  </div>\n                </div>'
          },
          id21: {
            id: 21,
            type: "left",
            schema: "white",
            dom: '<div class="widget-left">\n                  <div class="widget-left-menu">\n                    <div class="widget-left-menu__layout">\n                      <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1>\n                      <div class="widget-left-menu__links"><span>More at</span><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                    </div>\n                  </div>\n                  <div class="widget-left__body">\n                    <div class="weather-left-card weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number">0<span class="weather-left-card__degree">&176;</span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means">-</p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left__calendar">\n                      <ul class="calendar calendar">\n                        <li class="calendar__item">Today<img src="" width="32" height="32" alt="Today"/></li>\n                        <li class="calendar__item">Sat<img src="" width="32" height="32" alt="Sat"/></li>\n                        <li class="calendar__item">Sun<img src="" width="32" height="32" alt="Sun"/></li>\n                        <li class="calendar__item">Mon<img src="" width="32" height="32" alt="Mon"/></li>\n                        <li class="calendar__item">Tue<img src="" width="32" height="32" alt="Tue"/></li>\n                        <li class="calendar__item">Wed<img src="" width="32" height="32" alt="Wed"/></li>\n                        <li class="calendar__item">Thu<img src="" width="32" height="32" alt="Thu"/></li>\n                        <li class="calendar__item">Fri<img src="" width="32" height="32" alt="Fri"/></li>\n                      </ul>\n                      <div id="graphic" class="widget-left__graphic"></div>\n                    </div>\n                  </div>\n                </div>'
          },
          id22: {
            id: 22,
            type: "left",
            schema: "white",
            dom: '<div class="widget-left widget-left--compact">\n                  <div class="widget-left-menu widget-left-menu--compact">\n                    <div class="widget-left-menu__layout">\n                      <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1>\n                    </div>\n                  </div>\n                  <div class="widget-left__body widget-left__body--compact">\n                    <div class="weather-left-card weather-left-card--compact weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number">-<span class="weather-left-card__degree">&176;</span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means">-</p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left-menu__links widget-left-menu__links--compact">\n                      <div class="widget-left-menu__layout"><span>More at</span><a href="' + document.location.protocol + '//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                    </div>\n                  </div>\n                </div>'
          },
          id23: {
            id: 23,
            type: "left",
            schema: "white",
            dom: '<div class="widget-left widget-left--small">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                  <ul class="calendar calendar--grayscale calendar--small">\n                  <li class="calendar__item"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13d.png"></li>\n                  </ul>\n                  <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--grayscale">\n                  <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date">20:16 Mar 28</div>\n                  </div>\n                </div>\n              </div>'
          },
          id24: {
            id: 24,
            type: "left",
            schema: "white",
            dom: '<div class="widget-left widget-left--small">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <h1 class="widget-left-menu__header">Moscow, RU</h1>\n                  <ul class="calendar calendar--grayscale calendar--small2">\n                  <li class="calendar__item"><img width="32" height="32" alt="Weather in Moscow, RU" class="weather-left-card__img weather-left-card__img--small" src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13d.png"></li>\n                  </ul>\n                  <p class="weather-left-card__number weather-left-card__number--small">-3<span class="weather-left-card__degree">°</span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--grayscale">\n                  <div class="widget-left__layout"><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date">20:16 Mar 28</div>\n                  </div>\n                </div>\n              </div>'
          },
          id31: {
            id: 31,
            type: "left",
            schema: "brown",
            dom: '<div class="widget-left">\n                <div class="widget-left-menu widget-left-menu--brown">\n                  <div class="widget-left-menu__layout">\n                    <h1 class="widget-left-menu__header">Pogoda dla Moscow</h1><img src="' + document.location.protocol + '//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/vetochki01.png" alt="Merry Christmas" class="widget-left-menu__christmas"/>\n                  </div>\n                </div>\n                <div class="widget-left__body">\n                  <div class="weather-left-card">\n                    <div class="weather-left-card__row1"><img width="128" height="128" alt="Pogoda dla Moscow" class="weather-left-card__img"/>\n                      <div class="weather-left-card__col">\n                        <p class="weather-left-card__number">0<span class="weather-left-card__degree">&176;</span></p><span class="weather-left-card__rising">and rising</span>\n                      </div>\n                    </div>\n                    <div class="weather-left-card__row2">\n                      <p class="weather-left-card__means">-</p>\n                      <p class="weather-left-card__wind">Wind:</p>\n                    </div>\n                    <div class="widget-left-menu__links"><span>More at</span><a href="' + document.location.protocol + '//openweathermap.org/" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                  </div>\n                  <div class="widget-left__calendar">\n                    <ul class="calendar">\n                      <li class="calendar__item">Today<img width="32" height="32" alt="Today"/></li>\n                      <li class="calendar__item">Sat<img width="32" height="32" alt="Sat"/></li>\n                      <li class="calendar__item">Sun<img width="32" height="32" alt="Sun"/></li>\n                      <li class="calendar__item">Mon<img width="32" height="32" alt="Mon"/></li>\n                      <li class="calendar__item">Tue<img width="32" height="32" alt="Tue"/></li>\n                      <li class="calendar__item">Wed<img width="32" height="32" alt="Wed"/></li>\n                      <li class="calendar__item">Thu<img width="32" height="32" alt="Thu"/></li>\n                      <li class="calendar__item">Fri<img width="32" height="32" alt="Fri"/></li>\n                    </ul>\n                    <div id="graphic3" class="widget-left__graphic"></div>\n                  </div>\n                </div>'
          }
        }, this.lincsCSS = {
          all: '<link href="' + this.baseURL + '/css/style.min.css" rel="stylesheet" />',
          left: '<link href="' + this.baseURL + '/css/openweathermap-widget-left.min.css" rel="stylesheet" />',
          right: '<link href="' + this.baseURL + '/css/openweathermap-widget-right.min.css" rel="stylesheet" />'
        }
      }

      return i(e, [{
        key: "getCodeForGenerateWidget", value: function (e, t, a, r) {
          return e && (t || a) && r ? ' <script type="text/javascript">\n                                myWidgetParam = {\n                                    id: ' + e + ",\n                                    cityid: " + city_id + ",\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " + this.scriptSRC + ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n            <\/script>" : null
        }
      }, {
        key: "render", value: function () {
          if (myWidgetParam) {
            this.selDOMElement = this.domElements["id" + myWidgetParam.id];
            var e = document.getElementById(myWidgetParam.containerid);

            e.insertAdjacentHTML("afterbegin", this.selDOMElement.dom), e.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
            // e.insertAdjacentHTML("beforeend", "<script>\n         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n         ga('create', 'UA-31601618-11', 'auto');\n         ga('send', 'pageview');\n\n        <\/script>")
          }
        }
      }]), e
    }();
    a.default = n
  }, {}],
  5: [function (e, t, a) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function n(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var s = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t
      }
    }(), o = e("./custom-date"), l = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(o), d = function (e) {
      function t(e) {
        r(this, t);
        var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return a.params = e, a.temperaturePolygon = d3.line().x(function (e) {
          return e.x
        }).y(function (e) {
          return e.y
        }), a
      }

      return n(t, e), s(t, [{
        key: "prepareData", value: function () {
          var e = 0, t = [];
          return this.params.data.forEach(function (a) {
            t.push({x: e, date: e, maxT: a.max, minT: a.min}), e += 1
          }), t
        }
      }, {
        key: "makeSVG", value: function () {
          return d3.select(this.params.id).append("svg").attr("class", "axis").attr("width", this.params.width).attr("height", this.params.height).attr("fill", this.params.colorPolilyne).style("stroke", "#ffffff")
        }
      }, {
        key: "getMinMaxDate", value: function (e) {
          var t = {maxDate: 0, minDate: 1e4};
          return e.forEach(function (e) {
            t.maxDate <= e.date && (t.maxDate = e.date), t.minDate >= e.date && (t.minDate = e.date)
          }), t
        }
      }, {
        key: "getMinMaxTemperature", value: function (e) {
          var t = {min: 100, max: 0};
          return e.forEach(function (e) {
            t.min >= e.minT && (t.min = e.minT), t.max <= e.maxT && (t.max = e.maxT)
          }), t
        }
      }, {
        key: "getMinMaxWeather", value: function (e) {
          var t = {min: 0, max: 0};
          return e.forEach(function (e) {
            t.min >= e.humidity && (t.min = e.humidity), t.min >= e.rainfallAmount && (t.min = e.rainfallAmount), t.max <= e.humidity && (t.max = e.humidity), t.max <= e.rainfallAmount && (t.max = e.rainfallAmount)
          }), t
        }
      }, {
        key: "makeAxesXY", value: function (e, t) {
          var a = t.width - 2 * t.margin, r = t.height - 2 * t.margin;
          return this.scaleAxesXYTemperature(e, a, r, t)
        }
      }, {
        key: "scaleAxesXYTemperature", value: function (e, t, a, r) {
          var i = this.getMinMaxDate(e), n = i.maxDate, s = i.minDate, o = this.getMinMaxTemperature(e), l = o.min, d = o.max, c = d3.scaleTime().domain([new Date(s), new Date(n)]).range([0, t]), h = d3.scaleLinear().domain([d + 5, l - 5]).range([0, a]), u = [];
          return e.forEach(function (e) {
            u.push({x: c(e.date) + r.offsetX, maxT: h(e.maxT) + r.offsetX, minT: h(e.minT) + r.offsetX})
          }), {scaleX: c, scaleY: h, data: u}
        }
      }, {
        key: "scaleAxesXYWeather", value: function (e, t, a, r) {
          var i = this.getMinMaxDate(e), n = i.maxDate, s = i.minDate, o = this.getMinMaxWeather(e), l = o.min, d = o.max, c = d3.scaleTime().domain([new Date(s), new Date(n)]).range([0, t]), h = d3.scaleLinear().domain([d, l]).range([0, a]), u = [];
          return e.forEach(function (e) {
            u.push({
              x: c(e.date) + r,
              humidity: h(e.humidity) + r,
              rainfallAmount: h(e.rainfallAmount) + r,
              color: e.color
            })
          }), {scaleX: c, scaleY: h, data: u}
        }
      }, {
        key: "makePolyline", value: function (e, t, a, r) {
          var i = [];
          return e.forEach(function (e) {
            i.push({x: a(e.date) + t.offsetX, y: r(e.maxT) + t.offsetY})
          }), e.reverse().forEach(function (e) {
            i.push({x: a(e.date) + t.offsetX, y: r(e.minT) + t.offsetY})
          }), i.push({x: a(e[e.length - 1].date) + t.offsetX, y: r(e[e.length - 1].maxT) + t.offsetY}), i
        }
      }, {
        key: "drawPolyline", value: function (e, t) {
          e.append("g").append("path").style("stroke-width", this.params.strokeWidth).attr("d", this.temperaturePolygon(t)).style("stroke", this.params.colorPolilyne).style("fill", this.params.colorPolilyne).style("opacity", 1)
        }
      }, {
        key: "drawLabelsTemperature", value: function (e, t, a) {
          t.forEach(function (t, r, i) {
            e.append("text").attr("x", t.x).attr("y", t.maxT - 2 - a.offsetX / 2).attr("text-anchor", "middle").style("font-size", a.fontSize).style("stroke", a.fontColor).style("fill", a.fontColor).text(a.data[r].max + "°"), e.append("text").attr("x", t.x).attr("y", t.minT + 7 + a.offsetY / 2).attr("text-anchor", "middle").style("font-size", a.fontSize).style("stroke", a.fontColor).style("fill", a.fontColor).text(a.data[r].min + "°")
          })
        }
      }, {
        key: "render", value: function () {
          var e = this.makeSVG(), t = this.prepareData(), a = this.makeAxesXY(t, this.params), r = a.scaleX, i = a.scaleY, n = a.data, s = this.makePolyline(t, this.params, r, i);
          this.drawPolyline(e, s), this.drawLabelsTemperature(e, n, this.params)
        }
      }]), t
    }(l.default);
    a.default = d
  }, {"./custom-date": 1}],
  6: [function (e, t, a) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var i = e("./weather-widget"), n = r(i), s = e("./generator-widget"), o = r(s);
    e("es6-promise").Promise;
    e("String.fromCodePoint");
    var l = new o.default;
    if (l.render(),
        myWidgetParam) {
      var d = "";
      d = myWidgetParam.cityid ? "?id=" + myWidgetParam.cityid + "&lang=pl" : myWidgetParam.city_name ? "?q=" + myWidgetParam.city_name + "&lang=pl" : "?q=London";
      var c = "#000";
      l.selDOMElement.colorPolilyne && (c = l.selDOMElement.colorPolilyne);
      var h = void 0;
      h = myWidgetParam.units && "imperial" === myWidgetParam.units ? ["imperial", "°F"] : ["metric", "°C"];
      var u = {
        cityName: "Moscow",
        lang: "pl",
        appid: myWidgetParam.appid,
        units: h[0],
        textUnitTemp: h[1],
        colorPolilyne: c,
        baseURL: l.baseURL,
        urlDomain: "http://api.openweathermap.org"
      }, m = {
        cityName: document.querySelectorAll(".widget-left-menu__header"),
        temperature: document.querySelectorAll(".weather-left-card__number"),
        naturalPhenomenon: document.querySelectorAll(".weather-left-card__means"),
        windSpeed: document.querySelectorAll(".weather-left-card__wind"),
        mainIconWeather: document.querySelectorAll(".weather-left-card__img"),
        calendarItem: document.querySelectorAll(".calendar__item"),
        graphic: document.getElementById("graphic"),
        graphic1: document.getElementById("graphic1"),
        graphic2: document.getElementById("graphic2"),
        graphic3: document.getElementById("graphic3"),
        cityName2: document.querySelectorAll(".widget-right__title"),
        temperature2: document.querySelectorAll(".weather-right__temperature"),
        temperatureFeels: document.querySelectorAll(".weather-right__feels"),
        temperatureMin: document.querySelectorAll(".weather-right-card__temperature-min"),
        temperatureMax: document.querySelectorAll(".weather-right-card__temperature-max"),
        naturalPhenomenon2: document.querySelectorAll(".widget-right__description"),
        windSpeed2: document.querySelectorAll(".weather-right__wind-speed"),
        mainIconWeather2: document.querySelectorAll(".weather-right__icon"),
        humidity: document.querySelectorAll(".weather-right__humidity"),
        pressure: document.querySelectorAll(".weather-right__pressure"),
        dateReport: document.querySelectorAll(".widget-right__date")
      }, g = {
        urlWeatherAPI: u.urlDomain + "/data/2.5/weather" + d + "&units=" + u.units + "&appid=" + u.appid,
        paramsUrlForeDaily: u.urlDomain + "/data/2.5/forecast/daily" + d + "&units=" + u.units + "&cnt=16&appid=" + u.appid,
        windSpeed: u.baseURL + "/data/wind-speed-data.json",
        windDirection: u.baseURL + "/data/wind-direction-data.json",
        clouds: u.baseURL + "data/clouds-data.json",
        naturalPhenomenon: u.baseURL + "/data/natural-phenomenon-data.json"
      }, p = new n.default(u, m, g);
      (m.cityName.length || m.cityName2.length) && p.render()
    }
  }, {"./generator-widget": 4, "./weather-widget": 7, "String.fromCodePoint": 8, "es6-promise": 9}],
  7: [function (e, t, a) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)return e;
      var t = {};
      if (null != e)for (var a in e)Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      return t.default = e, t
    }

    function i(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, d = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t
      }
    }(), c = e("./custom-date"), h = i(c), u = e("./graphic-d3js"), m = i(u), g = e("./data/natural-phenomenon-data"), p = r(g), w = e("./data/wind-speed-data"), _ = r(w), f = (r(w), e("es6-promise").Promise), v = function (e) {
      function t(e, a, r) {
        n(this, t);
        var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return i.params = e, i.controls = a, i.urls = r, i.weather = {
          fromAPI: {
            coord: {lon: "0", lat: "0"},
            weather: [{id: " ", main: " ", description: " ", icon: " "}],
            base: " ",
            main: {temp: 0, pressure: " ", humidity: " ", temp_min: " ", temp_max: " "},
            wind: {speed: 0, deg: " "},
            rain: {},
            clouds: {all: " "},
            dt: "",
            sys: {type: " ", id: " ", message: " ", country: " ", sunrise: " ", sunset: " "},
            id: " ",
            name: "Undefined",
            cod: " "
          }
        }, i
      }

      return o(t, e), d(t, [{
        key: "httpGet", value: function (e) {
          var t = this;
          return new f(function (a, r) {
            var i = new XMLHttpRequest;
            i.onload = function () {
              if (200 === i.status) a(JSON.parse(this.response)); else {
                new Error(this.statusText).code = this.status, r(t.error)
              }
            }, i.ontimeout = function (e) {
              r(new Error("Ð’Ñ€ÐµÐ¼Ñ Ð¾Ð¶Ð¸Ð´Ð°Ð½Ð¸Ñ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ñ Ðº ÑÐµÑ€Ð²ÐµÑ€Ñƒ API Ð¸ÑÑ‚ÐµÐºÐ»Ð¾ " + e.type + " " + e.timeStamp.toFixed(2)))
            }, i.onerror = function (e) {
              r(new Error("ÐžÑˆÐ¸Ð±ÐºÐ° Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ñ Ðº ÑÐµÑ€Ð²ÐµÑ€Ñƒ " + e))
            }, i.open("GET", e, !0), i.send(null)
          })
        }
      }, {
        key: "getWeatherFromApi", value: function () {
          var e = this;
          this.httpGet(this.urls.urlWeatherAPI).then(function (t) {
            e.weather.fromAPI = t, e.weather.naturalPhenomenon = p.naturalPhenomenon[e.params.lang].description, e.weather.windSpeed = _.windSpeed[e.params.lang], e.httpGet(e.urls.paramsUrlForeDaily).then(function (t) {
              e.weather.forecastDaily = t, e.parseDataFromServer()
            }, function (t) {
              console.log("Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ° " + t), e.parseDataFromServer()
            })
          }, function (t) {
            console.log("Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ° " + t), e.parseDataFromServer()
          })
        }
      }, {
        key: "getParentSelectorFromObject", value: function (e, t, a, r) {
          for (var i in e)if ("object" === l(e[i][a]) && null == r) {
            if (t >= e[i][a][0] && t < e[i][a][1])return i
          } else if (null != r && t >= e[i][a] && t < e[i][r])return i
        }
      }, {
        key: "parseDataFromServer", value: function () {
          var e = this.weather;
          if ("Undefined" === e.fromAPI.name || "404" === e.fromAPI.cod)return void console.log("Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð¾Ñ‚ ÑÐµÑ€Ð²ÐµÑ€Ð° Ð½Ðµ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ñ‹");
          var t = {
            cloudiness: " ",
            dt: " ",
            cityName: " ",
            icon: " ",
            temperature: " ",
            temperatureMin: " ",
            temperatureMAx: " ",
            pressure: " ",
            humidity: " ",
            sunrise: " ",
            sunset: " ",
            coord: " ",
            wind: " ",
            weather: " "
          }, a = parseInt(e.fromAPI.main.temp.toFixed(0), 10) + 0;
          t.cityName = e.fromAPI.name + ", " + e.fromAPI.sys.country, t.temperature = a, t.temperatureMin = parseInt(e.fromAPI.main.temp_min.toFixed(0), 10) + 0, t.temperatureMax = parseInt(e.fromAPI.main.temp_max.toFixed(0), 10) + 0, e.naturalPhenomenon && (t.weather = e.naturalPhenomenon[e.fromAPI.weather[0].id]), e.windSpeed && (t.windSpeed = "Wind: " + e.fromAPI.wind.speed.toFixed(1) + " m/s " + this.getParentSelectorFromObject(e.windSpeed, e.fromAPI.wind.speed.toFixed(1), "speed_interval"), t.windSpeed2 = e.fromAPI.wind.speed.toFixed(1) + " m/s"), e.windDirection && (t.windDirection = "" + this.getParentSelectorFromObject(e.windDirection, e.fromAPI.wind.deg, "deg_interval")), e.clouds && (t.clouds = "" + this.getParentSelectorFromObject(e.clouds, e.fromAPI.clouds.all, "min", "max")), t.humidity = e.fromAPI.main.humidity + "%", t.pressure = e.fromAPI.main.pressure + " mb", t.icon = "" + e.fromAPI.weather[0].icon, this.renderWidget(t)
        }
      }, {
        key: "renderWidget", value: function (e) {
          for (var t in this.controls.cityName)this.controls.cityName.hasOwnProperty(t) && (this.controls.cityName[t].innerHTML = e.cityName);
          for (var a in this.controls.temperature)this.controls.temperature.hasOwnProperty(a) && (this.controls.temperature[a].innerHTML = e.temperature + "<span class='weather-left-card__degree'>" + this.params.textUnitTemp + "</span>");
          for (var r in this.controls.mainIconWeather)this.controls.mainIconWeather.hasOwnProperty(r) && (this.controls.mainIconWeather[r].src = this.getURLMainIcon(e.icon, !0), this.controls.mainIconWeather[r].alt = "Weather in " + (e.cityName ? e.cityName : ""));
          if (e.weather)for (var i in this.controls.naturalPhenomenon)this.controls.naturalPhenomenon.hasOwnProperty(i) && (this.controls.naturalPhenomenon[i].innerText = e.weather);
          if (e.windSpeed)for (var n in this.controls.windSpeed)this.controls.windSpeed.hasOwnProperty(n) && (this.controls.windSpeed[n].innerText = e.windSpeed);
          for (var s in this.controls.cityName2)this.controls.cityName2.hasOwnProperty(s) && (this.controls.cityName2[s].innerHTML = e.cityName);
          for (var o in this.controls.temperature2)this.controls.temperature2.hasOwnProperty(o) && this.controls.temperature2[o] && (this.controls.temperature2[o].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>"), this.controls.temperatureFeels.hasOwnProperty(o) && (this.controls.temperatureFeels[o].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>");
          for (var l in this.controls.temperatureMin)this.controls.temperatureMin.hasOwnProperty(l) && (this.controls.temperatureMin[l].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>");
          for (var d in this.controls.temperatureMax)this.controls.temperatureMax.hasOwnProperty(d) && (this.controls.temperatureMax[d].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>");
          if (e.weather)for (var c in this.controls.naturalPhenomenon2)this.controls.naturalPhenomenon2.hasOwnProperty(c) && (this.controls.naturalPhenomenon2[c].innerText = e.weather);
          if (e.windSpeed2 && e.windDirection)for (var h in this.controls.windSpeed2)this.controls.windSpeed2.hasOwnProperty(h) && (this.controls.windSpeed2[h].innerText = e.windSpeed2 + " " + e.windDirection);
          for (var u in this.controls.mainIconWeather2)this.controls.mainIconWeather2.hasOwnProperty(u) && (this.controls.mainIconWeather2[u].src = this.getURLMainIcon(e.icon, !0), this.controls.mainIconWeather2[u].alt = "Weather in " + (e.cityName ? e.cityName : ""));
          if (e.humidity)for (var m in this.controls.humidity)this.controls.humidity.hasOwnProperty(m) && (this.controls.humidity[m].innerText = e.humidity);
          if (e.pressure)for (var g in this.controls.pressure)this.controls.pressure.hasOwnProperty(g) && (this.controls.pressure[g].innerText = e.pressure);
          for (var p in this.controls.dateReport)this.controls.dateReport.hasOwnProperty(p) && (this.controls.dateReport[p].innerText = this.getTimeDateHHMMMonthDay());
          (this.controls.graphic || this.controls.graphic1 || this.controls.graphic2 || this.controls.graphic3) && this.weather.forecastDaily && this.prepareDataForGraphic()
        }
      }, {
        key: "prepareDataForGraphic", value: function () {
          var e = this, t = [];
          return this.weather.forecastDaily.list.forEach(function (a) {
            var r = e.getDayNameOfWeekByDayNumber(e.getNumberDayInWeekByUnixTime(a.dt));
            var now = new Date();
            var maxDate = (now.getTime() + 16*24*60*60*1000);
            var middleDate = (now.getTime() + 7*24*60*60*1000);
            console.log(myWidgetParam.event_date*1000+ "ddd"+middleDate);
            if (new Date(myWidgetParam.event_date*1000).getTime() <= middleDate && new Date(a.dt * 1e3).getTime() <= middleDate) {
              if(t.length<8) {
                t.push({
                  min: Math.round(a.temp.min),
                  max: Math.round(a.temp.max),
                  day: 0 != a ? r : "Today",
                  icon: a.weather[0].icon,
                  date: e.timestampToDateTime(a.dt),
                  dt: a.dt
                })
              }
            } else if (new Date(myWidgetParam.event_date*1000).getTime() <= maxDate && new Date(a.dt * 1e3).getTime() >= new Date(middleDate).getTime()) {
              if(t.length<8) {
                t.push({
                  min: Math.round(a.temp.min),
                  max: Math.round(a.temp.max),
                  day: 0 != a ? r : "Today",
                  icon: a.weather[0].icon,
                  date: e.timestampToDateTime(a.dt),
                  dt: a.dt
                })
              }
            }
          }), this.drawGraphicD3(t)
        }
      }, {
        key: "renderIconsDaysOfWeek", value: function (e) {
          var t = this, a = this;
          return e.forEach(function (e, r) {
            var i = new Date(1e3 * e.dt);
            var selected=(new Date(myWidgetParam.event_date*1000).getDate()== i.getDate())?'selectedEvent':'';
            a.controls.calendarItem[r].innerHTML = "<div class='"+selected+"'>"+e.day + "<br>" + i.getDate() + " " + t.getMonthNameByMonthNumber(i.getMonth()) + '<img src="http://openweathermap.org/img/w/' + e.icon + '.png" width="32" height="32" alt="' + e.day + '"></div>'
          }), e
        }
      }, {
        key: "getURLMainIcon", value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = new Map;
          return t ? this.params.baseURL + "/img/widgets/" + e + ".png" : (a.set("01d", "01dbw"), a.set("02d", "02dbw"), a.set("03d", "03dbw"), a.set("03d", "03dbw"), a.set("04d", "04dbw"), a.set("05d", "05dbw"), a.set("06d", "06dbw"), a.set("07d", "07dbw"), a.set("08d", "08dbw"), a.set("09d", "09dbw"), a.set("10d", "10dbw"), a.set("11d", "11dbw"), a.set("13d", "13dbw"), a.set("01n", "01dbw"), a.set("02n", "02dbw"), a.set("03n", "03dbw"), a.set("03n", "03dbw"), a.set("04n", "04dbw"), a.set("05n", "05dbw"), a.set("06n", "06dbw"), a.set("07n", "07dbw"), a.set("08n", "08dbw"), a.set("09n", "09dbw"), a.set("10n", "10dbw"), a.set("11n", "11dbw"), a.set("13n", "13dbw"), a.get(e) ? this.params.baseURL + "/img/widgets/" + e + "img/" + a.get(e) + ".png" : "http://openweathermap.org/img/w/" + e + ".png")
        }
      }, {
        key: "drawGraphicD3", value: function (e) {
          this.renderIconsDaysOfWeek(e);
          var t = document.getElementById("graphic"), a = document.getElementById("graphic1"), r = document.getElementById("graphic2"), i = document.getElementById("graphic3");
          t && t.querySelector("svg") && t.removeChild(t.querySelector("svg")), a && a.querySelector("svg") && a.removeChild(a.querySelector("svg")), r && r.querySelector("svg") && r.removeChild(r.querySelector("svg")), i && i.querySelector("svg") && i.removeChild(i.querySelector("svg"));
          var n = {
            id: "#graphic",
            data: e,
            offsetX: 15,
            offsetY: 10,
            width: 420,
            height: 79,
            rawData: [],
            margin: 10,
            colorPolilyne: "#ddd",
            fontSize: "12px",
            fontColor: "#333",
            strokeWidth: "1px"
          }, s = new m.default(n);
          s.render(), a && (n.id = "#graphic", n.colorPolilyne = "#DDF730", s = new m.default(n), s.render()), r && (n.id = "#graphic2", n.colorPolilyne = "#FEB020", s = new m.default(n), s.render()), i && (n.id = "#graphic3", n.colorPolilyne = "#FEB020", s = new m.default(n), s.render())
        }
      }, {
        key: "render", value: function () {
          this.getWeatherFromApi()
        }
      }]), t
    }(h.default);
    a.default = v
  }, {
    "./custom-date": 1,
    "./data/natural-phenomenon-data": 2,
    "./data/wind-speed-data": 3,
    "./graphic-d3js": 5,
    "es6-promise": 9
  }],
  8: [function (e, t, a) {
    String.fromCodePoint || function () {
      var e = function () {
        try {
          var e = {}, t = Object.defineProperty, a = t(e, e, e) && t
        } catch (e) {
        }
        return a
      }(), t = String.fromCharCode, a = Math.floor, r = function (e) {
        var r, i, n = [], s = -1, o = arguments.length;
        if (!o)return "";
        for (var l = ""; ++s < o;) {
          var d = Number(arguments[s]);
          if (!isFinite(d) || d < 0 || d > 1114111 || a(d) != d)throw RangeError("Invalid code point: " + d);
          d <= 65535 ? n.push(d) : (d -= 65536, r = 55296 + (d >> 10), i = d % 1024 + 56320, n.push(r, i)), (s + 1 == o || n.length > 16384) && (l += t.apply(null, n), n.length = 0)
        }
        return l
      };
      e ? e(String, "fromCodePoint", {value: r, configurable: !0, writable: !0}) : String.fromCodePoint = r
    }()
  }, {}],
  9: [function (e, t, a) {
    (function (r, i) {
      !function (e, r) {
        "object" == typeof a && void 0 !== t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.ES6Promise = r()
      }(this, function () {
        "use strict";
        function t(e) {
          return "function" == typeof e || "object" == typeof e && null !== e
        }

        function a(e) {
          return "function" == typeof e
        }

        function n(e) {
          q = e
        }

        function s(e) {
          Y = e
        }

        function o() {
          return void 0 !== U ? function () {
              U(d)
            } : l()
        }

        function l() {
          var e = setTimeout;
          return function () {
            return e(d, 1)
          }
        }

        function d() {
          for (var e = 0; e < I; e += 2) {
            (0, $[e])($[e + 1]), $[e] = void 0, $[e + 1] = void 0
          }
          I = 0
        }

        function c(e, t) {
          var a = arguments, r = this, i = new this.constructor(u);
          void 0 === i[ee] && W(i);
          var n = r._state;
          return n ? function () {
              var e = a[n - 1];
              Y(function () {
                return P(n, i, e, r._result)
              })
            }() : S(r, i, e, t), i
        }

        function h(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t)return e;
          var a = new t(u);
          return y(a, e), a
        }

        function u() {
        }

        function m() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function g() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function p(e) {
          try {
            return e.then
          } catch (e) {
            return ie.error = e, ie
          }
        }

        function w(e, t, a, r) {
          try {
            e.call(t, a, r)
          } catch (e) {
            return e
          }
        }

        function _(e, t, a) {
          Y(function (e) {
            var r = !1, i = w(a, t, function (a) {
              r || (r = !0, t !== a ? y(e, a) : k(e, a))
            }, function (t) {
              r || (r = !0, z(e, t))
            }, "Settle: " + (e._label || " unknown promise"));
            !r && i && (r = !0, z(e, i))
          }, e)
        }

        function f(e, t) {
          t._state === ae ? k(e, t._result) : t._state === re ? z(e, t._result) : S(t, void 0, function (t) {
                return y(e, t)
              }, function (t) {
                return z(e, t)
              })
        }

        function v(e, t, r) {
          t.constructor === e.constructor && r === c && t.constructor.resolve === h ? f(e, t) : r === ie ? (z(e, ie.error), ie.error = null) : void 0 === r ? k(e, t) : a(r) ? _(e, t, r) : k(e, t)
        }

        function y(e, a) {
          e === a ? z(e, m()) : t(a) ? v(e, a, p(a)) : k(e, a)
        }

        function b(e) {
          e._onerror && e._onerror(e._result), j(e)
        }

        function k(e, t) {
          e._state === te && (e._result = t, e._state = ae, 0 !== e._subscribers.length && Y(j, e))
        }

        function z(e, t) {
          e._state === te && (e._state = re, e._result = t, Y(b, e))
        }

        function S(e, t, a, r) {
          var i = e._subscribers, n = i.length;
          e._onerror = null, i[n] = t, i[n + ae] = a, i[n + re] = r, 0 === n && e._state && Y(j, e)
        }

        function j(e) {
          var t = e._subscribers, a = e._state;
          if (0 !== t.length) {
            for (var r = void 0, i = void 0, n = e._result, s = 0; s < t.length; s += 3)r = t[s], i = t[s + a], r ? P(a, r, i, n) : i(n);
            e._subscribers.length = 0
          }
        }

        function M() {
          this.error = null
        }

        function T(e, t) {
          try {
            return e(t)
          } catch (e) {
            return ne.error = e, ne
          }
        }

        function P(e, t, r, i) {
          var n = a(r), s = void 0, o = void 0, l = void 0, d = void 0;
          if (n) {
            if (s = T(r, i), s === ne ? (d = !0, o = s.error, s.error = null) : l = !0, t === s)return void z(t, g())
          } else s = i, l = !0;
          t._state !== te || (n && l ? y(t, s) : d ? z(t, o) : e === ae ? k(t, s) : e === re && z(t, s))
        }

        function x(e, t) {
          try {
            t(function (t) {
              y(e, t)
            }, function (t) {
              z(e, t)
            })
          } catch (t) {
            z(e, t)
          }
        }

        function D() {
          return se++
        }

        function W(e) {
          e[ee] = se++, e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function O(e, t) {
          this._instanceConstructor = e, this.promise = new e(u), this.promise[ee] || W(this.promise), H(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && k(this.promise, this._result))) : z(this.promise, B())
        }

        function B() {
          return new Error("Array Methods must be provided an Array")
        }

        function A(e) {
          return new O(this, e).promise
        }

        function C(e) {
          var t = this;
          return new t(H(e) ? function (a, r) {
              for (var i = e.length, n = 0; n < i; n++)t.resolve(e[n]).then(a, r)
            } : function (e, t) {
              return t(new TypeError("You must pass an array to race."))
            })
        }

        function F(e) {
          var t = this, a = new t(u);
          return z(a, e), a
        }

        function G() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function N() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function E(e) {
          this[ee] = D(), this._result = this._state = void 0, this._subscribers = [], u !== e && ("function" != typeof e && G(), this instanceof E ? x(this, e) : N())
        }

        function L() {
          var e = void 0;
          if (void 0 !== i) e = i; else if ("undefined" != typeof self) e = self; else try {
            e = Function("return this")()
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var t = e.Promise;
          if (t) {
            var a = null;
            try {
              a = Object.prototype.toString.call(t.resolve())
            } catch (e) {
            }
            if ("[object Promise]" === a && !t.cast)return
          }
          e.Promise = E
        }

        var R = void 0;
        R = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          };
        var H = R, I = 0, U = void 0, q = void 0, Y = function (e, t) {
          $[I] = e, $[I + 1] = t, 2 === (I += 2) && (q ? q(d) : Q())
        }, V = "undefined" != typeof window ? window : void 0, X = V || {}, K = X.MutationObserver || X.WebKitMutationObserver, J = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r), Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, $ = new Array(1e3), Q = void 0;
        Q = J ? function () {
            return function () {
              return r.nextTick(d)
            }
          }() : K ? function () {
              var e = 0, t = new K(d), a = document.createTextNode("");
              return t.observe(a, {characterData: !0}), function () {
                a.data = e = ++e % 2
              }
            }() : Z ? function () {
                var e = new MessageChannel;
                return e.port1.onmessage = d, function () {
                  return e.port2.postMessage(0)
                }
              }() : void 0 === V && "function" == typeof e ? function () {
                  try {
                    var t = e, a = t("vertx");
                    return U = a.runOnLoop || a.runOnContext, o()
                  } catch (e) {
                    return l()
                  }
                }() : l();
        var ee = Math.random().toString(36).substring(16), te = void 0, ae = 1, re = 2, ie = new M, ne = new M, se = 0;
        return O.prototype._enumerate = function () {
          for (var e = this.length, t = this._input, a = 0; this._state === te && a < e; a++)this._eachEntry(t[a], a)
        }, O.prototype._eachEntry = function (e, t) {
          var a = this._instanceConstructor, r = a.resolve;
          if (r === h) {
            var i = p(e);
            if (i === c && e._state !== te) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, this._result[t] = e; else if (a === E) {
              var n = new a(u);
              v(n, e, i), this._willSettleAt(n, t)
            } else this._willSettleAt(new a(function (t) {
              return t(e)
            }), t)
          } else this._willSettleAt(r(e), t)
        }, O.prototype._settledAt = function (e, t, a) {
          var r = this.promise;
          r._state === te && (this._remaining--, e === re ? z(r, a) : this._result[t] = a), 0 === this._remaining && k(r, this._result)
        }, O.prototype._willSettleAt = function (e, t) {
          var a = this;
          S(e, void 0, function (e) {
            return a._settledAt(ae, t, e)
          }, function (e) {
            return a._settledAt(re, t, e)
          })
        }, E.all = A, E.race = C, E.resolve = h, E.reject = F, E._setScheduler = n, E._setAsap = s, E._asap = Y, E.prototype = {
          constructor: E,
          then: c,
          catch: function (e) {
            return this.then(null, e)
          }
        }, E.polyfill = L, E.Promise = E, E
      })
    }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {_process: 10}],
  10: [function (e, t, a) {
    function r() {
      throw new Error("setTimeout has not been defined")
    }

    function i() {
      throw new Error("clearTimeout has not been defined")
    }

    function n(e) {
      if (h === setTimeout)return setTimeout(e, 0);
      if ((h === r || !h) && setTimeout)return h = setTimeout, setTimeout(e, 0);
      try {
        return h(e, 0)
      } catch (t) {
        try {
          return h.call(null, e, 0)
        } catch (t) {
          return h.call(this, e, 0)
        }
      }
    }

    function s(e) {
      if (u === clearTimeout)return clearTimeout(e);
      if ((u === i || !u) && clearTimeout)return u = clearTimeout, clearTimeout(e);
      try {
        return u(e)
      } catch (t) {
        try {
          return u.call(null, e)
        } catch (t) {
          return u.call(this, e)
        }
      }
    }

    function o() {
      w && g && (w = !1, g.length ? p = g.concat(p) : _ = -1, p.length && l())
    }

    function l() {
      if (!w) {
        var e = n(o);
        w = !0;
        for (var t = p.length; t;) {
          for (g = p, p = []; ++_ < t;)g && g[_].run();
          _ = -1, t = p.length
        }
        g = null, w = !1, s(e)
      }
    }

    function d(e, t) {
      this.fun = e, this.array = t
    }

    function c() {
    }

    var h, u, m = t.exports = {};
    !function () {
      try {
        h = "function" == typeof setTimeout ? setTimeout : r
      } catch (e) {
        h = r
      }
      try {
        u = "function" == typeof clearTimeout ? clearTimeout : i
      } catch (e) {
        u = i
      }
    }();
    var g, p = [], w = !1, _ = -1;
    m.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)for (var a = 1; a < arguments.length; a++)t[a - 1] = arguments[a];
      p.push(new d(e, t)), 1 !== p.length || w || n(l)
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = c, m.addListener = c, m.once = c, m.off = c, m.removeListener = c, m.removeAllListeners = c, m.emit = c, m.prependListener = c, m.prependOnceListener = c, m.listeners = function (e) {
      return []
    }, m.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, m.cwd = function () {
      return "/"
    }, m.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, m.umask = function () {
      return 0
    }
  }, {}]
}, {}, [6]);
