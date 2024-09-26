var currentDiv;
var currentSubDiv;
var currentBubble;
var currentIcon;
var index = 0;
var currentVideo;

function ShowDiv(y) {
    var x = document.getElementById(y);

    if (currentSubDiv != undefined)
    {
        currentSubDiv.style.display = 'none';
    }

    if (x.style.display == 'none') 
    {
        if (currentDiv != undefined)
        {
            currentDiv.style.display = 'none';
        }

        x.style.display = 'block';
        currentDiv = document.getElementById(y);
    } 
    else 
    {
        x.style.display = 'none';
    }
}

function ShowSubDiv(y,z) {

    var x = document.getElementById(y);

    if (currentVideo != null) currentVideo.pause();

    currentVideo = document.getElementById(y + "Video");
    
    
    if (x.style.display == 'none') 
    {
        if (currentSubDiv != undefined) 
        {
            currentSubDiv.style.display = 'none';
        }

        x.style.display = 'block';
        currentSubDiv = document.getElementById(y);
    } 
    else 
    {
        x.style.display = 'none';
        currentBubble.style.border = null;
        return;
    }

    if (currentBubble != undefined)
    {
        currentBubble.style.border = null;
    }

    currentBubble = document.getElementById(z);
    currentBubble.style.border = '4px solid rgb(2, 209, 255)';
}

function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}