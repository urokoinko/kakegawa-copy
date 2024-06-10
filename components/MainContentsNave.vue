<template>
    <div class="m-ct-nav">
        <ul class="m-ct-nav-inner">
            <li class="m-ct-li nav-item01"><a href="#">総合案内</a></li>
            <li class="m-ct-li nav-item02"><a href="#">掛川花鳥園について</a></li>
            <li class="m-ct-li nav-item03"><a href="#">通常イベント案内</a></li>
            <li class="m-ct-li nav-item04"><a href="#">園内マップ</a></li>
            <li class="m-ct-li nav-item05"><a href="#">グルメ</a></li>
            <li class="m-ct-li nav-item06"><a href="#">ショップ</a></li>
        </ul>
    </div>
</template>

<style scoped>
/* メインコンテンツ　ナビ */
.m-ct-nav{
    width: 100%;
    height: 160px;
    background-color: #edf2c5;
    padding: 25px 0;
    margin-top: -8px;
    text-align: center;
}
.m-ct-nav-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 16px;
    color: #333333
}

.m-ct-li{
    flex: 1;
    border-left: 1px solid #333333;
    padding-top: 85px;
}
.m-ct-li:hover{
    background-color: #fff;
    color: #6bb92d;
    transition: .5s;
}
.m-ct-li a:hover{
    color: inherit;
}

.m-ct-li:last-child{
    border-right: 1px solid #333333;
}

/* ナビ 各アイコン*/
.nav-item01, .nav-item02,
.nav-item03, .nav-item04,
.nav-item05, .nav-item06{
    position: relative;
}
.m-ct-li::before {
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
    left: 0px;
    right: 0;
    top: 10px;
    transition: 0.8s;

}

.nav-item01::before{
    position: absolute;
    content: "";
    width: 65px;
    height: 65px;
    background-image: url(https://k-hana-tori.com/new/img/menu-2.png);
}
.nav-item02::before{
    position: absolute;
    content: "";
    width: 65px;
    height: 69px;
    left: 25px;
    background-image: url(https://k-hana-tori.com/new/img/menu-1.png);
}
.nav-item03::before{
    position: absolute;
    content: "";
    width: 70px;
    height: 72px;
    left: 25px;
    background-image: url(https://k-hana-tori.com/new/img/menu-3.png);
}
.nav-item04::before{
    position: absolute;
    content: "";
    width: 70px;
    height: 72px;
    background-image: url(https://k-hana-tori.com/new/img/menu-4.png);
}
.nav-item05::before{
    position: absolute;
    content: "";
    width: 45px;
    height: 61px;
    background-image: url(https://k-hana-tori.com/new/img/menu-6.png);
}
.nav-item06::before{
    position: absolute;
    content: "";
    width: 52px;
    height: 72px;
    background-image: url(https://k-hana-tori.com/new/img/menu-7.png);
}
    /* アイコンホバー時 */
    .nav-item01:hover::before{
        background-image:  url(https://k-hana-tori.com/new/img/menu-2-2.png);
        
    }
    .nav-item02:hover::before{
        background-image: url(https://k-hana-tori.com/new/img/menu-1-2.png);
    }
    .nav-item03:hover::before{
        background-image: url(https://k-hana-tori.com/new/img/menu-3-2.png);
    }
    .nav-item04:hover::before{
        background-image: url(https://k-hana-tori.com/new/img/menu-4-2.png);
    }
    .nav-item05:hover::before{
        background-image: url(https://k-hana-tori.com/new/img/menu-6-2.png);
    }
    .nav-item06:hover::before{
        background-image: url(https://k-hana-tori.com/new/img/menu-7-2.png);
    }



/* メインコンテンツ　ナビ　mobile画面設定 */
@media (max-width:1024px) {
    .m-ct-nav{
        margin-top: 200px;
    }
    .m-ct-nav-inner{
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .m-ct-nav{
        height: 438px;
        margin-top: -8px;
        padding: 260px 5px 0  5px ;
    }
    .m-ct-nav-inner{
        flex-wrap: wrap;
        font-size: 12px;
    }
    .m-ct-li{
        flex: 0 0 33.3333%;
        padding-top: 47px;
        box-sizing: border-box;
        margin-bottom: 15px;
    }
    .m-ct-li:nth-child(3){
    border-right: 1px solid #333333;

    }

    /* ナビ　各アイコン */
    .m-ct-li::before{
        top: 0px;
    }
    .nav-item01::before{
        width: 45px;
        height: 45px;
    }
    .nav-item02::before{
        width: 41px;
        height: 43px;
    }
    .nav-item03::before{
        width: 48px;
        height: 46px;
    }
    .nav-item04::before{
        width: 42px;
        height: 47px;
        top: 8px;
    }
    .nav-item05::before,
    .nav-item06::before{
        width: 31px;
        height: 36px;
        top: 7px;
    }
}

@media (max-width: 340px) {
    .m-ct-nav-inner a{
        font-size: 11px;
    }
}
</style>