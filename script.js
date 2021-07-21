var req=new XMLHttpRequest();
req.open('get','https://restcountries.eu/rest/v2/all',true);

req.send();
req.onload=function(){
    var data =JSON.parse(this.response);
    console.log(data);
    for(var i =0;i<250;i++){
        console.log(data[i].name +" :"+ data[i].capital + " :" + data[i].flag);
        
    }

}