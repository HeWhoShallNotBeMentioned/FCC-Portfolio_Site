console.log("I can see the js file");
//Interactive Buttons
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

          function sortObject(obj) {
            var arr = [];
            var prop;
            for (prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                arr.push({
                  'key': prop,
                  'value': obj[prop]
                });
              }
          }
              arr.sort(function(a, b) {
                return a["key"].toUpperCase() > b["key"].toUpperCase();
              });
              return arr;
          }

          let sorted = sortObject(tagged);

          $.each(sorted, function(val, val2) {
            let key = Object.values(val).join("");
            let num = Object.keys(val2).length;
             $('<button/>', {
              text: val2.key + ' (' + val2.value.length + ')',
              class: "myHover",
              click: function () {
                $(this)
                  .addClass('active')
                  .siblings()
                  .removeClass('active');
                $projects
                  .hide()
                  .filter(val2.value)
                  .show();
              }
            }).appendTo($buttons);
          });

          //Word Box
           let tagged2 = Object.entries(tagged);

          let list = tagged2.map(function(word) {
              let x = word[0];
              let y = word[1].length;
              if (x == "All") {
               return ["",0];
              }
            return [x, y];
          });

          console.log("list ", list);
          WordCloud(document.getElementById("cloud"), {list: list, color: "random-light", backgroundColor: "black", gridSize: 30, weightFactor: 8});

        }());
