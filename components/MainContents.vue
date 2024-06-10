<script setup>
import { onMounted } from 'vue';

onMounted(()=>{

    // ページトップに移動
    window.addEventListener("scroll", ()=>{
        const pagTop =document.querySelector('.top-link');
        const scroll =window.pageYOffset;

        if(scroll > 300){
            pagTop.style.opacity = "0.8";
            pagTop.style.zIndex = "1";
        }else{
            pagTop.style.opacity = "0";
            pagTop.style.zIndex = "-1";
        }
    })
    
    const top_link = document.getElementById('top-link');
    top_link.addEventListener("click",()=>{
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    })
    
});

        
</script>

<template>
<div class="main-contents">
    <div id="top-movies">
        <video class="top-movie" src="../assets/kakegawa-img/top_move01.mp4" autoplay muted loop></video>
    </div>
    <div class="main-schedule">
        <div class="main-schedule-inner">
            <div class="schedule-ct01">
                    <div class="ct01-text01 text-green">本日 4月19日(金)</div>
                    <div class="ct01-text02">9:00～16:30
                    </div>
                <div class="ct01-btn">
                    <a href="#">本日の<span>イベント</span></a>
                </div>
            </div>
            <div class="schedule-ct02">
                <div class="schedule-ct02-inner">
                    <div class="ct02-text01 text-green">バードショー：1日3回</div>
                    <div class="ct02-text02">10:30／13:00／15:00</div>
                </div>
            </div>
            <div class="schedule-ct03">
                <ul class="text-green">
                    <li><a href="#">料金案内</a></li>
                    <li><a href="">特別イベント</a></li>
                    <li><a href="">営業日カレンダー</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="top-link" id="top-link">
        <a href=""><img src="../assets/kakegawa-sub-img/animal_hashibirokou.png" alt=""></a>
    </div>
</template>

<style scoped>
/* メインコンテンツ */
/* トップ動画 */
.top-movie{
    width: 100%;
    height: auto;
    object-fit: cover;
}

.main-schedule{
    position: relative;
}
.main-schedule-inner{
    position: absolute;
    top: -400px;
    left: 50px;
    width: 288px;
    height: auto;
    background-color: #fff;
    border: 2px solid #6bb92d;;
    border-radius: 15px;
    font-weight: 600;
    font-size: 13px;
}
.text-green{
    color: #6bb92d;
}

/*　スケジュール コンテンツ01 */
.ct01-text02{
    font-size: 15px;
}

.schedule-ct01{
    padding: 30px 20px 15px;
    border-bottom: 2px solid #6bb92d;
}
.ct01-text {
    padding-top: 5px; 
}
.ct01-text01{
    position: relative;
}
.ct01-text01::after{
    position: absolute;
    content: "営業時間";
    top: -20px;
    left: 0;
}
.ct01-text02{
    position: relative;
}
.ct01-text02::after{
    position: absolute;
    top: 20px;
    left: 0;
    content: "最終入園16:00";
    font-size: 10px;
    line-height: 1.5;
}

.ct01-btn{
    width: 135px;
    height: 39px;
    float: right;
    padding: 10px 15px;
    background-color: #6bb92d;
    border-radius: 5px;
    color: #fffac0;
    font-size: 14px;
    position: relative;
    margin-top: -47px;
}
.ct01-btn a::before{
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 15px;
    position: absolute;
    right: 5px;
    top: 10px;
    transition: 0.3s;
}
.ct01-btn:hover{
    opacity: 0.7;
}
.ct01-btn a:hover::before{
    right: 3px;
    transition: 1s;
    opacity: 0.7;
}

/* スケジュール　コンテンツ02 */
.schedule-ct02{
    padding: 10px 20px ;
    border-bottom: 2px solid #6bb92d;
}
.ct02-text02{
    font-size: 15px;
    line-height: 2;
}

/* スケジュール　コンテンツ03 */
.schedule-ct03{
    padding: 5px 20px;
}

