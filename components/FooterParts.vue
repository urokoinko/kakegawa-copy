<template>
<footer class="footer">
    <div class="footer-inner">
        <div class="footer-logo">
            <a href="#"><img src="https://k-hana-tori.com/new/img/logo.png" alt="掛川花鳥園"></a>
        </div>
        <div class="footer-ad">
            〒436-0024 静岡県掛川市南西郷1517<br>
            ☎0537-62-6363 FAX0537-62-6868
        </div>
        <div class="footer-office">
            <li>●動物取扱業の種別／展示</li>
            <li>●登録番号／第227606042号</li>
            <li>●登録年月日／平成18年7月24日</li>
            <li>●有効期限／令和8年7月23日</li>
            <li>●動物取扱責任者／北條龍哉</li>
        </div>
        <div class="footer-nav">
            <li><a href="#">運営会社情報</a></li>
            <li><a href="#">ご意見</a></li>
            <li><a href="#">サイトマップ</a></li>
            <li><a href="#">プライバシーポリシー</a></li>
            <li><a href="#">ENGLISH</a></li>
        </div>
    </div>
    <div class="footer-img">
        <img src="https://k-hana-tori.com/new/img/foot_mt.png" alt="山のイメージ" srcset="">
        <div class="footer-copy">
            Copyright © 2024 KAKEGAWA KACHOUEN All Rights Reserved
        </div>
    </div>
</footer>
</template>

<style scoped>
/* フッター */
.footer{
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #3c3c3c;
    text-align: center;
}
.footer-inner{
    max-width: 930px;
    margin: 0 auto;
    margin-bottom: 70px;
}

.footer-logo{
    display: inline-block;
    width: 300px;
    height: auto;
    padding-bottom: 20px;
    border-bottom: 2px dotted #3c3c3c;
    margin-bottom: 10px;
}
.footer-ad{
    font-size: 14px;
    padding-bottom: 25px;
}

.footer-office{
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    max-width: 390px;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 50px;
    gap: 5px;
}

.footer-nav{
    margin: 0 auto;
    padding-bottom: 150px;
    max-width: 90%;
    font-size: 13px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.footer-nav li{
    flex: 1 160px;
}

.footer-copy{
    font-size: 12px;
    margin-top: -20px;
}

.footer-img{
    width: 100%;
    position: relative;
}
.footer-img img{
    width: 100%;
    height: auto;
}
.footer-img:before{
    position: absolute;
    content: "";
    display: block;
    width: 350px;
    height: 260px;
    background: url(../assets/kakegawa-img/footer_01.png) center center no-repeat;
    background-size: contain;
    left: 3vw;
    bottom: 0;
}
.footer-img::after{
    position: absolute;
    content: "";
    width: 380px;
    height: 180px;
    display: block;
    background: url(../assets/kakegawa-img/footer_02.png) center center no-repeat;
    background-size: contain;
    right: 0vw;
    bottom: 3vw;
}

/* PC画面設定（min-width:1025px) */
@media (min-width: 1025px) {
    .footer-inner{
        display: flex;
        width: 90%;
        max-width: 1140px;
    }
    .footer-logo{
        max-width: 200px;
        border-bottom: none;
        margin-right: 30px;
    }
    .footer-img:before{
        width: 550px;
        height: 280px;
    }
    .footer-img:after{
        width: 550px;
        height: 250px;
        bottom: 0;
    }

    .footer-office{
        position: relative;
        text-align: left;
        gap: 10px;
    }
    .footer-office::before{
        position: absolute;
        content: "";
        left: -20px;
        width: 1px;
        height: 80px;
        background-color:  #3c3c3c;
    }

    .footer-nav{
        position: relative;
        display: block;
        text-align: left;
        padding-bottom: 0;
    }
    .footer-nav::before{
        position: absolute;
        content: "";
        left: -20px;
        width: 1px;
        height: 80px;
        background-color:  #3c3c3c;
    }
}


/* mobile画面設定 */
@media (max-width:478px) {
    .footer-inner{
        max-width: 420dvh;
    }
    .footer-logo{
        width: 200px;
        height: auto;
        padding-bottom: 10px;
        margin-bottom: 3px;
    }
    .footer-office{
        font-size: 12px;
        width: 90%;
        padding-bottom: 20px;
    }
    .footer-nav{
        font-size: 12px;
        padding-bottom: 0px;
    }
    .footer-nav li{
        flex: 1 100px;
    }
    .footer-img img{
        width: 100%;
        height: 129px;
    }
    .footer-img:before{
        width: 170px;
        height: 110px;
        bottom: 10px;
    }
    .footer-img:after{
        width: 190px;
        height: 100px;
    }
}
</style>