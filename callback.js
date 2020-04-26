function getuname(cb){
    cb({name:'Tarun'},getDepartment)
}
function getAge(data,cb){
    data={...data,age:50};
    cb(data,getecode)
}
function getDepartment(data,cb){
    console.log(data);
    data = {...data,department:'IT'}
    cb(data,showInfo)
}
function getecode(data,cb){
    data = {...data,employeeCode:101}
    cb(data)
}
function showInfo(data){
    console.log(data);
}
getuname(getAge);