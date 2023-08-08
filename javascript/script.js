function buy() {
    // Get the content to transfer
    var contentToTransfer = document.getElementById("1").innerHTML;
            
    // Store the content in localStorage
    localStorage.setItem("transferContent", contentToTransfer);
    
    window.location.href = "buy.html";
}