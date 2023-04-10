// variables
const generalBtn=document.getElementById("general");
const businessBtn=document.getElementById("business");
const sportsBtn=document.getElementById("sports");
const technologyBtn=document.getElementById("technology");
const entertainmentBtn=document.getElementById("entertainment");
const searchBtn=document.getElementById("searchBtn");
const newsQuery=document.getElementById("newsQuery");
const newsType=document.getElementById("newsType");
const newsdetails=document.getElementById("newsdetails");


// let userInput=prompt("Enter the country name ");



// Array
let newsDataArr=[];


// API data using api key 
const API_KEY="ec784a4d2ddf49c9b2016bcf14621ec0";
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q=";

window.onload=function(){
    newsType.innerHTML="<h2>Headlines</h2>";
    fetchHeadlines();
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h2>General News</h2>";
    fetchGeneralNews();

});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h2>Business News</h2>";
    fetchBusinessNews();
    
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h2>Sports</h2>";
    fetchSportsNews();
    
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h2>Technology</h2>";
    fetchTechnologyNews();
    
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h2>Entertainment</h2>";
    fetchEntertainmentNews();
    
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML=`<h2>Search: ${newsQuery.value}</h2>`;
    fetchQueryNews();
    
});



// fetching the data using arrow function
const fetchHeadlines= async () =>{
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();

}

const fetchGeneralNews= async () =>{
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();
}

const fetchBusinessNews= async () =>{
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();
}

const fetchSportsNews= async () =>{
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();
}


const fetchTechnologyNews= async () =>{
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();
}


const fetchEntertainmentNews= async () =>{
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);
    }

    displayNews();
}


const fetchQueryNews = async () =>{

    if(newsQuery.value==null){
        return;
    }
    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    newsDataArr=[];

    if(response.status>=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;
    }
    else{
        // we will print an error 
        console.log(response.status,response.statusText);

    }

    displayNews();
}



// creating a display function to print on web page
function displayNews(){

    newsdetails.innerHTML="";

    if(newsDataArr.length==0){
        newsdetails.innerHTML="<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news=>{

        let date=news.publishedAt.split("T");

        let col=document.createElement("div");
        col.className="col-sm-12 col-md-4 col-lg-3 card";

        let card=document.createElement("div");
        card.className="p-2";
        // card.setAttribute("data-tilt", "SOMEVALUE")
        // card.setAttribute("data-tilt");

        let image=document.createElement("img");
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        let cardBody=document.createElement("div");

        let newsHeading=document.createElement("h5");
        newsHeading.className="card-title text-white fw-bold";
        newsHeading.innerHTML=news.title;

        let dateHeading=document.createElement("h6");
        dateHeading.className="text-danger fw-bold fs-3 px-2";
        dateHeading.innerHTML=date[0];

        let description=document.createElement("p");
        description.className="text-dark fw-bold";
        description.innerHTML=news.description;

        let link=document.createElement("a");
        link.className="btn btn-light fw-bold fs-5";
        link.setAttribute("target","_blank");
        link.href=news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);

    });
}

