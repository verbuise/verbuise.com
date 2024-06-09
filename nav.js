var dropdowns = ['orgDropdown', 'alertDropdown']
for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = document.getElementById(dropdowns[i]);
    openDropdown.style.display = 'none'
}



window.onclick = function (event) {

    var dropdowns = ['orgDropdown', 'accDropdown', 'alertDropdown']
    for (i = 0; i < dropdowns.length; i++) {
        console.log(i, document.getElementById(dropdowns[i]))
        if (document.getElementById(dropdowns[i]).style.display == 'block') {
            document.getElementById(dropdowns[i]).style.opacity = 1
            var opacity = 1

            var fadeout = setInterval(() => {
                console.log(i - 1)
                document.getElementById(dropdowns[0]).style.opacity = opacity;
                document.getElementById(dropdowns[1]).style.opacity = opacity;
                document.getElementById(dropdowns[2]).style.opacity = opacity;
                opacity -= 0.25;
                if (opacity < 0) {
                    document.getElementById(dropdowns[0]).style.display = 'none'
                    document.getElementById(dropdowns[1]).style.display = 'none'
                    document.getElementById(dropdowns[2]).style.display = 'none'
                    clearInterval(fadeout)
                    return;
                }
            }, 30);

            fadeout
        }
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown(id) {
    if (document.getElementById(id).style.opacity > 0.99) {
        document.getElementById(id).style.opacity = 1

        var opacity = 1

        var fadeout = setInterval(() => {
            document.getElementById(id).style.opacity = opacity;
            opacity -= 0.25;
            console.log(opacity)
            if (opacity < 0) {
                document.getElementById(id).style.display = 'none'
                clearInterval(fadeout)
                return;
            }
        }, 30);

        fadeout


    } else {

        document.getElementById(id).style.opacity = 0
        document.getElementById(id).style.display = 'block'

        var opacity = 0

        var fadein = setInterval(() => {
            document.getElementById(id).style.opacity = opacity;
            opacity += 0.5;
            console.log(opacity)
            if (opacity > 1) {
                clearInterval(fadein)
                return;
            }
        }, 10);

        fadein
    }
}
