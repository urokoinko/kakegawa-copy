<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    // ハンバーガーメニュー　ボタン
    const navBtn = document.getElementById("nav-button");
    const closeBtn = document.querySelector(".close-btn");
    const hamMenu = document.getElementById("ham-menu");

    navBtn.addEventListener('click', () => {
        hamMenu.classList.remove('close');
        console.log(hamMenu)
    });

    closeBtn.addEventListener('click', () => {
        hamMenu.classList.add('close');
        console.log(hamMenu)

    })

})
</script>
<template>
    <div id="header">
        <div class="header-inner">
            <div class="header-inner-text">

                <div class="header-logo">
                    <a href="#">
                        <img src="https://k-hana-tori.com/new/img/logo_w.png" alt="掛川花鳥園">
                    </a>
                </div>
                <div class="pc-nav-menu">
                    <nav>
                        <ul class="pc-nav-ul">
                            <li class="nav01"><a href="#">メディア・取材の方</a></li>
                            <li class="nav02"><a href="#">団体のお問い合わせ</a></li>
                            <li class="nav03"><a href="#">アクセス</a></li>
                        </ul>
                    </nav>
                    <div class="nav-item">
                        <div class="nav-button" id="nav-button">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <button class="lang-change">ENGLISH</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ham-menu close" id="ham-menu">
            <div class="ham-menu-inner">
                <div class="ham-menu01-inner">
                    <div class="ham-menu01-logo">
                        <a href="#">
                            <img src="https://k-hana-tori.com/new/img/logo_w.png" alt="掛川花鳥園">
                        </a>
                    </div>
                    <div class="ham-menu01-nav">
                        <div class="item-row">
                            <div class="ham01-item ham-menu01-item01"><a href="">園内マップ</a></div>
                            <div class="ham01-item ham-menu01-item02"><a href="">営業日カレンダー</a></div>
                        </div>
                        <div class="item-row">
                            <div class="ham01-item ham-menu01-item03"><a href="">特別イベント</a></div>
                            <div class="ham01-item ham-menu01-item04"><a href="">アクセス</a></div>
                        </div>
                        <div class="item-row">
                            <div class="ham01-item ham-menu01-item05"><a href="">団体のお問い合わせ</a></div>
                            <div class="ham01-item ham-menu01-item06"><a href="">メディアの方へ</a></div>
                        </div>
                    </div>
                </div>
                <div class="ham-menu02">
                    <nav class="ham-menu02-nav">
                        <ul>
                            <li><a href="">トップぺージ</a></li>
                            <li><a href="">総合案内</a></li>
                            <li><a href="">掛川花鳥園について</a></li>
                            <li><a href="">通常イベント案内</a></li>
                            <li><a href="">グルメ</a></li>
                            <li><a href="">ショップ</a></li>
                            <li><a href="">鳥と花の紹介</a></li>
                            <li><a href="">はじめてご利用の方へ</a></li>
                            <li><a href="">Q&A</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="ham-menu03">
                    <p>掛川花鳥園 公式SNSはこちら</p>
                    <ul class="ham-sns">
                        <li><a href=""><img src="https://k-hana-tori.com/new/img/youtube.png" alt=""></a></li>
                        <li><a href=""><img src="https://k-hana-tori.com/new/img/insta.png" alt=""></a></li>
                        <li><a href=""><img src="https://k-hana-tori.com/new/img/facebook.png" alt=""></a></li>
                        <li><a href=""><img src="https://k-hana-tori.com/new/img/stuff_blog.png" alt=""></a></li>
                    </ul>
                </div>
                <div class="close-btn">
                    <i class="far fa-times-circle"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="fbp-link">
        <a href=""><img src="https://k-hana-tori.com/new/img/side_link.png" alt=""></a>
    </div>

</template>

<style scoped>
/* ヘッダー */
#header {
    background-color: #000000;
    padding-top: 15px;
    padding-bottom: 10px;
    position: fixed;
    width: 100%;
    height: 90px;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header-inner-text {
    display: flex;
    text-align: center;
    justify-content: space-between;
    height: 65px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 2vw;
    margin-left: 7vw;
    /* max-width: 1140px; */
}

/* ヘッダー　ロゴ */
.header-logo {
    display: flex;
    flex-wrap: wrap;
    width: 19%;
    height: 19%;
    max-width: 185px;
    width: 100%;
}

.header-logo:hover {
    opacity: 0.7;
    transition: all .5s;
}

/* ヘッダー　ナビメニュー */
.pc-nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
}

.pc-nav-menu ul {
    display: flex;
    padding-right: 70px;
}

.pc-nav-ul li {
    display: inline-block;
    flex: 1;
    width: 15vw;
    padding: 12px 2px 16px 30px;
    color: white;
    border-left: 3px dotted white;
    letter-spacing: 0.1em;
    text-align: center;
}

