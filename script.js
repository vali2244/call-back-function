
const submit=()=>{
    let em=document.getElementById('Em').value
    let pass=document.getElementById('Pass').value
    if(em=="syedvali@gmail.com" && pass=="12345"){
        document.getElementById('form').style.display="none"
        document.getElementById('load').style.display="flex"
      setTimeout(submitMyData,2000)
    }
    else{
alert('Wrong Credentials')
    }
}


const submitMyData=()=>{
    document.getElementById('load').style.display="none"
    window.location.href="index2.html"

}