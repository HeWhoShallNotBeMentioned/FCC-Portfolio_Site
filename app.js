console.log("I can see the js file");

const tags = [
         ["c#", 601251],
         ["java", 585413],
         ["javascript", 557407],
         ["php", 534590],
         ["android", 466436],
         ["jquery", 438303],
         ["python", 274216],
         ["c++", 269570],
         ["html", 259946],
         ["mysql", 226906],
         ["ios", 216765],
         ["asp.net", 209653],
         ["css", 199932],
         ["sql", 192739],
         ["iphone", 190382],
         [".net", 179522],
         ["objective-c", 172609],
         ["ruby-on-rails", 152860],
         ["c", 129998],
         ["ruby", 97414],
         ["sql-server", 91050],
         ["ajax", 85036],
         ["xml", 84295],
         ["regex", 81991],
         ["arrays", 80728],
         ["wpf", 80062],
         ["asp.net-mvc", 79697],
         ["database", 70777],
         ["linux", 70772],
         ["json", 70396],
         ["django", 68893],
         ["vb.net", 63061],
         ["windows", 62042],
         ["xcode", 60950],
         ["eclipse", 60512],
         ["string", 54249],
         ["facebook", 53745],
         ["html5", 51015],
         ["ruby-on-rails-3", 50109],
         ["r", 49842],
         ["multithreading", 49806],
         ["winforms", 46643],
         ["wordpress", 46632],
         ["image", 45910],
         ["forms", 41984],
         ["performance", 40607],
         ["osx", 40401],
         ["visual-studio-2010", 40228],
         ["spring", 40207],
         ["node.js", 40041],
         ["excel", 39973],
         ["algorithm", 38661],
         ["oracle", 38565],
         ["swing", 38255],
         ["git", 37842],
         ["linq", 37489],
         ["asp.net-mvc-3", 36902],
         ["apache", 35533],
         ["web-services", 35385],
         ["wcf", 35242],
         ["perl", 35138],
         ["entity-framework", 34139],
         ["sql-server-2008", 33827],
         ["visual-studio", 33664],
         ["bash", 33139],
         ["hibernate", 32263],
         ["actionscript-3", 31760],
         ["ipad", 29476],
         ["matlab", 29210],
         ["qt", 28918],
         ["cocoa-touch", 28753],
         ["list", 28556],
         ["cocoa", 28385],
         ["file", 28200],
         ["sqlite", 28114],
         [".htaccess", 28006],
         ["flash", 27908],
         ["api", 27480],
         ["angularjs", 27042],
         ["jquery-ui", 26906],
         ["function", 26485],
         ["codeigniter", 26426],
         ["mongodb", 26223],
         ["class", 25925],
         ["silverlight", 25878],
         ["tsql", 25706],
         ["css3", 25535],
         ["delphi", 25421],
         ["security", 25325],
         ["google-maps", 24919],
         ["vba", 24301],
         ["internet-explorer", 24270],
         ["postgresql", 24236],
         ["jsp", 24224],
         ["shell", 24184],
         ["google-app-engine", 23892],
         ["oop", 23634],
         ["sockets", 23464],
         ["validation", 23429],
         ["unit-testing", 23249]
        ];

        let list = tags.map(function(word) {
          return [word[0], Math.round(word[1]/5500)];
        });

        let clicked = function(ev){
          if(ev.target.nodeName === "SPAN") {
            let tag = ev.target.textContent;
            let clickedTag;
            tags.some(function(el) {
              if(el[0] === tag) {
                clickedTag = el;
                return true;
              }
              return false;
            }); {
              details = "There were " + clickedTag[1] + " Stack Overflow questions tagged \"" + tag + "\"";
            }
          }
          document.getElementById("details").innerText = details;
        };

        WordCloud(document.getElementById("cloud"), {list: list});

        document.getElementById("cloud").addEventListener("click", clicked);
