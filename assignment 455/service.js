function process(){

    var person = document.getElementById("nameBox").value ; 
    var courses = parseInt(document.getElementById("coursesBox").value) ; 

    if (courses > 1 ) {

      document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person}, please click on contect button</h4>`;
    }
    else {

       document.getElementById("content").innerHTML= `
      <h4> Sorry ${person}, we cannot help you </h4>`;
    }

    // 333333333333333
}