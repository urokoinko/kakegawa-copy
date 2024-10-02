<script setup>
// import { VueSlickCarousel } from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



onMounted(() => {
    // carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY);


    console.log()

    // モバイル画面　スライドショー
    $('.mobile-ct-list01').slick({
        autoplay: true,       //自動再生
        autoplaySpeed: 3000,  //自動再生のスピード
        speed: 600,           //スライドするスピード
        dots: true,           //スライド下のドット
        infinite: true,       //永久にループさせる
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });
    //     $('.mobile-ct-list02').slick({
    //     autoplay: true,       //自動再生
    //     autoplaySpeed: 3000,  //自動再生のスピード
    //     speed: 600,           //スライドするスピード
    //     dots: true,           //スライド下のドット
    //     infinite: true,       //永久にループさせる
    //     pauseOnFocus: false,//フォーカスで一時停止を無効
    //     pauseOnHover: false,//マウスホバーで一時停止を無効
    //     pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    // });

})


</script>

<template>
    <div class="contents-inner">
        <div class="inner-text">
            <div class="inner-text-copy">「鳥と花とのふれあい」が楽しめる<span>全天候型テーマパーク</span></div>
            <div class="inner-title">
                <div class="inner-title-imgL">
                    <img src="https://k-hana-tori.com/new/img/arrow_L.png" alt="">
                </div>
                <div class="inner-title-imgR">
                    <img src="https://k-hana-tori.com/new/img/arrow_R.png" alt="">
                </div>
                <h1>掛川花鳥園の楽しみ方</h1>
            </div>
        </div>
        <div class="inner-ct">
            <div class="pc-inner-ct">
                <div class="ct-list01">
                    <li class="ct1">
                        <div class="ct-list-img">
                            <span class="ct-img">
                                <img class="slide" src="../asset/kakegawa-img/105b_L.jpg" alt="">
                            </span>
                        </div>
                        <div class="bird_1"></div>
                        <div class="ct-more">
                            <a href="#">迫力満点の<br>バードショー</a>
                        </div>
                    </li>
                    <li class="ct2">
                        <div class="ct-list-img">
                            <span class="ct-img">
                                <img class="slide" src="../assets/kakegawa-img/105d_L.jpg" alt="">
                            </span>
                            <div class="bird_2"></div>
                        </div>

                        <div class="ct-more">
                            <a href="#">ふれあい体験</a>
                        </div>
                    </li>
                    <li class="ct3">
                        <div class="ct-list-img">
                            <span class="ct-img">
                                <img class="slide" src="../assets/kakegawa-img/106d_L.jpg" alt="">
                            </span>

                        </div>
                        <div class="bird_3"></div>
                        <div class="ct-more">
                            <a href="#">掛川花鳥園の<br>仲間たち</a>
                        </div>
                    </li>
                </div>

                <div class="ct-list02">
                    <li class="ct4">
                        <div class="ct-list-img">
                            <span class="ct-img">


                                <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                            </span>
                        </div>
                        <div class="bird_4"></div>

                        <div class="ct-more">
                            <a href="#">花ばな</a>
                        </div>
                    </li>
                    <li class="ct5">
                        <div class="ct-list-img">
                            <span class="ct-img">


                                <img src="../assets/kakegawa-img/108a_L.jpg" alt="">
                            </span>
                        </div>
                        <div class="bird_5"></div>

                        <div class="ct-more">
                            <a href="#">SHOP & FOOD</a>
                        </div>
                    </li>
                    <li class="ct6">
                        <div class="ct-list-img">
                            <span class="ct-img">


                                <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                            </span>
                        </div>
                        <div class="bird_6"></div>

                        <div class="ct-more">
                            <a href="#">お母さんも安心<br>無料キッズコーナー</a>
                        </div>
                    </li>
                </div>
            </div>
            <div class="mobile-inner-ct">
                <div>
                    <!-- v-bind="settings" -->
                    <!-- <vueSlickCarousel ref="carousel" > -->
                        <div class="slide1 m-01-slide">
                            <div class="m-list-img">
                                <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                            </div>
                            <div class="ct-more">
                                <a href="#">迫力満点のバードショー</a>
                            </div>
                        </div>
                        <div class="slide2 m-01-slide">
                            <div class="m-list-img">
                                <img src="../assets/kakegawa-img/105d_L.jpg" alt="">
                            </div>
                            <div class="ct-more">
                                <a href="#">ふれあい体験</a>
                            </div>
                        </div>
                        <div class="slide3 m-01-slide">
                            <div class="m-list-img">
                                <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                            </div>
                            <div class="ct-more">
                                <a href="#">掛川花鳥園の仲間たち</a>
                            </div>
                        </div>
                    <!-- </vueSlickCarousel> -->
                </div>

                <div class="mobile-ct-list02">
                    <div class="slide4 slide">
                        <div class="m-list-img">
                            <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                        </div>
                        <div class="ct-more">
                            <a href="#">花ばな</a>
                        </div>
                    </div>
                    <div class="slide5 slide">
                        <div class="m-list-img">
                            <img src="../assets/kakegawa-img/108a_L.jpg" alt="">
                        </div>
                        <div class="ct-more">
                            <a href="#">SHOP & FOOD</a>
                        </div>
                    </div>
                    <div class="slide6 slide">
                        <div class="m-list-img">
                            <img src="../assets/kakegawa-img/106d_L.jpg" alt="">
                        </div>
                        <div class="ct-more">
                            <a href="#">お母さんも安心無料キッズコーナー</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* コンテンツインナー */
