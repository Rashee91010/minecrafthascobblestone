canvas = new fabric.Canvas("myCanvas");

playerx = 10;
playery = 10;
imageheight = 30;
imagewidth = 30;
playerobject = "";
imageobject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);
    });
}

function image_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        imageobject = Img;
        imageobject.scaleToWidth(imagewidth);
        imageobject.scaleToHeight(imageheight);
        imageobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(imageobject);
    });
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift Key and P pressed together");
        imagewidth = imagewidth + 10;
        imageheight = imageheight + 10;
        document.getElementById("current_width").innerHTML = imagewidth;
        document.getElementById("current_height").innerHTML = imageheight;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift Key and M pressed together");
        imagewidth = imagewidth - 10;
        imageheight = imageheight - 10;
        document.getElementById("current_width").innerHTML = imagewidth;
        document.getElementById("current_height").innerHTML = imageheight;
    }

    if (keypressed == '37') {
        console.log("Left arrow key is pressed");
        left();
    }
    if (keypressed == '38') {
        console.log("Up arrow key is pressed");
        up();
    }
    if (keypressed == '39') {
        console.log("Right arrow key is pressed");
        right();
    }
    if (keypressed == '40') {
        console.log("Down arrow key is pressed");
        down();
    }

    if (keypressed == '67') {
        image_update('cloud.jpg');
        console.log("c is pressed");
    }

    if (keypressed == '68') {
        image_update('dark_green.png');
        console.log("d is pressed");
    }

    if (keypressed == '71') {
        image_update('ground.png');
        console.log("g is pressed");
    }

    if (keypressed == '76') {
        image_update('light_green.png');
        console.log("l is pressed");
    }

    if (keypressed == '82') {
        image_update('roof.jpg');
        console.log("r is pressed");
    }

    if (keypressed == '84') {
        image_update('trunk.jpg');
        console.log("t is pressed");
    }

    if (keypressed == '85') {
        image_update('unique.png');
        console.log("u is pressed");
    }

    if (keypressed == '87') {
        image_update('wall.jpg');
        console.log("w is pressed");
    }

    if (keypressed == '89') {
        image_update('yellow_wall.png');
        console.log("y is pressed");
    }
}

function up() {
    if (playery >= 0) {
        playery = playery - imageheight;
        console.log("Image height=" + imageheight);
        console.log("When up key is pressed X = " + playerx + "Y = " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}

function down() {
    if (playery <= 700) {
        playery = playery + imageheight;
        console.log("Image height=" + imageheight);
        console.log("When down key is pressed X = " + playerx + "Y = " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}

function left() {
    if (playerx >= 0) {
        playerx = playerx - imagewidth;
        console.log("Image width=" + imagewidth);
        console.log("When left key is pressed X = " + playerx + "Y = " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}

function right() {
    if (playerx <= 900) {
        playerx = playerx + imagewidth;
        console.log("Image width=" + imagewidth);
        console.log("When right key is pressed X = " + playerx + "Y = " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}

