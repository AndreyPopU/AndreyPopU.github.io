var currentDiv;
var currentSubDiv;
var currentBubble;
var currentIcon;
var index = 0;

function ShowNext(x, y, z)
{
    var imageSwitch = document.getElementById(y);
    
    if (z == '-') index--;
    else index++;

    if (index > 2) index = 0;
    if (index < 0) index = 2;
    
    if (x == 'Sticky')
    {
        switch(index)
        {
            case 0: imageSwitch.src = "images/Sticky1.png"; break;
            case 1: imageSwitch.src = "images/Sticky2.png"; break;
            case 2: imageSwitch.src = "images/Sticky3.png"; break;
        }
    }
    else if (x == 'Knighty')
    {
        switch(index)
        {
            case 0: imageSwitch.src = "images/Knighty1.png"; break;
            case 1: imageSwitch.src = "images/Knighty2.png"; break;
            case 2: imageSwitch.src = "images/Knighty3.png"; break;
        }
    }
    else if (x == 'Roguelike')
    {
        switch(index)
        {
            case 0: imageSwitch.src = "images/Roguelike1.png"; break;
            case 1: imageSwitch.src = "images/Roguelike2.png"; break;
            case 2: imageSwitch.src = "images/Roguelike3.png"; break;
        }
    }
    else if (x == 'Roll')
    {
        switch(index)
        {
            case 0: imageSwitch.src = "images/Roll1.png"; break;
            case 1: imageSwitch.src = "images/Roll2.png"; break;
            case 2: imageSwitch.src = "images/Roll3.png"; break;
        }
    }
    else if (x == 'Blocky')
    {
        switch(index)
        {
            case 0: imageSwitch.src = "images/Blocky1.png"; break;
            case 1: imageSwitch.src = "images/Blocky2.png"; break;
            case 2: imageSwitch.src = "images/Blocky3.png"; break;
        }
    }
}

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

    if (z == 'grocerybubble')
    {
        document.getElementById('grocerytrailer').src = 'https://www.youtube.com/embed/yXpWcGiJwZA';
    }
    else
    {
        document.getElementById('grocerytrailer').src = '';
    }

    var x = document.getElementById(y);
    
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