/* インナーテキスト */
.contents-inner {
    color: #3c3c3c;
    width: 100%;
    padding-top: 100px;
    margin-bottom: 100px;
    text-align: center;
}

.inner-text-copy {
    font-size: 22px;
}

.inner-title {
    position: relative;
    display: inline-block;
    max-width: 770px;
}

.inner-title h1 {
    display: inline-block;
    font-size: 44px;
    margin-top: 20px;
}

.inner-title img {
    display: inline-block;
    width: 100%;
    height: auto;
}

.inner-title-imgL,
.inner-title-imgR {
    width: 66px;
    height: 104px;
}

.inner-title-imgL {
    position: absolute;
    top: -20px;
    left: -120px;
    animation: floating-y 1s ease-in-out infinite alternate-reverse;
}

.inner-title-imgR {
    position: absolute;
    top: -25px;
    right: -120px;
    animation: floating-y 1s ease-in-out infinite alternate-reverse;
}

@keyframes floating-y {
    0% {
        transform: translateY(-5%);
    }

    100% {
        transform: translateY(5%);
    }
}

/* コンテンツ　楽しみ方リスト */
.mobile-inner-ct {
    display: none;
}

.pc-inner-ct {
    max-width: 1140px;
    width: 90%;
    height: auto;
    font-size: 18px;
    font-weight: 600;
    margin: 0 auto;
    margin-top: 100px;
}

.ct-list01,
.ct-list02 {
    display: flex;
    justify-content: space-around;
    gap: 15px;
}

.inner-ct li {
    position: relative;
    max-width: 360px;
    margin-bottom: 50px;
    padding-left: 5px;
}
.inner-ct li:hover img{
    width: 120%;
    transition: 0.7s ease;
}

.ct-more {
    max-width: 190px;
    height: 66px;
    background-color: white;
    border: 2px solid #3c3c3c;
    border-radius: 50px;
    margin: 20px auto 0;
}

.ct-list-img {
    box-shadow: 0 0 11px -3px #ff9100;
    border-radius: 10px;
    padding: 10px;
    z-index: 0;
}

.ct-img {
    display: block;
    line-height: 0;
    overflow: hidden;
}

.ct-list-img img {
    object-fit: cover;
    transition: transform .6s ease;
    transform: scale(1);
    z-index: 100;
}

.ct-list-img:hover img {
    transform: scale(1.1);
}

.ct1,
.ct2,
.ct3,
.ct4,
.ct5,
.ct6 {
    position: absolute;
}

.ct2 .ct-more,
.ct4 .ct-more,
.ct5 .ct-more {
    padding: 15px;
}

.ct1 .ct-more,
.ct3 .ct-more,
.ct6 .ct-more {
    padding: 5px;
}

.ct6 .ct-more {
    max-width: 235px;
}

