<template>
    <div class="topicks">
        <div class="topicks-head">
            <h2 class="topicks-title">トピックス</h2>

            <div class="topicks-nav">
                <input type="radio" id="all" name="tab_item" checked>
                <label for="all" class="tab_item">すべて</label>
                <input type="radio" id="info" name="tab_item">
                <label for="info" class="tab_item">お知らせ</label>
                <input type="radio" id="event" name="tab_item">
                <label for="event" class="tab_item">イベント</label>
            </div>
        </div>
        <div class="topicks-inner">
            <ul class="topicks-inner-ul">
                <li>
                    <a href="#">
                        <div class="tp-inner-img" id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="tp-inner-img"  id="all_content">
                            <img src="../assets/kakegawa-img/084e.jpg" alt="topickimage">
                        </div>
                        <div class="tp-day">2024.04.24</div>
                        <div class="tp-text">2024年GW の園内営業について</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="topicks-prev">
            <div>
                <a href="#">過去のトピックス</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* トピックス */
.topicks {
    width: 100%;
    height: auto;
    background-color: #fff7d8;
    position: relative;
    text-align: center;
    font-weight: 600;
    margin-bottom: 70px;
}

.topicks-head {
    padding-top: 50px;
}

.topicks::before {
    position: absolute;
    content: "";
    top: -5%;
    left: 0;
    width: 100%;
    height: 250px;
    background: url(https://k-hana-tori.com/new/img/wave_top.png) no-repeat;
    background-size: contain;
    z-index: 0;
}

.topicks::after {
    position: absolute;
    content: "";
    bottom: -12%;
    left: 0;
    width: 100%;
    height: 205px;
    background: url(https://k-hana-tori.com/new/img/wave_bottom.png) no-repeat;
    background-size: contain;
    z-index: 0;
}


.topicks-title {
    position: relative;
    background-color: #6bb92d;
    color: white;
    font-size: 24px;
    width: 301px;
    margin: 0 auto;
    padding: 6px 0 9px;
    border-radius: 50px;
}

.topicks-title::before {
    position: absolute;
    content: '';
    top: 3;
    margin-left: -40px;
    background: url(https://k-hana-tori.com/new/img/topicks.png) no-repeat;
    background-size: cover;
    width: 32px;
    height: 40px;
}

/* トピックスナビゲーション */

.topicks-nav {
    max-width: 542px;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    border-left: 1px solid #3c3c3c;
}

input[name="tab_item"]{
    display: none;      /*ラジオボタン非表示 */
}

.topicks-nav label{
    width: 180px;
    height: 64px;
    font-size: 16px;
    font-weight: 400;
    padding: 20px;
    border-right: 1px solid #3c3c3c;
}

/*選択されているタブのコンテンツのみを表示*/
#all:checked ~ #all_content,
#info:checked ~ #info_content,
#event:checked ~ #event_content{
    display: block;
}

/*選択されているタブのスタイルを変える*/
.tab_item{
    position: relative;
}
.topicks-nav input:checked + .tab_item::after{
    position: absolute;
    content: "";
    top: 50px;
    left: 45px;
    width: 50%;
    border-bottom: #ff9100 5px solid;
    border-radius: 50px;
}


/* トピックス　インナー */

.topicks-inner {
    padding-bottom: 80px;
}

.topicks-inner-ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 925px;
    margin: 0 auto;
    gap: 20px;
}

.topicks-inner-ul li {
    width: 28%;
    max-width: 288px;
    height: auto;
    min-height: 309px;
    background: #fff;
    box-shadow: 0 0 10px -3px #3c3c3c;
    border-radius: 10px;
    padding: 20px;
}

.topicks-inner-ul li:hover {
    box-shadow: 0 0 11px -3px #ff9100;
    transition: 0.5s;
    cursor: pointer;
}

.tp-inner-img a {
    margin: 0 auto;
    max-width: 268px;
}

.tp-inner-img {
    overflow: hidden;
    height: 180px;
}

.tp-inner-img img {
    object-fit: cover;
    width: 100%;
    height: auto;
    transition: 0.5s;
}

li:hover img {
    transform: scale(1.2);
}

.tp-day,
.tp-text {
    text-align: left;
    color: #666;
}

.tp-day {
    font-family: 'Prompt', sans-serif;
    font-weight: 100;
    font-size: 12px;
    padding-left: 5px;
    padding-top: 5px;
}

.tp-text {
    font-size: 16px;
}

.topicks-prev {
    padding-bottom: 30px;
}

.topicks-prev a {
    color: #333;
    font-size: 18px;
    background-color: #fff;
    padding: 5px 30px;
    border: 2px solid #333;
    border-radius: 50px;
}

/* トピックス　右のフクロウと花 */
.topicks-head {
    position: relative;
}

.topicks-head::after {
    position: absolute;
    content: '';
    top: -150px;
    right: 50px;
    width: 160px;
    height: 300px;
    background: url(../assets/kakegawa-img/080e_L.png) no-repeat;
    background-size: contain;
    z-index: 100;
}

.topicks-head::before {
    position: absolute;
    content: '';
    top: -50px;
    right: 120px;
    width: 250px;
    height: 250px;
    background: url(../assets/kakegawa-sub-img/ajisai_green.png) no-repeat;
    background-size: contain;
    z-index: 99;
}

@media (max-width:1040px) {
    .topicks::before {
        top: -3%;
    }

    .topicks::after {
        bottom: -5%;
        height: 99px;
    }

    .topicks-head::before {
        width: 160px;
        height: 160px;
        right: 130px;
    }

    .topicks-head::after {
        width: 150px;
        height: 200px;
    }
}

/* mobile画面設定 */
@media (max-width: 480px) {
    .topicks {
        padding-top: 30px;
    }

    .topicks::before {
        top: -1%;
        height: 29px;
    }

    .topicks::after {
        bottom: -2%;
        height: 40px;
    }

    .topicks-head {
        padding-top: 10px;
    }

    .topicks-head::after {
        width: 90px;
        height: 130px;
        top: -130px;
        right: 20px;
    }

    .topicks-head::before {
        width: 100px;
        height: 80px;
        top: -70px;
        right: 70px;
    }

    .topicks-inner-ul {
        padding: 15px;
        justify-content: space-between;
    }

    .topicks-inner-ul li {
        width: 47%;
        min-height: auto;
    }

    .tp-day {
        font-size: 11px;
    }

    .tp-text {
        font-size: 14px;
    }
}
</style>