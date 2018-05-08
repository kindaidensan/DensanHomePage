function fullPageEvent(index, nextIndex, direction){
  if(nextIndex == 1){

  }else{

  }
}

$(function(){
  $("#fullpage").fullpage({
    anchors: ["stage1", "stage2", "stage3"],
    menu: "#menu",
    onLeave: fullPageEvent
  });
});
// $(document).ready(function() {
//   $('#fullpage').fullpage({
//     anchors: ['stage1', 'stage2', 'stage3'],
//     menu: '#menu'
//   })
// });