/* 画像　ホバー時 鳥登場 1*/
.ct-list-img {
    position: relative;
}

.bird_1::before {
    position: absolute;
    opacity: 0;
    content: '';
    top: -250px;
    left: 0;
    width: 125px;
    height: 250px;
    background: url(../assets/kakegawa-sub-img/animal_taka.png) no-repeat;
    background-size: contain;
}

.ct1:hover .bird_1::before {
    top: -140px;
    left: 70px;
    transition: all 0.8s ease;
    animation: slide-bird 10s;
}

@keyframes slide-bird {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

/* 画像　ホバー時 鳥登場 2*/
.bird_2::before {
    z-index: -1;
    position: absolute;
    opacity: 0;
    content: '';
    top: -30px;
    left: 10px;
    width: 100px;
    height: 150px;
    background: url(../assets/kakegawa-sub-img/bird_kojukei.png) no-repeat;
    background-size: contain;
}

.ct2:hover .bird_2::before {
    opacity: 1;
    animation: slide-bird2-1 10s;
}

@keyframes slide-bird2-1 {
    0% {
        left: 10px;
    }

    50% {
        left: 30px;
    }

    100% {
        left: 30px;
    }
}

.bird_2::after {
    position: absolute;
    opacity: 0;
    content: '';
    top: 250px;
    left: 210px;
    width: 70px;
    height: 100px;
    background: url(../assets/kakegawa-sub-img/animal_parrot.png) no-repeat;
    background-size: contain;
    z-index: 0;
}

.ct2:hover .bird_2::after {
    opacity: 1;
    transition: all ease-out;
    animation: slide-bird2-2 1s both;
}

@keyframes slide-bird2-2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(100%, -10%);
    }
}


/* 画像　ホバー時 鳥登場 3*/
.bird_3::before {
    z-index: -1;
    position: absolute;
    display: none;
    content: '';
    top: -20px;
    right: 10px;
    width: 125px;
    height: 250px;
    background: url(../assets/kakegawa-sub-img/animal_flamingo.png) no-repeat;
    background-size: contain;
}

.ct3:hover .bird_3::before {
    display: inherit;
    transition: all 1s ease;
    animation: slide-bird3-1 5s both;
}

@keyframes slide-bird3-1 {
    0% {
        transform: translateY(0%);
    }

    20% {
        transform: translateY(-20%);
    }

    100% {
        transform: translateY(-20%);
    }
}

.bird_3::after {
    z-index: -1;
    position: absolute;
    display: none;
    content: '';
    bottom: -5px;
    left: 70px;
    width: 80px;
    height: 70px;
    background: url(../assets/kakegawa-sub-img/animal_oshidori.png) no-repeat;
    background-size: contain;
}

.ct3:hover .bird_3::after {
    display: inherit;
    transition: all 5s ease-in-out;
    animation: slide-bird3-2 10s ease-in-out;
}


@keyframes slide-bird3-2 {
    0% {
        transform: translateX(0%);
    }

    20% {
        transform: rotate(3deg) translateX(-30%);
    }

    22% {
        transform: rotate(-3deg) translateX(-40%);
    }

    25% {
        transform: rotate(3deg) translateX(-50%);
    }

    30% {
        transform: rotate(-3deg) translateX(-60%);
    }

    100% {
        transform: rotate(0deg) translateX(-70%);
    }
}


/* 画像　ホバー時 鳥登場 4*/
.bird_4::before {
    z-index: 1;
    position: absolute;
    display: none;
    content: '';
    top: 90px;
    left: -50px;
    width: 100px;
    height: 200px;
    background: url(../assets/kakegawa-sub-img/animal_onioohashi.png) no-repeat;
    background-size: contain;
}

.ct4:hover .bird_4::before {
    display: inherit;
    animation: slide-bird4-1 5s ease;
}

@keyframes slide-bird4-1 {
    0% {
        transform: translateY(0%);
    }

    20% {
        transform: translateY(-30%);
    }

    100% {
        transform: translateY(-30%);
    }
}

.bird_4::after {
    z-index: 1;
    position: absolute;
    display: none;
    content: '';
    top: -50px;
    left: 200px;
    width: 150px;
    height: 200px;
    background: url(../assets/kakegawa-sub-img/flower_syakunage.png) no-repeat;
    background-size: contain;
}

