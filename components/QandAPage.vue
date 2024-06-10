

<script setup>
import { ref,onMounted } from 'vue';

onMounted(()=>{
    const acodhion = document.querySelectorAll(".acodhion-inner");
    const Running_value = "running";    //アニメーション実行中の時に付与する属性値
    const Open_class = "is-opened";     //アイコン操作用のクラス

    const icons = ref([{icon:'plus'},{icon:'minus'}]);

    
    
    // console.log(acodhion)
    acodhion.forEach((element) =>{
        const summary =  element.querySelector(".acodhion-q");
        const content =  element.querySelector(".acodhion-a");
        
        console.log(summary)
        
        summary.addEventListener("click", (event)=>{
            // デフォルトの挙動を無効化
            event.preventDefault();   
            
            
            
            if(element.open){
                // アコーディオンを閉じるときの処理
                element.classList.toggle(Open_class);
                
                // アニメーションを実行
                const closingAnim = content.animate(closeAnimekeyfram(content), animTiming);
                element.dataset.animStatus = Running_value;

                // アイコンを「プラスからマイナス」に変更する
                

                // アニメーションの完了後
                closingAnim.onfinish = ()=>{
                    element.removeAttribute("open");
                    element.dataset.animStatus = "";
                };
                
            } else {
                // アコーディオン開くときの処理
                element.setAttribute("open", "ture");
                
                element.classList.toggle(Open_class);
                
                const openingAnime = content.animate(openAnimekeyfram(content),animTiming);
                
                
                element.dataset.animStatus = Running_value;
                
                // アニメーション完了後にアニメーション実行中用の値を取り除く
                openingAnime.onfinish = () => {
                    element.dataset.animStatus = "";
                };

            }
        });
    });
})


// アニメーションの時間とイージング
const animTiming = {
    duration: 400,
    easing: "ease"
};



// アコーディオンを閉じるときのキーフレーム
const closeAnimekeyfram = (content) =>[
    {
        height: content.offsetHeight + 'px',
        opacity: 1,       
    } ,{
        height: 0,
        opacity: 0,
    }
];
// アコーディオンを開けるときのキーフレーム
const openAnimekeyfram = (content) =>[
    {
        height: 0,
        opacity: 1,       
    } ,{
        height: content.offsetHeight + 'px',
        opacity: 1,
    }
];


</script>


<template>
    <div class="q-page">
        <h3 class="q-title">掛川花鳥園を楽しむためのQ&A</h3>
        <div class="acodhion">
            <details class="acodhion-inner">
                <summary class="acodhion-q">
                    <span>
                        <font-awesome-icon :icon="['fas' ,'circle-question']" style="color: #6bb92d" class="icon-question" />                    
                        <span class="q-text">
                            クレジットカードは使用できますか？
                        </span>
                    </span>
                    <span class="open-close-icon">
                        <font-awesome-icon :icon="['fas','plus']" class="icon-plus" style="color: #ed6c00" size="lg"/>

                    </span>
                </summary>
                <div class="acodhion-a">
                    <div class="acodhion-a-inner">
                        入園チケット売り場・おみやげ広場「ハミングバード」　フードカフェ「ハナハナ」　レストラン「フローラ」でご利用いただけます。
                    </div>
                </div>
            </details>
            <details class="acodhion-inner">
                <summary class="acodhion-q">
                    <span>
                        <font-awesome-icon :icon="['fas' ,'circle-question' ]" style="color: #6bb92d" class="icon-question" />
                        <span class="q-text">
                            駐車場は無料ですか？
                        </span>
                    </span>
                    <font-awesome-icon :icon="['fas' ,'plus' ]" class="icon-plus" style="color: #ed6c00" size="lg"/>
                </summary>
                <div class="acodhion-a">
                    <div class="acodhion-a-inner">
                        無料です。正面駐車場は臨時含め約400台まで止めることができます。大型車は10台、障がい者用は5台まで止めることができます。
                    </div>
                </div>
            </details>
            <details class="acodhion-inner">
                <summary class="acodhion-q">
                    <span>
                        <font-awesome-icon :icon="['fas' ,'circle-question' ]" style="color: #6bb92d" class="icon-question" />
                        <span class="q-text">
                            再入園することはでききますか？
                        </span>
                    </span>
                    <font-awesome-icon :icon="['fas' ,'plus' ]" class="icon-plus" style="color: #ed6c00" size="lg"/>
                </summary>
                <div class="acodhion-a">
                    <div class="acodhion-a-inner">
                        当日中であれば可能です。再入園の際に、受付スタッフに入園券をお見せください。スタンプ等の押印はございません。
                    </div>
                </div>
            </details>
            <details class="acodhion-inner">
                <summary class="acodhion-q">
                    <span>
                        <font-awesome-icon :icon="['fas' ,'circle-question' ]" style="color: #6bb92d" class="icon-question" />
                        <span class="q-text">
                            ペット同伴での入園は可能ですか？
                        </span>
                    </span>
                    <font-awesome-icon :icon="['fas' ,'plus' ]" class="icon-plus" style="color: #ed6c00" size="lg"/>
                </summary>
                <div class="acodhion-a">
                    <div class="acodhion-a-inner">
                        ペット同伴の入園はお断りをしております。お預かりもできませんので近隣のペットホテル等をご利用ください。
                    </div>
                </div>
            </details>
            <details class="acodhion-inner">
                <summary class="acodhion-q">
                    <span>
                        <font-awesome-icon :icon="['fas','circle-question' ]" style="color: #6bb92d" class="icon-question" />
                        <span class="q-text">
                            事情により飼えなくなった鳥を引き取ってほしい
                        </span>
                    </span>
                    <font-awesome-icon :icon="['fas' ,'plus' ]" class="icon-plus" style="color: #ed6c00" size="lg"/>
                </summary>
                <div class="acodhion-a">
                    <div class="acodhion-a-inner">
                        当園では一般の方からの鳥の引取りは行っておりません。
                    </div>
                </div>
            </details>
        </div>
    </div>
    <div class="QandA-link">
            <a href="#">Q&Aをもっとくわしく</a>
    </div>
    <div id="app">


