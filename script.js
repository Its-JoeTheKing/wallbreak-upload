const ReadImage = (img) => {
    const reader = new FileReader();
    reader.addEventListener("load",(e)=>{
        var code = e.target.result;
        document.getElementById("img").value = code;
        document.getElementById("up").innerHTML = "<img id='img' src='"+code+"'>";
    })
    reader.readAsDataURL(img)
}
document.getElementById("up").onclick = () => {
    var image = document.getElementById("image");
    image.click()
    image.addEventListener("change",(e)=>{
        var file = e.target.files[0];
        ReadImage(file)
    })
    
}