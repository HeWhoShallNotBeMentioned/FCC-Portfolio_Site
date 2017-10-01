console.log("I can see the js file");

(function(){

          let $projects = $('.projects');
          let $buttons = $('#buttons');
          let tagged = {};

          $projects.each(function(){
            let project = this;
            let projectTags = $(this).data('tags');
              // console.log("projectTags", projectTags);
            if (projectTags) {
              projectTags.split(',').forEach(function(tagName){
                if(tagged[tagName] == null) {
                  tagged[tagName] = [];
                }
                tagged[tagName].push(project);
              });
            }
          });
          console.log("tagged ", tagged);

          $.each(tagged, function(tagName) {
            $('<button/>', {
              text: tagName + ' (' + tagged[tagName].length + ')',
              click: function () {
                $(this)
                  .addClass('active')
                  .siblings()
                  .removeClass('active');
                $projects
                  .hide()
                  .filter(tagged[tagName])
                  .show();
              }
            }).appendTo($buttons);
          });

          let tagged2 = Object.entries(tagged);


          let list = tagged2.map(function(word) {
              let x = word[0];
              let y = word[1].length;
              if (x == "all") {
               return ["",0];
              }
            return [x, y];
          });
          
          console.log("list ", list);
          WordCloud(document.getElementById("cloud"), {list: list, color: "random-light", backgroundColor: "black", gridSize: 30, weightFactor: 10,});

        }());
