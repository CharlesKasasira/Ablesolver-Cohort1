// There are many ways of storing data in JavaScript
// Which can be categorized into two primary categories
// 1. Client => Cookies, Sessions, LocalStorage
// 2. Server (Node) => SQL Databases e.g MySQL & NoSQL Databases like MongoDB
// Cookies enable storage of strings in a user's browser.
// we document.cookie which is part of DOM
// Cookies are stored as key/value pairs.
// Separate key/value pairs with a semi-colon: e.g username=username; password=password
// document.cookie = "device=Macbook Pro 2018, 8GB RAM"
// let cookieValue = document.cookie
// console.log(cookieValue)

date = new Date()

localDate = date.toLocaleDateString()
localTime = date.toLocaleTimeString()

let userInfo = "userInfo=David Wampamba, Macbook Pro 2018, 8GB RAM; "

document.cookie = userInfo

document.cookie = "date=" + localDate
document.cookie = "time=" + localTime

let userInfoStored = document.cookie
console.log(userInfoStored)