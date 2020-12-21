// 스크립트 함수는 되도록이면 이쪽으로 빼려했는데 깜박해서.. 몇개 있습니다.

//input태그(numBox)를 클릭하면 토글형식으로 키패드가 나오게
$(document).ready(function(){
    $('#numBox').click(function(){
        $('#keypad').fadeToggle('fast');
    });
    
//관리자로그인 버튼을 누르면 id와 pwd의 input태그가 토글형식으로 나오게
    $("#adbtn").click(function(){
        $("#id").fadeToggle('slow');
        $("#pwd").fadeToggle('slow');
    });
});
var speed = 500;
function flash3(){
    var crosstable=document.getElementById? document.getElementById("adbtn") : document.all? document.all.myexample : "" 
    if (crosstable){ 
        if (crosstable.style.backgroundColor.indexOf("tomato")!=-1) {
            crosstable.style.backgroundColor="deepskyblue" 
        }
    else 
        crosstable.style.backgroundColor="tomato" 
    } 
} 
setInterval("flash3()", speed);
