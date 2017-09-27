// ----------更多的渲染
  var gengduo=`
     {{each gd ele}}
       <div> 
          <img src={{ele.img}}>
          <p>{{ele.title}}</p>
          <p>{{ele.price}}</p>
       </div>   
     {{/each}}
  `
  $.get('/gengduo',(data)=>{
    //  console.log(data);
       var gd_html = template.render(gengduo, { gd:data});
        $('.mgg_content').html(gd_html);

        $('.mgg_content div').hover(function () {
            $(this).css({
                border:'1px solid red'
            })
        },function () {
            $(this).css({
                 border:'1px solid white'
            })
        })
   })