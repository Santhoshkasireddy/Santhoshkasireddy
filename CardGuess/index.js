
let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPp9HWipCrt7CuiC4bglCHuK5_rg4xp-Nkcoe6zVeJ4Rnm3LBmOH6Zatk1voFXIIdd8I&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPp9HWipCrt7CuiC4bglCHuK5_rg4xp-Nkcoe6zVeJ4Rnm3LBmOH6Zatk1voFXIIdd8I&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/aa/4d/27/aa4d270f63af76a1ef7a5fe2416b983c.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/aa/4d/27/aa4d270f63af76a1ef7a5fe2416b983c.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg",
        value:5,
        status:"closed"
    },
    
]
  
//durnsten shuffling alogorithm
   let temp;
 for(let i=cards.length-1;i>=0;i--){
     let j=Math.floor(Math.random()*(i+1)); 
  //swapping
     temp = cards[i];
     cards[i]=cards[j];
     cards[j]=temp;
 }


let cardsCopy=cards;

 function displayCards(data){
      let cardsString="";
      
      data.forEach(function(card,index){
           cardsString+=`

           <div class="card" style="background-image:url('${card.image}')">
             <div class="overlay ${card.status}" onclick="openCard(${index})" >

             </div>
           </div>
           `;
      });
      document.getElementById('cards').innerHTML=cardsString;  

 }

 displayCards(cards);


 let val1=null,val2=null;
 let cardCount =1;
 let score =0;
 function openCard(index){
   cards[index].status="opened";
   if(cardCount===1){
       val1 =cards[index].value;
    cardCount++;
   }
   else if(cardCount===2){
       val2=cards[index].value;

       if(val1===val2){
          score++;
          document.getElementById('score').innerText=score;
          //reset after one guess
          val1=null;
          val2=null;
          cardCount=1;
       }
       else{
        //   score=0;
        //   val1=null;
        //   val2=null;
        //   cardCount=1;
        //   document.getElementById('score').innerText=0;
        //   cards=cardsCopy;
        alert("Game Over");
        location.reload();
       }
   }
   displayCards(cards);
 }