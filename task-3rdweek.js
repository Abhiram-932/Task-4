//All Countries from Asia using Filter Method :

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var total=data.filter((country)=>{
        return country.region==="Asia";
    }).map((element)=>{return element.name})
    console.log(total);
}
_______________________________________________________________________________________________________________________

//All countries population less than 2lakhs using filter:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var total=data.filter((country)=>{
        return country.population<200000;
    }).map((element)=>{return element.name})
    console.log(total);
}

_______________________________________________________________________________________________________________________

//Print name,capital,flag using forEach:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
data.forEach(element=> console.log(element.name+"-"+element.capital+" "+element.flag));
};

_______________________________________________________________________________________________________________________

//Print total population of countries using reduce function:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var total=data.reduce((acc,country)=>{
        return acc+country.population;
    }, 0);
    console.log(total);
}
_______________________________________________________________________________________________________________________

//Print country which use US Dollor as currency:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var total=data.filter((country)=>{
        return country.currencies[0].code==="USD";
    }).map((element)=>{return element.name})
    console.log(total);
}