.ct4:hover .bird_4::after {
    display: inherit;
    animation: slide-bird4-2 5s ease;
}

@keyframes slide-bird4-2 {
    0% {
        transform: rotate(-20deg);
    }

    20% {
        transform: rotate(-15deg);
    }

    30% {
        transform: rotate(-14deg);
    }

    100% {
        transform: rotate(-14deg);
    }
}

/* 画像　ホバー時 鳥登場 4*/
.bird_5::before {
    z-index: 1;
    position: absolute;
    display: none;
    content: '';
    top: 90px;
    left: -40px;
    width: 120px;
    height: 200px;
    background: url(../assets/kakegawa-sub-img/animal_flamingoR.png) no-repeat;
    background-size: contain;
}

.ct5:hover .bird_5::before {
    display: inherit;
    animation: slide-bird5-1 5s ease;
}

@keyframes slide-bird5-1 {
    0% {
        transform: translateY(0%);
    }

    20% {
        transform: translateY(40%);
    }

    100% {
        transform: translateY(40%);
    }
}


/* 画像　ホバー時 鳥登場 6*/
.bird_6::before {
    z-index: -1;
    position: absolute;
    opacity: 0;
    content: '';
    top: 90px;
    left: 300px;
    width: 100px;
    height: 130px;
    background: url(../assets/kakegawa-sub-img/animal_mimizuku.png) no-repeat;
    background-size: contain;
}

.ct6:hover .bird_6::before {
    opacity: 1;
    transition: all 0.5s ease;
    animation: slide-bird6 5s ease;
}

@keyframes slide-bird6 {
    0% {
        transform: rotate(10deg);
    }

    20% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(20deg);
    }
}


/* ボタン　ホバー時 */
.ct-more {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.ct-more::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    background-color: #ff9100;
}

.pc-inner-ct li:hover .ct-more::before {
    left: 0;
    color: white;
}

.pc-inner-ct li:hover .ct-more {
    color: white;
}

.ct-more a:hover {
    color: inherit;
}

/* mobile画面設定 */
@media (max-width:480px) {
    .inner-text-copy {
        font-size: 18px;
    }

    .inner-text-copy span {
        display: block;
    }

    .inner-title h1 {
        font-size: 20px;
        margin-top: 15px;
    }

    .inner-title-imgL,
    .inner-title-imgR {
        width: 40px;
        height: 64px;
    }

    .inner-title-imgL {
        top: -34px;
        left: -20vw;
        animation: floating-y 1s ease-in-out infinite alternate-reverse;
    }

    .inner-title-imgR {
        top: -35px;
        right: -20vw;
        animation: floating-y 1s ease-in-out infinite alternate-reverse;
    }

    @keyframes floating-y {
        0% {
            transform: translateY(-3%);
        }

        100% {
            transform: translateY(3%);
        }
    }

    /* mobile画面設定　コンテンツ　楽しみ方リスト */
    .pc-inner-ct {
        display: none;
    }

    /* スライドショー */
    .inner-ct li {
        max-width: 100%;
        font-weight: 600;
        font-size: 20px;
    }

    .mobile-inner-ct {
        display: inherit;
        position: relative;
        margin: 0 auto;
        width: 90%;
    }

    .mobile-ct-list01 {
        padding-top: 20px;
        overflow: hidden;
    }

    .slick-list {
        /* overflow:visible; */
    }

    .slick-dots li button::before {
        color: #3c3c3c;
    }

    .slick-dots li button::before {
        font-size: 10px !important;
    }

    .ct-more {
        max-width: 320px;
        height: 50px;
        padding: 10px 10px 0;
    }

    .m-01-slide {
        width: 100%;
        height: auto;
    }

    .m-list-img img {
        width: 100%;
        height: auto;
        padding: 10px;
        box-shadow: 0 0 11px -3px #ff9100;
        border-radius: 10px;
        object-fit: cover;
    }

    /* スライドショー　ドットナビゲーション */

}

@media (max-width:320px) {
    .inner-text-copy {
        font-size: 14px;
    }
}
</style>