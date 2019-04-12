/*

*/





const elChat = document.getElementById('chat');

const iAm = 'RP';
const messages = [ 
  {text: "Hello", time: `2:06PM`, who:`GB`}, 
  {text: "Oh hey", time: `2:07PM`, who:`RP`}, 
  {text: "What's up?", time: `2:09PM`, who:`GB`}, 
  {text: "Nothing. Chillin.", time: `2:10PM`, who:`RP`} 
];



const aMessage = (msg) => {

  let whichDirection = `received`;
  if (msg.who == iAm) {
    whichDirection = `sent`
  }

  return `
    <div class="message-${whichDirection}">
      <div class="bubble">${msg.text}</div>
      <div class="timestamp">
        <div class="avatar">${msg.who}</div>
        <div class="time">${msg.time}</div>
      </div>
    </div>`;
}


elChat.innerHTML += messages.map( aMessage ).join('');










// function printMessage() {

// }

// for (let index = 0; index < messages.length; index++) {
//   elChat.innerHTML += `${messages[index]}<br>`;
// }

// messages.forEach( (msg) => elChat.innerHTML += `${msg}<br>` );

// for (let index = 0; index < 100; index++) {
//   elChat.innerHTML += `${index}<br>`;
// }