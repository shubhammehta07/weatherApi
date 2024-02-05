const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val')
const temp_status=document.getElementById('temp_status')
const day=document.getElementById('day')
const today_date=document.getElementById('today_date')
const datahide=document.querySelector('.middle_layer')

// const arday=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// const date=new Date()
// day[arday].innerText=date.getDay();
// today_data.innerText=date.getDate();

const getCurrentDay=()=>{
    let weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thrusday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    let currentTime=new Date();
    let days=weekday[currentTime.getDay()];
    day.innerText=days
}
getCurrentDay();

const getCurrentTime=()=>{
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let now =new Date();
    let month=months[now.getMonth()]
    let date=now.getDate();
today_date.innerText=`${date} ${month}`
}
getCurrentTime();


const getInfor=async (event)=>{
event.preventDefault();
let cityVal=cityName.value;
if (cityVal==="") {
    city_name.innerText=`Plz write the name before getting result.`
} else {
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bd8095c531b335b4d5e65e083e69fb2c`; // here & use for multiple parametres like city name and units. metric use for convert in degree celcuis.
    const response =await fetch(url);
    const data= await response.json()
    const arrData=[data]
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp_real_val.innerText=arrData[0].main.temp;

    // temp_status.innerText=arrData[0].weather[0].main;
    //condition to check sunny or cloudy
    const tempMood=arrData[0].weather[0].main;
    if(tempMood=="Clear"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
    }else if(tempMood=="Clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
    }else if(tempMood=="Rain"){
        temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be;'></i>";
    }else{
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }

// Get and formate current time


    } catch (error) {
        console.log(error)
    }
}
}

submitBtn.addEventListener('click',getInfor)
