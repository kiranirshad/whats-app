let arrayName= [
{
	name: `<strong>Saba</strong>`,
	contact: "03242335768",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "saba@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick :  `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Kiran</strong>`,
	contact: "03244987218",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "kiran@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Noor</strong>`,
	contact: "03220576018",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "noor0@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Brira</strong>`,
	contact: "03242965048",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "brira@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Amna</strong>`,
	contact: "03242392208",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "amna@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Inshal</strong>`,
	contact: "03242409778",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "inshal@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Madiha</strong>`,
	contact: "03242409988",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "madiha@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Sarah</strong>`,
	contact: "03245466618",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "sarah@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Sadaf</strong>`,
	contact: "03242445618",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "sadaf@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Iqra</strong>`,
	contact: "03242300018",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "iqra@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double imgee"></i>`,
	qoute : "So many books, so little time"
}
];



function initialize() {
	let userSec = document.querySelector(".name-list");
	for (let i=0; i<arrayName.length; i++) {
		userSec.innerHTML += 
		`<div class="list-item" onclick="show(${i})">
				 ${arrayName[i].img}
		    <div class="names-flex">
				 <span class="spans-1">
					 <span> ${arrayName[i].name}</span>
					 <span> ${arrayName[i].lastSeen}</span>
				 </span> 
				 <span class="spans">${arrayName[i].imgtick} ${arrayName[i].lastMsg}</span>
		 	</div>
		 </div>`;
	}


}
function show(details) {
	document.querySelector(".first-display-text").style.display = "none";
	document.querySelector(".image").innerHTML = arrayName[details].img; 
	document.querySelector(".name").innerHTML = arrayName[details].name; 
	document.querySelector(".number").innerHTML = "<i class='fas fa-phone'></i>"+arrayName[details].contact; 
	document.querySelector(".email").innerHTML = "<i class='fas fa-envelope'></i>"+arrayName[details].Email; 
	document.querySelector(".para").innerHTML = arrayName[details].qoute; 
	 
	
}









