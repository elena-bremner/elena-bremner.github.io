---
title: "Volar"
date: "JANUARY, 2019 (6 WEEKS)"
desc: ""
square: ./volar/coverImage.png
order: 6
---

<style>


/*.intro-img{
  width:100%;
  height:auto;
  float:left;
  padding-right:10%;
  margin:auto;

}*/
.intro{
   font-family: 'IBM Plex Sans', sans-serif;
   line-height: 2;
   float:left;
   margin:auto;
}

.introimg {
  width:60%;
  padding-left:20%;
  padding-right:20%;
  margin:auto;
  background-color:#83a5c3;
  margin-bottom:200px;
  margin-top:100px;

}
.Title {
  font-family: 'IBM Plex Sans', sans-serif;
  color:#253E50;
  font-size: 22pt;
  font-weight:bold;


}
.subTitle{
  font-family: 'Montserrat', sans-serif;
  font-weight:600;
  font-size:14pt;
/*  color:gray;*/
  color:gray;


}
.paragraph{

  font-size:14pt;
  width:700px;
  color:#0f0f0f;
  line-height:2;
  font-weight:lighter;
  background-color:#f9f9f9;
  padding-left:300px;
  padding-right:330px;
  padding-top:50px;
  padding-bottom:50px;
  margin-top: -15px;

}
.subParagraph{
  margin-top:50px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size:14pt;
  text-align: left;
  color:#253E50;
  width:600px;
  line-height:1.6;
}

