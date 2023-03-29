
$(document).ready( function () {
    
    var imgs = ['./picture/1.png', './picture/2.png', './picture/3.png'];
    
    var me = 0;
    var enemy = 0;
    var winCount = 0;
    var loseCount = 0;
    var safeCount = 0;

    function compare(me) {
        enemy = Math.floor(Math.random()*3);
        $('#imgEnemy').attr('src', imgs[enemy]);

        if (me - enemy === -1 || (me === 2 && enemy === 0)) {
            $('#result').text("You WIN!");
            winCount += 1;
            $('#wintime').text("W " + winCount);
        }
        else if (me === enemy) {
            $('#result').text("SAFE");
            safeCount += 1;
            $('#safetime').text(" S " + safeCount);
        }
        else {
            $('#result').text("You LOSE");
            loseCount += 1;
            $('#losetime').text(" L " + loseCount);
        }
    }
    
    $('#btnR').click(function() {
        me = 0;
        $('#imgMe').attr('src', imgs[me]);
        compare(me);
    });

    $('#btnS').click(function() {
        me = 1;  
        $('#imgMe').attr('src', imgs[me]);
        compare(me);
    });

    $('#btnP').click(function() {
        me = 2;
        $('#imgMe').attr('src', imgs[me]);
        compare(me);
    });

});