</div>
</template>
<style scoped>
    /* Q&Aページ設定 */
    .q-page{
        text-align: center;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
    }
    .q-title{
        position: relative;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 24px;
        background-color: #6bb92d; 
        width: 520px;
        border-radius: 50px;
        padding: 5px;
        margin: 130px auto 36px;
    }
    .q-title::before{
        position: absolute;
        content: '';
        top: 0;
        left: 20px;
        width: 53px;
        height: 53px;
        background: url(https://k-hana-tori.com/new/img/hashi_icon.png) no-repeat;
        background-size: contain;
    }




    /* Q&A　装飾 */
    .q-page{
        position: relative;
    }
    .q-page::before{
        position: absolute;
        content: '';
        background: url(../assets/kakegawa-sub-img/bird_hebikuiwashi.png) no-repeat;
        background-size: contain;
        width: 200px;
        height: 180px;
        top: 30%;
        left: 0;
        animation: QandA_bridMove 5s ease-in-out infinite alternate-reverse;
    }

    @keyframes QandA_bridMove {
        0%{transform: translateY(-5%) rotate(-20deg); }
        100%{transform: translateY(5%) rotate(-20deg);}
    }

    .q-page::after{
        position: absolute;
        content: '';
        background: url(../assets/kakegawa-sub-img/animal_flamingo.png) no-repeat;
        background-size: contain;
        width: 200px;
        height: 180px;
        top: 20%;
        right: -10px;
        animation: QandA_bridMove2 5s ease-in-out infinite alternate-reverse;
    }

    @keyframes QandA_bridMove2 {
        0%{transform: rotate(0deg); }
        10%{transform: rotate(-10deg); }
        40%{transform: rotate(10deg);}
        50%{transform: rotate(-5deg);}
        60%{transform: rotate(5deg);}
        80%{transform: rotate(0deg);}
        100%{transform: rotate(0deg);}
    }

    @media(max-width:1024px){
        .q-page::before{
            width: 100px;
            top: 105%;
            left: 8%;
        }
        .q-page::after{
            width: 100px;
            top: 20%;
            right: 20px;
        }
        @media(max-width:480px){
            .q-page::before{
                left: 2%;
            }
            .q-page::after{
                right: -30px;
            }
        }
    }



    
    /* Q&A アコーディオン設定 */
    
    .acodhion-inner{
        display: block;
        width: 90%;
        max-width: 848px;
        margin: 0 auto 30px;
    }
    .acodhion-q{
        text-align: left;
        width: 100%;
        height: 62px;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        background-color: #edf2c5;
        border-radius: 10px 10px 0  0;
        padding: 10px 30px 10px 15px;
    }
    .acodhion-q::-webkit-details-marker{
        /* safari-デフォルトの三角削除 */
        display: none;
    }

    .acodhion-q span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 5s;
    }
    .q-text{
        padding-left: 10px;
    }
    .acodhion-a{
        overflow: hidden;
    }
    .acodhion-a-inner{
        border: 1px solid #edf2c5;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        padding: 15px 30px 15px 15px;
        overflow: hidden;
        
    }

    /* Q&A アイコン設定 */
    .icon-question{
        font-size: 36px;
    }

        /* Q&Aリンク */
        .QandA-link{
        margin: 40px auto 100px;
        width: 250px;
        height: 59px;
        color: white;
        font-size: 18px;
        font-weight: 400;
        background-color: #8cc0ff;
        border: 1px solid #87ff00;
        border-radius: 40px;
    }
    .QandA-link a{
        display: inline-block;
        width: 250px;
        height: 59px;
        padding: 15px 30px;
    }
    .QandA-link:hover{
        opacity: 0.7;
        transition: all 0.5s;
    }

/* mobile 設定 */
@media (max-width: 480px) {
    .q-title{
        width: 100%;
        font-size: 20px
    }
    .q-title::before{
        width: 30px;
        top: 10px;
    }
    
}




    
</style>