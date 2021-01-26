var fetch = require("node-fetch");
var fs = require('fs')

var url0 = 'https://e27186054698f1ec8f9789cd34f971c5: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@freetrailtestshop1.myshopify.com/admin/api/2021-01/customers.json?limit=250'
var url1 = "https://e27186054698f1ec8f9789cd34f971c5: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@freetrailtestshop1.myshopify.com/admin/api/2021-01/customers.json?limit=250&page_info=eyJsYXN0X2lkIjo0NjIxMDgwMzk1OTYzLCJsYXN0X3ZhbHVlIjoxNjExNjQ5ODU0MDAwLCJkaXJlY3Rpb24iOiJuZXh0In0"
var url2 = "https://e27186054698f1ec8f9789cd34f971c5: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@freetrailtestshop1.myshopify.com/admin/api/2021-01/customers.json?limit=250&page_info=eyJkaXJlY3Rpb24iOiJuZXh0IiwibGFzdF9pZCI6NDYyMTA3MTUxNTgzNSwibGFzdF92YWx1ZSI6MTYxMTY0OTgwMjAwMH0>"

async function fetchCustomers() {
  console.log("Start fetching...");
  var data = await fetch(url2)

  console.log(data.headers.raw()['link'][0].split(';'))

  var jsonData = await data.json();
  fs.writeFileSync('./data/customer.json', JSON.stringify(jsonData))
  console.log('Fetch success')
}

fetchCustomers();
