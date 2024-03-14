const loadingAreaGrey = document.getElementById('loading');
const loadingAreaGreen = document.getElementById('loading-screen');
const loadingText = document.querySelector('#loading p');

//ロードが終わった時の処理
window.addEventListener('load', () => {

    //loadedクラスを追加して背景色を透明にする    
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },        
    );

    //緑色の背景が下から上に移動
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        },
    );

    //loadingテキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            },
        ],  
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});


const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');



    thumbImages.forEach((thumbImage) => {
        thumbImage.addEventListener('mouseover', (event) => {
            mainImage.src = event.target.src;
            console.log(thumbImage.src);
            
                       
            mainImage.animate({opacity: [0, 1]}, 500); 
        });
    });

/* --------------------------------------- */
//開閉ボタンをクリックした時のイベント
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

//メニューを開く
menuOpen.addEventListener('click', () => {
    console.log('メニューを開く');
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);


    //リンクを上から順に表示させる
    menuItems.forEach((menuItem, index) => {
        console.log(`${index}番目のリスト`);

        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 2400,
                easing: 'ease',
                delay: index * 300,
                fill: 'forwards',
            },
        );
    });
});

//メニューを閉じる
menuClose.addEventListener('click', () => {
    console.log('メニューを閉じる');
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);

    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity: [1, 0]}, menuOptions);
    });
});

