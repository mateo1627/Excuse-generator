let who = ['dog','sister','cat','brother','niece'];
let what = ['my homework', 'my computer', 'my books', 'my headset'];
let action = ['ate', 'threw','broke','burned'];
let when = ['Sleeping', 'at the gym', "at rachel's", 'at the bar'];

let whoPosition = Math.floor(Math.random() * who.length);
let whatPosition = Math.floor(Math.random() * what.length);
let actionPosition = Math.floor(Math.random() * action.length);
let whenPosition = Math.floor(Math.random() * when.length);

function generateExcuses() {
   
   let excuses = `You are not gonna believe me but my ${who[whoPosition]} ${action[actionPosition]} ${what[whatPosition]} when I was ${when[whenPosition]};`
   
   const excuse = document.getElementById('excuse')
   excuse.innerHTML = excuses;

}

window.onload = generateExcuses;