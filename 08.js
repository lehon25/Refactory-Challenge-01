/*Play with JSON

[
  {
    "order_id": "SO-921",
    "created_at": "2018-02-17T03:24:12",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
      { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
    ]
  },
  {
    "order_id": "SO-922",
    "created_at": "2018-02-20T13:10:32",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
      { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
      { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
    ]
  },
  {
    "order_id": "SO-923",
    "created_at": "2018-02-28T15:20:43",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
      { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
    ]
  },
  {
    "order_id": "SO-924",
    "created_at": "2018-03-02T14:30:54",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
    ]
  },
  {
    "order_id": "SO-925",
    "created_at": "2018-03-03T14:52:22",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
      { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
      { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
    ]
  },
  {
    "order_id": "SO-926",
    "created_at": "2018-03-05T16:23:20",
    "customer": { "id": 58, "name": "Annis" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
    ]
  }
]

You need to do three things:
1Find all purchases made in February.
2.Find all purchases made by Ari, and add grand total by sum all total price of items. The output should only a number.
3.Find people who have purchases with grand total lower than 300000. The output is an array of people name. Duplicate name is not allowed
4.We have simple purchases data in JSON format
*/
const purchases= [
    {
        "order_id": "SO-921",
        "created_at": "2018-02-17T03:24:12",
        "customer": { "id": 33, "name": "Ari" },
        "items": [
          { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
          { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
        ]
      },
      {
        "order_id": "SO-922",
        "created_at": "2018-02-20T13:10:32",
        "customer": { "id": 40, "name": "Ririn" },
        "items": [
          { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
          { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
          { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
        ]
      },
      {
        "order_id": "SO-923",
        "created_at": "2018-02-28T15:20:43",
        "customer": { "id": 33, "name": "Ari" },
        "items": [
          { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
          { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
        ]
      },
      {
        "order_id": "SO-924",
        "created_at": "2018-03-02T14:30:54",
        "customer": { "id": 40, "name": "Ririn" },
        "items": [
          { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
        ]
      },
      {
        "order_id": "SO-925",
        "created_at": "2018-03-03T14:52:22",
        "customer": { "id": 33, "name": "Ari" },
        "items": [
          { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
          { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
          { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
        ]
      },
      {
        "order_id": "SO-926",
        "created_at": "2018-03-05T16:23:20",
        "customer": { "id": 58, "name": "Annis" },
        "items": [
          { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
        ]
      }
    ]
  
  //Jawaban Lehon
    //   var data_filter = data.chart.filter(item=>item.created_at==="2018-02-17T03:24:12");

    //   var sum = data.chart.filter(item=>item.name="ari")
    //   .map(item=>item.grand_total)
    //   .reduce((a,b) => a + b, 0)

    //  console.log(data_filter);
    //  console.log(sum);

     //Jawaban Bener
  const purchasesAtFebruary = purchases.filter(
  purchase => new Date(purchase.created_at).getMonth() === 1)// pertama di filter berdasarkan bulan 01 sebagai bulan febuari 

const grandTotalPurchasesMadeByAri = purchases
  .filter(purchase => purchase.customer.name === 'Ari') //temukan dengan nama ari 
  .map(purchase => { // lalu dimapping 
    return purchase.items
      .map(item => item.price * item.qty) // dan dikalikan dengan item item quantity 
      .reduce((a, b) => a + b, 0) //setelah itu di reduce 
  })
  .reduce((a, b) => a + b, 0)
const peopleName = purchases 
  .map(purchase => {
    return {
      name: purchase.customer.name, // temukan dengan variabel
      total: purchase.items
        .map(item => item.price * item.qty) // lalu kalikan harga dan jumlah 
        .reduce((a, b) => a + b, 0) // lalu di reduce 
    }
  })
  .filter(purchase => purchase.total < 300000) // lalu difilter dengan total 300000
  .map(purchase => purchase.name) //lalu kemudian di map 
console.log(purchasesAtFebruary) 
console.log(grandTotalPurchasesMadeByAri)
console.log([...new Set(peopleName)])