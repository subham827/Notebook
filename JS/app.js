let addbtn= document.getElementById('addbtn');
// let addtitle = document.getElementById('addtitle');
console.log("subham");
showNotes();
addbtn.addEventListener("click",function(e){
    let addtxt= document.getElementById("addtxt");
    // let tittle = document.getElementById("tittle");

    
    let notes= localStorage.getItem("notes");
    // let tite = localStorage.getItem("tite");
    if(notes == null){
        notesObj = [];
        // notesCan = [];
    }else{
        notesObj = JSON.parse(notes);
        // notesCan = JSON.parse(tite);
    }
    notesObj.push(addtxt.value);
    // notesCan.push(tittle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // localStorage.setItem("tite", JSON.stringify(notesCan));
    addtxt.value="";
    // tittle.value=""
    console.log(notesObj);
    // console.log(notesCan);
    showNotes();

})
function showNotes(){
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }let html = "";
    notesObj.forEach(function(element,index){
        html += ` 
        <div class=" notecard my-2 mx-2 card" style="width: 18rem;">
        
        <div class="card-body" style="background-color:orange">
          <h5 class="card-title">Notez ${index + 1}</h5>
          <p class="card-text" id="uu">${element}</p>
          <button id="${index}" onclick="deleete(this.id)" class="btn btn-primary">Delete</button>
        </div></div>`;
    });
    let noteselm= document.getElementById('notes');
    if(notesObj.length!=0){
        noteselm.innerHTML= html;
    }else{
        noteselm.innerHTML= "nothing"
    }
}
function deleete(index){
   
    let notes= localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
  
