const burgAnimation = () =>{
    var burger = document.querySelector('.svgburg')
     var path1 = document.querySelector('.path1')
     var path2 = document.querySelector('.path2')
     var mline = document.querySelector('.mline')
     var links = document.querySelector('.links')
     burger.addEventListener('click',() =>{     
         path1.classList.toggle('cross');
         path2.classList.toggle('cross');
         mline.classList.toggle('hide');
         links.classList.toggle('link')
        }
      )
  
  }
 burgAnimation();
 