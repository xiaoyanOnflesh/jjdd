    //-----购特色的渲染 
    var goutese=`
       {{each gts ele}}
        <div>
         <img src={{ele.img}}>
          <div>
          <h4>{{ele.title}}</h4> 
          <p>{{ele.desc}}</p> 
          </div>
       </div>
       {{/each}}
    `
$.get('/goutese',(data)=>{
    console.log(data);
    var gts_html = template.render(goutese, {gts: data});
    $('.gts_content').html(gts_html);

    var gts_color=['#997764','#876D8E','#D24F4F','#DF745D','#6999BB','#6999BB','#BA6794','#50B681'];
    for (var i = 0; i < $('.gts_content>div>div').length; i++) {
        $('.gts_content>div>div').eq(i).css({
           'background-color': gts_color[i]
        })
        
    }
})