const sports = document.querySelector('.sports');
const maincontainer = document.querySelector('.mobile-container');
const row=document.createElement('div');
row.className='row';

let sport = [
    {
      "img":'/assets/images/walking2.jpg',
      "title": 'Walking ',
      "description": 'You carry your own body weight when you walk. This is known as weight-bearing exercise. ',
    },
    {
        "img": '/assets/images/jumping.jpg',
        "title": 'Jumping Jack',
        "description": 'In Jumping Jacks, you bring your arms and legs together or apart at the same time while jumping up in the air.',
    },
    {
        "img": '/assets/images/push.jpg',
        "title": 'Push-ups',
        "description": 'Put your hands parallel and shoulder-width apart. Keep your back straight and your neck as unstrained as possible. ',
    },
    {
        "img": '/assets/images/squat.jpg',
        "title": 'Squats',
        "description": 'Position your feet hip-wide. Crouch down. Do not push your knees forward. ',
    },
    {
        "img": '/assets/images/plank.jpg',
        "title": 'Planks',
        "description": 'You lie on your stomach. Now lean on your forearms. Your elbows are at shoulder level and your forearms are parallel.',
    },
    {
        "img": '/assets/images/superman.jpg',
        "title": 'Superman',
        "description": 'Lie on your stomach. The legs are parallel. Stretch out your arms above your head and put them down. ',
    },
   
  ]

function createCard(){

    for(let i=0;i<sport.length;i++){
        let col=document.createElement('div');
        col.className='col-sm-6';
        let card=document.createElement('div');
        card.className='card1';
        let image=new Image();
        image.src=sport[i].img;
        let div2=document.createElement('div');
        div2.className='card2';
        let h= document.createElement('h3');
        h.innerHTML=sport[i].title;
        let desc= document.createElement('p');
        desc.innerHTML=sport[i].description;
        div2.appendChild(h);
        div2.appendChild(desc);
        card.appendChild(image);
        card.appendChild(div2);
       
        col.appendChild(card);
        row.appendChild(col);

    }
    sports.appendChild(row);
  document.body.appendChild(sports);

}
createCard();