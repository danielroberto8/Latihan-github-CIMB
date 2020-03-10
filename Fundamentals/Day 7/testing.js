let val = '12/12/2022'
let res = val.split('/')
let val2 = '12/12/2021'
let res2 = val2.split('/')
console.log(res[2]>res2[2])

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = dd+ '/' + mm + '/' + yyyy;
let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd+ '/' + mm + '/' + yyyy;
        let curDate = today.split('/')
// let res3 = today.split('/')
console.log(yyyy>res[2])