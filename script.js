var hours = document.querySelectorAll('.hrs'), 
week = document.querySelectorAll('.week'),
daily = document.querySelector('#daily'),
weekly = document.querySelector('#weekly'),
monthly = document.querySelector('#monthly'),
allLists = document.querySelectorAll('.li'),
ll = document.querySelectorAll('li');



allLists.forEach(mp => {
    mp.addEventListener('click', (e)=>{
        ll.forEach(lo =>{
           $(ll).removeClass('active');
        })
        $(mp).addClass('active');

        var texti = $(mp).text();

        // console.log(typeof(texti));

        // if (texti === "Daily" ) {
        //     dailyi();
        // } else if (texti === 'Weekly') {
        //     weeklyi();
        // } else if (texti === "Monthly") {
        //     monthlyi();
        // } 
    })
})

daily.addEventListener('click', ()=>{
    dailyi()
})

weekly.addEventListener('click', ()=>{
    weeklyi()
})

monthly.addEventListener('click', ()=>{
    monthlyi()
})


async function dailyi () {
    await fetch('data.json').then(response => {
   if (!response.ok) {
       throw new Error('HTTP error');
   }
   return response.json();
})
.then (data => {

for (let index = 0; index < data.length; index++) {
  hours[index].innerText = data[index].timeframes.daily.current + "hrs";
  week[index].innerText = data[index].timeframes.daily.previous + "hrs";
   
}


})
.catch(error => {
   console.error('Fetch error' , error)
})
}






async function weeklyi () {
    await fetch('data.json').then(response => {
   if (!response.ok) {
       throw new Error('HTTP error');
   }
   return response.json();
})
.then (data => {

for (let index = 0; index < data.length; index++) {
  hours[index].innerText = data[index].timeframes.weekly.current + "hrs";
  week[index].innerText = data[index].timeframes.weekly.previous + "hrs";

}


})
.catch(error => {
   console.error('Fetch error' , error)
})
}
// doData();



async function monthlyi () {
    await fetch('data.json').then(response => {
   if (!response.ok) {
       throw new Error('HTTP error');
   }
   return response.json();
})
.then (data => {

for (let index = 0; index < data.length; index++) {
  hours[index].innerText = data[index].timeframes.monthly.current + "hrs";
  week[index].innerText = data[index].timeframes.monthly.previous + "hrs";

}


})
.catch(error => {
   console.error('Fetch error' , error)
})
}


// async function getData (param) {
  
//     await fetch('data.json').then(response => {
//         if (!response.ok) {
//             throw new Error('HTTP error');
//         }
//         return response.json();
//     })
//     .then (data => {
//         // console.log(data[0]);
//         // data.forEach(n =>{
//         //     console.log(n);
//         // })
//         return data;
//     })
//     .catch(error => {
//         console.error('Fetch error' , error)
//     })
//     // console.log(response.json());
        
// }


// getData()
// hours.forEach(n => {
//     console.log(n.innerText);
// });