.pc-nav-ul li:hover a {
    color: #ff9100;
    transition: all 0.5s;
}

.pc-nav-ul li:last-child {
    border-right: 3px dotted white;
}

/* ナビメニュー　各ロゴ */
.nav01 {
    position: relative;
    font-size: 13px;
}

.nav01::before {
    content: "\f030";
    left: 7px;
    top: 5px;
    font-size: 22px;
    display: block;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.nav02 {
    position: relative;
    font-size: 14px;
}

.nav02::before {
    content: "\f55e";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 23px;
    left: 7px;
    top: 3px;
    display: block;
    position: absolute;
}

.nav03 {
    position: relative;
    font-size: 16px;
}

.nav03::before {
    content: "";
    background-image: url(https://k-hana-tori.com/new/img/shizuoka.png);
    background-size: contain;
    background-repeat: no-repeat;
    left: 28px;
    top: 8px;
    width: 34px;
    height: 24px;
    font-size: 26px;
    display: block;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}


/* ハンバーガーメニュー */


.nav-button {
    position: relative;
    font-size: 30px;
    color: white;
}

.nav-button::after {
    content: "MENU";
    position: absolute;
    font-size: 10px;
    bottom: -4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-weight: 100;
}

.nav-item {
    display: flex;
}


/* 言語切り替えボタン */
.lang-change {
    position: relative;
    color: #3c3c3c;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 2vw;
    font-weight: 600;
}

.lang-change a {
    width: 96px;
    height: 21px;
    position: absolute;
    top: 0;
}

.lang-change:hover {
    background-color: #ff9100;
    color: #bde5fb;
    transition: all .7s;
}

/* ハンバーガーメニュー01　詳細 */
.ham-menu.close {
    top: 110%;
    transition: all 0.6s;
}

.ham-menu {
    position: fixed;
    display: flex;
    background-color: #0f1114;
    color: white;
    top: 0%;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    overflow-x: hidden;
}

.ham-menu-inner {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    font-weight: 600;
    font-style: normal;
    margin: 200px auto 0;
    /* margin: 5vw 13vw 0; */
}

.ham-menu01-inner {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.ham-menu01-logo {
    max-width: 185px;
    margin-right: 100px;
}

.ham-menu01-logo img {
    max-width: 100%;
    height: auto;
}

.ham-menu01-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
}

.item-row {
    max-width: 580px;
    display: flex;
    justify-content: space-around;
}

.ham01-item {
    position: relative;
    flex: 1 1 auto;
    max-width: 190px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 100px;
}

.ham-menu01-item05 a {
    font-size: 14px;
}

.ham01-item a {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 1rem 15px 19px 35px;
    border: 3px solid #ffffff;
    border-radius: 50px;
}

.ham01-item:hover a {
    border: 3px solid #ff9100;
    color: #ff9100;
}

/* ハンバーガーメニュー01　各メニューロゴ */
.ham-menu01-item01,
.ham-menu01-item02,
.ham-menu01-item03,
.ham-menu01-item04,
.ham-menu01-item05,
.ham-menu01-item06 {
    position: relative;
}

.ham-menu01-item01::before {
    content: "\f279";
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 14px;
    left: 25px;
}

.ham-menu01-item02::before {
    content: "\f073";
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 14px;
    left: 14px
}

.ham-menu01-item03::before {
    content: "\f271";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 26px;
    left: 21px;
    top: 13px;
    display: block;
    position: absolute;
}

.ham-menu01-item04::before {
    content: "";
    background-image: url(https://k-hana-tori.com/new/img/shizuoka.png);
    background-size: contain;
    background-repeat: no-repeat;
    left: 21px;
    top: 16px;
    width: 40px;
    height: 46px;
    font-size: 26px;
    display: block;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.ham-menu01-item05::before {
    content: "\f55e";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 26px;
    left: 14px;
    top: 13px;
    display: block;
    position: absolute;
}

.ham-menu01-item06::before {
    content: "\f030";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 26px;
    left: 17px;
    top: 13px;
    display: block;
    position: absolute;
}

/* ハンバーガーメニュー02 */
.ham-menu02-nav {
    max-width: 900px;
    color: white;
    margin-top: 3.5vw;
    padding-bottom: 30px;
}

.ham-menu02-nav ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.ham-menu02-nav li {
    position: relative;
    font-size: 17px;
    width: 200px;
    padding: 11px 0 11px 20px;
}

.ham-menu02-nav a:hover {
    color: inherit;
}

.ham-menu02-nav li::before {
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 22px;
    color: #fff;
    position: absolute;
    left: 3px;
    top: 8px;
    transition: 0.5s;
}

.ham-menu02-nav li:hover::before {
    color: #ff9100;
    left: 8px;
}


/* ハンバーガーメニュー03　公式SNS */
.ham-menu03 {
    width: 100%;
    font-size: 16px;
    border-top: 2px solid #fff;
}

.ham-menu03 p {
    padding-top: 60px;
    margin-bottom: 20px;
}

.ham-sns li {
    position: relative;
}

.ham-sns li:hover::after {
    position: absolute;
    top: 50px;
    content: '';
    max-width: 150px;
    width: 100%;
    height: 2px;
    opacity: 0;
    border-bottom: 2px solid #ff9100;
    transition: 0.5s;
}

.ham-sns li:hover::after {
    opacity: 1;

}

.ham-sns li:hover a {
    transition: all 0.5s;
    opacity: 0.7;
}

.ham-sns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
    flex-wrap: wrap;
}

.ham-sns li img {
    max-width: 150px;
    width: 100%;
}




/* ハンバーガーメニュー　閉じるボタン */
.ham-menu-inner {
    position: relative;
}

.close-btn {
    position: absolute;
    top: -100px;
    right: -10px;
    font-size: 31px;
}


/* mobil画面設定 */

@media (max-width: 1024px) {

    /* ハンバーガーメニュー */
    .ham01-item {
        font-size: 16px;
    }

    .ham-menu02-nav {
        font-size: 18px;
    }

}

@media (max-width: 1000px) {
    .pc-nav-ul li {
        display: none;
    }

    /* 言語切り替えボタン */
    .nav-item {
        flex-direction: row-reverse;
    }

    .lang-change {
        margin-right: 10vw;
    }
}

@media (max-width: 480px) {

    /* ヘッダー */
    .header {
        height: 98px;
    }

    .header-logo {
        padding-top: 20px;
        margin: 0;
    }

    .nav-item {
        flex-direction: column-reverse;
    }

    .lang-change {
        margin: 0;
    }

    .header-inner {
        padding-left: 15px;
        padding-right: 10px;
    }

    .header-inner-text {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    /* ハンバーガーメニュー　詳細 */
    /* ハンバーガーメニュー　詳細01 */
    .ham-menu {
        overflow-y: scroll;
    }

    .ham-menu01-logo {
        margin-right: 0;
        margin-left: 3vw;
    }

    .ham-menu01-nav {
        display: inline-block;
        padding-top: 25px;
    }

    .ham-menu-inner {
        height: 100vh;
        margin: 4vw;
        display: flex;
        align-items: center;
        transform: translate(0%, 10%);
    }

    .ham-menu01-inner {
        display: inline-block;
        margin-bottom: 70px;

    }

    .ham01-item {
        max-width: 190px;
        flex: 1;
        padding: 5px 10px 5px 25px;
        margin-bottom: 60px;
    }

    .ham01-item a {
        font-size: 14px;
        overflow: hidden;
    }

    .ham01-item::before {
        font-size: 22px;
        top: 6px;
        left: 18px;
    }

    .ham-menu01-item01::before {
        left: 28px;
    }

    .ham-menu01-item02::before {
        left: 15px;
    }

    .ham-menu01-item03::before {
        left: 28px;
    }

    .ham-menu01-item04 {
        padding-left: 15px;
    }

    .ham-menu01-item04::before {
        top: 8px;
        left: 20px;
        width: 35px;
        height: 32px;
    }

    .ham-menu01-item05::before {
        top: 7px;
        left: 12px;
    }

    .item-row a {
        width: 100%;
    }

    .ham-menu01-item05,
    .ham-menu01-item06 {
        margin-bottom: 0;
    }

    /* ハンバーガーメニュー　詳細02 */

    .ham-menu02 ul {
        margin-top: 5px;
    }

    .ham-menu02-nav {
        margin-left: 12vw;
        margin-top: 0;
    }

    .ham-menu02-nav a {
        font-size: 18px;
    }

    .ham-menu03 p {
        padding-top: 20px;
        padding-bottom: 10px;
    }

    /* ハンバーガーメニュー　公式SNS */
    .ham-sns {
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 70px;
        flex-wrap: wrap;
        height: 100px;
    }

    /* 閉じるボタン */
    .close-btn {
        top: -70px;
        right: 30px;
    }
}



/* FBPショップリンク */
.fbp-link {
    display: block;
    position: fixed;
    opacity: 0.5;
    top: 50%;
    right: 0;
    z-index: 1000;
}

.fbp-link:hover {
    opacity: 1;
}

.fbp-link::after {
    position: absolute;
    content: "";
    top: 140px;
    right: 10px;
    background: url(../assets/kakegawa-sub-img/animal_onioohashi.png) no-repeat;
    background-size: contain;
    width: 70px;
    height: 130px;
    z-index: 999;
}

.fbp-link img {
    z-index: inherit;
    width: 60px;
}

.fbp-link:hover::after {
    transform: rotate(-10deg);
    width: 70px;
}

@media (max-width:1000px) {
    .fbp-link {
        display: none;
    }
}
</style>