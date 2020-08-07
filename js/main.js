function myfunction(v) {
var visible=document.getElementById('visible');
if(visible.style.display=='block')
{
     var display=document.getElementById('display');
     display.style.display = 'block';
    
    visible.style.display = 'none';

    var display_after=document.getElementById('display-after');
    display_after.style.display = 'none';
    
    
}
else{
    var display_after=document.getElementById('display-after');
    display_after.style.display = 'block';
    visible.style.display = 'block';

     var display=document.getElementById('display');
     display.style.display = 'none';
}
}