.schedule-ct03 ul li{
    position: relative;
    text-align: center;
    padding: 10px 20px 7px;
    margin-bottom: 13px;
    border: 1px solid #6bb92d;
    border-radius: 5px;
}
.schedule-ct03 li::before{
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 19px;
    color: #6bb92d;
    font-style: normal;
    position: absolute;
    right: 6px;
    top: 5px; 
}
.schedule-ct03 li:hover{
    background: #6bb92d;
    color: #fff;
}
.schedule-ct03 li:hover::before{
    right: 3px;
    transition: 1s;
    opacity: 0.7;
    color: #fff;
}


/* top遷移 */
.top-link{
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;
    transition: all 0.2s;
}
.top-link:hover{
    opacity: 1;
}
.top-link img{
    width: 100px;
}




/* mobile画面設定　メインコンテンツ */

@media(max-width: 1024px){
    /* スケジュール　コンテンツ */
    .main-schedule{
        margin: 0 5vw;
    }
    .main-schedule-inner{
        top: -50px;
        left: 0;
        width: 100%;
    }
    /* スケジュール　コンテンツ01 */
    .schedule-ct01{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding: 20px 15px 15px 20px; */
    }
    .ct01-btn{
        font-size: 15px;
        margin: 0;
        margin-top: -15px;
    }
    
    /* スケジュール　コンテンツ02 */
    .schedule-ct02-inner{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .ct02-text02{
        padding-left: 15px;
        font-size: 17px;
    }

    /* スケジュール　コンテンツ03 */
    .schedule-ct03{
        display: flex;
        align-items: center;
    }
    .schedule-ct03 ul{
        display: flex;
        padding: 15px 0;
        margin: 0 auto;
        gap: 5px;
    }
    .schedule-ct03 ul li{
        margin-bottom: 0;
        width: 25vw;
        flex: 1;
    }
}

@media (max-width: 478px) {
    /* トップ動画 */
    .top-movie{
        height: 60vh;
    }
    /* スケジュール　コンテンツ01*/
    .schedule-ct01{
        padding: 20px 15px 5px 20px; 
    }
    .ct01-text01{
        font-size: 14px;
    }
    .ct01-text02{
        font-size: 17px;
        padding-bottom: 28px;
    }
    .ct01-text02::after{
        font-size: 12px;
    }

    .ct01-btn{
        position: relative;
        font-size: 13px;
        width: 80px;
        height: 53px;
        padding: 8px 10px;
    }
    .ct01-btn span{
        position: absolute;
        top: 27px;
        left: 10px;
    }
    .ct01-btn a::before{
        top: 5px;
        right: 8px;
    }

    /* スケージュールコンテンツ03 */
    .schedule-ct03{
        max-height: 135px;
    }
    .schedule-ct03 ul{
        flex-wrap: wrap;
        gap: 8px;
    }
    .schedule-ct03 ul li{
        min-width: 150px;
        padding:  10px 0;
    }
    .schedule-ct03 li:last-child{
        flex: 2;
        margin-top: 5px;
    }

    
    /* top遷移 */
    .top-link img{
        width: 60px;
    }


}

@media (max-width: 360px) {
    /* スケージュールコンテンツ01 */
    .schedule-ct01{
        padding-left: 5px;
    }
    .ct01-btn{
        width: 69px;
        height: 47px;
        padding: 5px 10px;
        top: 0px;
        left: 10px;
    }
    .ct01-btn span{
        top: 24px;
    }

    /* スケージュールコンテンツ02 */
    .schedule-ct02{
        padding: 5px 10px;
        letter-spacing: -0.1rem;
    }
    
    /* スケージュールコンテンツ03 */
    .schedule-ct03 ul{
        flex-wrap: wrap;
        gap: 8px;
    }
    .schedule-ct03 ul li{
        min-width: 110px;
        padding: 10px 0;
    }
    .schedule-ct03 li:last-child{
        flex: 2 auto;
        margin-top: 5px;
    }
}
@media (max-width: 320) {
    .schedule-ct03{
        max-width: 100px;
    }
}

</style>