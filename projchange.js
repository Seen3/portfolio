let titles = ["Evolving Life With Genetic Algorithm","Openweather API Weather-App","Blood Bank Management System"]
let descriptions = ["This project uses genetic algorithm concepts to try and stimulate creatures. The creatures seek food and avoid poison in their environment. With time the creatures learn to seek the food and avoid the poison."
,"Made by using Openweather API, used css for a lot of animations. Special animations for day/night, sun/moon, clear/rainy etc"
,"A Full-Stack Project made with SQL,Express,React and Node for a fictional Blood Bank. Build for UE20CS301 DBMS Course"]
let repolink=['https://github.com/Seen3/LifeSimMI','https://github.com/Seen3/Weather-App',"https://github.com/Seen3/BloodBankDBMS"]
let demolink=['https://seen3.github.io/LifeSimMI/',"https://seen3.github.io/Weather-App/","#"]
let current=0;
function changePage(){
    let Tit=document.getElementById('Tit');
    let des=document.getElementById('des');
    let repoL=document.getElementById('repoL');
    let demoL=document.getElementById('demoL');
    current+=1;
    current=current%titles.length;
    Tit.innerText=titles[current];
    des.innerText=descriptions[current];
    repoL.href=repolink[current];
    demoL.href=demolink[current];

}