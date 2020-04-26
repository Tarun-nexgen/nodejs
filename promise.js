function getUsername(data){
    return new Promise((res,rej)=>{
        res({name:'Tarun'});
    })
};
function getAge(data){
    return new Promise((res,rej) => {
        data={...data,age:50}; 
        res(data)
    })
};
function getDepartment(data,callback){
    return new Promise((res,rej) => {
        data={...data,department:'IT'}; 
        res(data)
    })
}
function getEmployeecode(data,callback){
    return new Promise((res,rej) => {
        data={...data,eCode:101}; 
        res(data)
    })

}
function printInfo(data){
    console.log(data);
}
getUsername()
.then(getAge)
.then(getDepartment)
.then(getEmployeecode)
.then(printInfo)