.problem{
 /* background-color: #F5F5F5;*/
  margin:auto;
  font-family: 'IBM Plex Sans', sans-serif;
  padding:30px;
  padding-right:75px;
  padding-left:75px;
  width:800px;
  font-size:25px;
  color:black;
  text-align:center;
  margin-bottom:50px;
  margin-top:100px;
  line-height:1.2;
  font-weight:bold;
}
  .millie{
    width:10%;
    float:right;
    padding-top:50px;
    margin-right:400px;
  }

  .images {
    padding-top:100px;
    width:60%;
    margin:auto;

  }
  .stats{
    
    background-image: linear-gradient(white 68%,#73bfe6 32%);

  }
  .line{
    border-width:thin;
    border-style:solid;
  }

.dot{
    background-image: radial-gradient(#83a5c3 10%, white 10%);
  background-position: 0 0;
  background-size: 50px 50px;
  height: 200px;
  width: 100%;
  color:pink;
  }

  .vidsize{
  width:25%;
  display: flex;
  flex-direction: column;
  float:right;
  margin-top:250px;
  margin-right:150px;
  }


}

</style>
<div style=" 
    font-family: 'IBM Plex Sans', sans-serif;
    color:black;
    font-size: 12pt;
    font-weight:medium;
    width: 600px;
    line-height:2;
">
  <b>Intro: </b> The US is certainly not known for its world-class airports. The top-ranked US airport in the 2019 Skytrax Ranking is Denver Airport, which came in 32nd place. In contrast, Singapore Changi airport was awarded best airport honors, deservingly so given its impeccable architecture and fluid transitions between shops and facilities that help passengers forget that they are in an airport. 
  Yet most of these higher ranking airports were built fairly recently. </br>Here’s the challenge: How can we improve a passenger’s experience navigating the complex architecture and layout of older airports?

</div>

<div class = "introimg">
   <img src = "./volar/blue.png"> 
</div>
<!-- 1 -->
<div class = "Title" >
    Research
    <hr class="line">
    <h6 class = "paragraph">
      How do we improve the airport experience without changing the architecture or layout?
       To highlight checkpoints of what people found most stressful and frustrating at airports, 
       I began my project with some research and interviews conducted on regular flyers. Additionally, I looked 
       at existing airport platforms and apps to see what is working well and what is not.
        It was also critical to look into limitations and existing technologies that could
       be implemented into making information more accessible. 
    </h6>
</div>
<!-- 1a -->
<div class = "problem">
    Passengers have a small time window but no information about how to use it. They're stumbling around in 
    the dark and can use some guidance to get to their destination.
</div>
    </br>
<div class="stats">
    <img src = "./volar/volar_stat.png"> 
</div>
    </br>
    </br>
<!-- 1b -->
<div class = "subTitle">
    THE PROBLEM
</div>
<div class = "problem">
    How can I improve the passenger’s experience navigating the complex architecture and layout of airports?
</div>
<hr/ width="100%">
<div class = "subTitle">
    INTERVIEW FINDINGS
</div>
</br>
<div style="font-family: 'IBM Plex Sans', sans-serif;font-weight:medium;font-size:14pt; margin:auto; width:700px;">
    1. Uncertainty of catching their flight.
  </br>
  </br>
    2. Fear of authoritative figures at airports having the power to decide if you get to enter the country.
  </br>
  </br>
    3. Inefficient use of time.  
</div>
    </br>
    </br>
<hr/ width="100%">
 <div class="millie">
    <img src = "./volar/Millie.png" > 
</div>
<!-- 1c -->
<div class = "subTitle">
    STORYBOARD
</div>
<div class = "subParagraph">
    Millie is an experienced flyer. Even she gets frazzled by air travel every now and then. </br></br>
    Different airports have different procedures and Millie has missed a few flights because of it. She wishes she had more confidence that she will get to her gate on time.
</div>
<div style = " width:70%; margin:auto; padding-bottom:8%; margin-top:80px;" >
    <img src = "./volar/storyboard.png" > 
</div>
<!-- 1d -->
<div class = "subTitle">
    PLAYERS
</div>
<div class = "subParagraph">
    To view constraints and existing technologies, I created a diagram of stakeholders involved. 
   Lidar scanners allow airports to view how crowded the airport is in live time. 
</div>
<!-- <div style="background-color:black; margin-bottom:8%;">
    <img src = "./volar/stakeholderimage.png" > 
</div> -->
<div style= "width:20%; margin-bottom:100px; /*margin-right:200px;*/ margin:auto;">
    <img src = "./volar/stakeholder.png" > 
</div>
<!-- 1e -->
<hr/ width="100%">
<div class = "subTitle">
  EXISTING PLATFORMS
</div>
<!-- <div class = "subParagraph">
    It was critical for me to view the what's out there and why people aren't using them. 
</div> -->
<div style="width:45%; margin:auto; margin-bottom:100px">
    <img src = "./volar/existingPlatforms.png" > 
</div>
<!-- 1f -->
<hr/ width="100%">
<div class = "subTitle">
    FEATURES
</div>
<div class ="images">
    <img src = "./volar/workpls.png" > 
</div>
<div style = "  margin-top:100px;font-family: 'IBM Plex Sans', sans-serif;color:#253E50;font-size: 22pt;font-weight:bold;">
    Ideation
    <hr style="border-style:solid;width:100%;">
</div>
 <h6 class = "paragraph" style="background-color:#f9f9f9;font-family: 'IBM Plex Sans' ">
     After I had an understanding of my constraints, I went into my ideation stage. Using the journey map to see the checkpoints and any possible frustrations users may face, I started sketching out possible interfaces.
   </br>
     During this time, I focused on keeping the design as simple as possible. Passengers are already occupied in the airport, the last thing they need is a complicated app disrupting their experience. 
 </h6>
<div class ="subTitle">
    SKETCHES
</div>
<div class = "subParagraph">
    Sketching and ideating allowed me to hash out focal user needs and simplify the solutions.
</div>
<div style ="width:65%; margin-bottom:100px; margin:auto">
    <img src = "./volar/sketches.png" > 
</div>
<div class ="subTitle">
    WIREFRAMES
</div>
<div class = "subParagraph">
   To figure out a good user flow, I created base designs for possible interfaces. 
</div>
<div style =" margin:auto;width:50%; margin-bottom:100px;">
    <img src = "./volar/wireframe.png" > 
</div>
<!-- 2a-->
<div class = "Title">
  Final Designs
  <hr class="line">
</div>
<div class = "subParagraph">
    After many iterations based on feedback, I created finalized designs for the app. Focusing on passengers' focal problems, I created three designs for three main features: queue times, checkpoints, and activities. 
</div>
 <video class = "vidsize" controls autoplay loop >
    <source src="./volar/checkpointsAnimation.mp4" type="video/mp4">
  </video>
<div style= "width:60%; /*float:left; */ float:left; margin-top:100px;">
    <img src = "./volar/interfaces1.png" > 
</div>
<div style= " margin-top:750px; width:60%; /*float:right;*/">
    <img src = "./volar/interfaces2.png" > 
</div>
<div class = "Title">
  Self Reflection
  <hr style="border-width:thin;border-style:solid; margin-bottom:50px;}">
</div>
<div style=" margin-top:100px; font-family: 'IBM Plex Sans',sans-serif;font-size:14pt; text-align: left;color:#253E50;width:600px;line-height:1.6; margin:auto;">
I've always found wonder in the idea of creating an experience with just a few phone screens. 
Since my university did not offer classes on UIUX at the time, I started this project as a way to introduce and educate myself to the world of pixels and icons. 
Despite my initial doubts, <b style = "color:blue;">I've come to realize that UIUX - when done effectively opens up new opportunities that would be quite difficult to create with physical objects. </b> In this case, creating a seamless journey through the airport seems a lot more feasible than changing the architecture of an airport. 
</br>
</br>
In terms of the process, I've noticed that it is easy to assume what users want. Talking and listening to users may be the most effective way to find out what users really need. In addition, keeping the user flow simple and intuitive is as important as focusing on an array of features. 
</br>
<div>
  Note to future self: 
</div>
<div style = "margin-bottom:100px; text-indent: 50px; font-style: italic; ">
  <b >
  Solve one problem at a time, you're not trying to save the world. 
  </div>
</div>



<!-- <video class = "vidsize" controls autoplay loop>
  <source src="./volar/foodyes.mp4" type="video/mp4">
</video>
<video class = "vidsize" controls autoplay loop>
  <source src="./volar/tic.mp4" type="video/mp4">
</video> -->

