$(document).ready(function(){if($("#bubble-chart").length>0){var g=document.getElementById("bubble-chart").getContext("2d");var n={datasets:[{label:"First Dataset",data:[{x:80,y:60,r:10},{x:40,y:40,r:10},{x:30,y:40,r:20},{x:20,y:10,r:10},{x:50,y:30,r:10}],backgroundColor:"#689f38",hoverBackgroundColor:"#33691e",},{label:"Second Dataset",data:[{x:40,y:30,r:10},{x:25,y:20,r:10},{x:35,y:30,r:10}],backgroundColor:"#38649f",hoverBackgroundColor:"#244674",}]};var b=new Chart(g,{type:"bubble",data:n,options:{elements:{points:{borderWidth:1,borderColor:"rgb(33, 33, 33)"}},scales:{xAxes:[{ticks:{min:-10,max:100,fontFamily:"Nunito Sans",fontColor:"#878787"},gridLines:{color:"rgba(135,135,135,0)",}}],yAxes:[{ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"},gridLines:{color:"rgba(135,135,135,0)",}}]},animation:{duration:3000},responsive:true,legend:{labels:{fontFamily:"Nunito Sans",fontColor:"#878787"}},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}if($("#pie-chart").length>0){var h=document.getElementById("pie-chart").getContext("2d");var o={labels:["lab 1","lab 2","lab 3"],datasets:[{data:[300,50,100],backgroundColor:["#689f38","#38649f","#389f99"],hoverBackgroundColor:["#33691e","#244674","#18625e"]}]};var s=new Chart(h,{type:"pie",data:o,options:{animation:{duration:3000},responsive:true,legend:{labels:{fontFamily:"Nunito Sans",fontColor:"#878787"}},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"},elements:{arc:{borderWidth:0}}}})}if($("#doughnut-chart").length>0){var i=document.getElementById("doughnut-chart").getContext("2d");var p={labels:["lab 1","lab 2","lab 3"],datasets:[{data:[300,50,100],backgroundColor:["#389f99","#ee1044","#ff8f00"],hoverBackgroundColor:["#18625e","#b31338","#c0720f"]}]};var q=new Chart(i,{type:"doughnut",data:p,options:{animation:{duration:3000},responsive:true,legend:{labels:{fontFamily:"Nunito Sans",fontColor:"#878787"}},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"},elements:{arc:{borderWidth:0}}}})}new Chart(document.getElementById("bar-chart1"),{type:"bar",data:{labels:["January","February","March","April","May"],datasets:[{label:"Dataset",backgroundColor:["#689f38","#38649f","#389f99","#ee1044","#ff8f00"],data:[8545,6589,5894,4985,1548]}]},options:{legend:{display:false},title:{display:true,text:"My dataset"}}});if($("#bar-chart2").length>0){var d=document.getElementById("bar-chart2").getContext("2d");var k={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#689f38",borderColor:"#689f38",data:[15,20,70,51,36,85,50]},{label:"My Second dataset",backgroundColor:"#38649f",borderColor:"#38649f",data:[28,48,40,19,86,27,90]},{label:"My Third dataset",backgroundColor:"#389f99",borderColor:"#389f99",data:[8,28,50,29,76,77,40]}]};var r=new Chart(d,{type:"bar",data:k,options:{tooltips:{mode:"label"},scales:{yAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}],xAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}],},elements:{point:{hitRadius:40}},animation:{duration:3000},responsive:true,maintainAspectRatio:false,legend:{display:false,},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}new Chart(document.getElementById("bar-chart-horizontal1"),{type:"horizontalBar",data:{labels:["January","February","March","April","May"],datasets:[{label:"Dataset",backgroundColor:["#689f38","#38649f","#389f99","#ee1044","#ff8f00"],data:[8545,6589,5894,4985,1548]}]},options:{legend:{display:false},title:{display:true,text:"My dataset"}}});if($("#bar-chart-horizontal2").length>0){var d=document.getElementById("bar-chart-horizontal2").getContext("2d");var k={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#689f38",borderColor:"#689f38",data:[10,59,40,75,50,45,80]},{label:"My Second dataset",backgroundColor:"#38649f",borderColor:"#38649f",data:[48,88,50,58,34,67,65]}]};var r=new Chart(d,{type:"horizontalBar",data:k,options:{tooltips:{mode:"label"},scales:{yAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}],xAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}],},elements:{point:{hitRadius:40}},animation:{duration:3000},responsive:true,legend:{display:false,},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}new Chart(document.getElementById("polar-chart1"),{type:"polarArea",data:{labels:["January","February","March","April"],datasets:[{label:"Dataset",backgroundColor:["#689f38","#38649f","#389f99","#ee1044","#ff8f00"],data:[2584,5698,5987,3485]}]},options:{title:{display:true,text:"Mt Dataset"}}});if($("#polar-chart2").length>0){var f=document.getElementById("polar-chart2").getContext("2d");var m={datasets:[{data:[11,16,7,3,14],backgroundColor:["#689f38","#38649f","#389f99","#ee1044","#ff8f00"],hoverBackgroundColor:["#33691e","#244674","#18625e","#b31338","#c0720f"],label:"My dataset"}],labels:["lab 1","lab 2","lab 3","lab 4","lab 5"]};var t=new Chart(f,{type:"polarArea",data:m,options:{elements:{arc:{borderColor:"#fff",borderWidth:0}},scale:{ticks:{beginAtZero:true,fontFamily:"Nunito Sans",},gridLines:{color:"rgba(135,135,135,0)",}},animation:{duration:3000},responsive:true,legend:{labels:{fontFamily:"Nunito Sans",fontColor:"#878787"}},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}new Chart(document.getElementById("radar-chart1"),{type:"radar",data:{labels:["January","February","March","April","May"],datasets:[{label:"250",fill:true,backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(179,181,198,1)",data:[8.77,55.61,21.69,6.62,6.82]},{label:"4050",fill:true,backgroundColor:"rgba(239, 72, 62, 0.2)",borderColor:"rgba(239, 72, 62, 1)",pointBorderColor:"#fff",pointBackgroundColor:"#ff4c52",pointBorderColor:"#fff",data:[25.48,54.16,7.61,8.060000000000001,4.45]}]},options:{title:{display:true,text:"My dataset"}}});if($("#radar-chart2").length>0){var e=document.getElementById("radar-chart2").getContext("2d");var l={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(116, 96, 238, 0.6)",borderColor:"rgba(116, 96, 238, 0.6)",pointBackgroundColor:"rgba(116, 96, 238, 0.6)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(116, 96, 238, 0.6)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(57, 139, 247, 1)",borderColor:"rgba(57, 139, 247, 1)",pointBackgroundColor:"rgba(57, 139, 247, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57, 139, 247, 1)",data:[28,48,40,19,96,27,100]}]};var u=new Chart(e,{type:"radar",data:l,options:{scale:{ticks:{beginAtZero:true,fontFamily:"Nunito Sans",},gridLines:{color:"rgba(135,135,135,0)",},pointLabels:{fontFamily:"Nunito Sans",fontColor:"#878787"},},animation:{duration:3000},responsive:true,legend:{labels:{fontFamily:"Nunito Sans",fontColor:"#878787"}},elements:{arc:{borderWidth:0}},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}new Chart(document.getElementById("line-chart1"),{type:"line",data:{labels:[4500,3500,3200,3050,2700,2450,2200,1750,1499,2050],datasets:[{data:[86,114,106,106,107,111,133,221,783,2478],label:"January",borderColor:"#689f38",fill:false},{data:[282,350,411,502,635,809,947,1402,3700,5267],label:"February",borderColor:"#38649f",fill:false},{data:[168,170,178,190,203,276,408,547,675,734],label:"March",borderColor:"#389f99",fill:false},{data:[40,20,10,16,24,38,74,167,508,784],label:"April",borderColor:"#ee1044",fill:false},{data:[6,3,2,2,7,26,82,172,312,433],label:"May",borderColor:"#ff8f00",fill:false}]},options:{title:{display:true,text:"My Dateset"}}});if($("#line-chart2").length>0){var c=document.getElementById("line-chart2").getContext("2d");var j={labels:["January","February","March","April","May","June","July"],datasets:[{label:"fir",backgroundColor:"#ff8f00",borderColor:"#ff8f00",pointBorderColor:"#ff8f00",pointHighlightStroke:"#ff8f00",data:[0,59,40,75,50,45,80]},{label:"sec",backgroundColor:"#ee1044",borderColor:"#ee1044",pointBorderColor:"#ee1044",pointBackgroundColor:"#ee1044",data:[48,88,50,58,34,67,65],}]};var a=new Chart(c,{type:"line",data:j,options:{tooltips:{mode:"label"},elements:{point:{hitRadius:90}},scales:{yAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}],xAxes:[{stacked:true,gridLines:{color:"rgba(135,135,135,0)",},ticks:{fontFamily:"Nunito Sans",fontColor:"#878787"}}]},animation:{duration:3000},responsive:true,legend:{display:false,},tooltip:{backgroundColor:"rgba(33,33,33,1)",cornerRadius:0,footerFontFamily:"'Nunito Sans'"}}})}});