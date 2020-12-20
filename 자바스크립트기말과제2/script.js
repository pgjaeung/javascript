$(document).ready(function(){
    $('#numBox').click(function(){
        $('#keypad').fadeToggle('fast');
        event.stopPropagation();
    });
    
    
    // Function commented out
    // due to Chrome apparently being the
    // only browser smart enough to work
    // right >.<
    
    //$('body').click(function(){
    //    $('#keypad').fadeOut('fast');
    //    event.stopPropagation();
    //});
    
    $('.key').click(function(){
        var numBox = document.getElementById('numBox');
        if(this.innerHTML == '0'){
            if (numBox.innerHTML.length > 0)
                numBox.innerHTML = numBox.innerHTML + this.innerHTML;
        }
        else
            numBox.innerHTML = numBox.innerHTML + this.innerHTML;
        
        event.stopPropagation();
    });
    
    $('.btn').click(function(){
        if(this.innerHTML == 'DEL'){
            var numBox = document.getElementById('numBox');
            if(numBox.innerHTML.length > 0){
                numBox.innerHTML = numBox.innerHTML.substring(0, numBox.innerHTML.length - 1);
            }
        }
        else{
            document.getElementById('numBox').innerHTML = '';
        }
        
        event.stopPropagation();
    });
});
