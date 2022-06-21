const redes = document.querySelector('.redes');

function watchRedes() {
    redes.style.top = `-${redes.clientHeight < window.scrollY ?
            redes.clientHeight : 0
        }px`;
}

window.addEventListener('scroll', watchRedes);

const nav = document.querySelector('.up');

function watchMenu() {
    nav.style.top = `-${redes.clientHeight < window.scrollY ?
            redes.clientHeight : 0
        }px`;
}

window.addEventListener('scroll', watchMenu);


const blur = document.querySelector('.nav_container');

function difuminado() {
    blur.style = `backdrop-filter: blur(${redes.clientHeight < window.scrollY ?
            redes.clientHeight : 0
        }px);`;
}

window.addEventListener('scroll', difuminado);





// ////////
// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });