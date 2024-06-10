<script setup>
import { onMounted } from 'vue';
// import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

onMounted(() =>{



    // Map　ドラッグ設定 値渡す
    Draggable.create("#map_drag_img", {

        bounds: "#map_pic",
        inertia: true,
        onClick: function () {
            console.log("clicked");
        },
        onDragEnd: function () {
            console.log("drag ended");
        },
        });
    
    
    // Map　拡大縮小設定
        const map_image = document.getElementById('map_drag_img');
        
        const plus_button = document.querySelector('.plus_button');
        const minus_button = document.querySelector('.minus_button');
        
        // transform　の値
        let zs_XY = 1.0;
        
        // 拡大ボタンを押したとき
        plus_button.addEventListener("click", ()=>{
            zs_XY += 0.1;       //押すたびに0.2プラス
            map_image.style.transform = `scale(${zs_XY},${zs_XY})`;
        })
        
        
        // 縮小ボタンを押したとき
        minus_button.addEventListener("click", ()=>{
            zs_XY -= 0.1;       //押すたびに0.2マイナス
            map_image.style.transform = `scale(${zs_XY},${zs_XY})`;

        })
    

    // Map　マーク
    const mark = document.querySelector('.map_mark');
    const line = document.querySelector('.cls-1');


    
    
    gsap.to(mark , {transform: 'scale(6, 6)', duration: 1.3,repeat: -1, opacity: 0, repeatDelay: 0.5});

        gsap.to(line, {d:'M 8 2 L 0 0', duration:1, repeat: -1});
    
   
    // Map ロゴ線
    

    
    //　Map 新幹線
    const shinkansen = document.getElementById('shinkansen_move');
    const car = document.getElementById('map_car');

    var tl = gsap.timeline({repeat: -1,  repeatDelay: 5});

    tl.to("#shinkansen-line-pic", { opacity: 1, duration:2},4)
        .to ("#shinkansen", {
                motionPath: {
                    path: "#shinkansen-line",
                    align: "#shinkansen-line",
                    alignOrigin: [0.5, 0.5],
                    
                },
                onStart: ()=>{
                    shinkansen.style.opacity =1;
                },
                ease: "power1.out",
                duration: 3,
                delay: 3
            })

    
            
        .to("#shinkansen2",{
                    motionPath:{
                        path:"#shinkansen-line2",
                        align:"#shinkansen-line2",
                        alignOrigin: [0.5, 0.5],
                    },
                    onComplete: ()=>{
                        gsap.to("#shinkansen-line-pic",{
                            opacity:0,
                            duration:3
                        });
                        gsap.to(shinkansen ,{
                            opacity:0,
                            duration:3
                        });
                    },
                    ease: "power1.out",
                    duration: 3,
                })


        // Map 自動車

        .to("#map_car_pic_R", {
            motionPath:{
                path: "#lineR",
                align: "#lineR",
                alignOrigin: [0.5, 0.5],
            },
            onStart: ()=>{
                car.style.opacity = 1;

            },
            ease: "power1.out",
            duration: 3,
            delay: 4
        })
        
        .to("#map_car_pic_L", {
            motionPath:{
                path: "#lineL",
                align: "#lineL",
                alignOrigin: [0.5, 0.5],
            },
            ease: "power1.out",
            duration: 3,
            onComplete: ()=>{
                car.style.opacity = 0;
            }
        });


        
    // const practice = document.querySelector('.practice');
    
    
    //     console.log(practice);
    //     // 第1引数に対象、第2引数に変化させたいプロパティーと設定値を指定
    //     gsap.set(practice,{x:500})
    //     gsap.to( practice , { x:0 , duration: 1 ,
    //         ease: "back.out(1.7)",

    //     });
        // Ease

})


</script>

<template>
<div class="map">
    <h2 class="map_title">
        <font-awesome-icon :icon="['fas', 'train-subway']" />
        <span>アクセスマップ</span>
    </h2>
    <div class="map-inner">
        <div class="map_bird1"></div>
        <div class="map_bird2"></div>
        <div id="map_pic">
            <div id="map_pic_inner" >
                <div id="map_drag_img" >
                <img class="map_img"  src="../assets/kakegawa-img/map_all.png" alt="">
                <div class="map_mark"></div>
                            
                    <div class="map_logo">
                        <img src="https://k-hana-tori.com/new/wp-content/themes/kids-online-store/images/img_5.png">
                        <div class="logo_line"></div>
                        <svg style="opacity: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.82 8.33">
                            <path d="M79.78 7.83.05.5" style="fill:none;stroke:none;stroke-miterlimit:10"/>
                        </svg>
                    </div>
                    
                    
                    <div id="map_shinkansen">
                        <img style="opacity: 0;" class="shinkansen-line-pic" id="shinkansen-line-pic" src="../assets/kakegawa-img/map_shinkansen_line-1.png" alt="">
                        <div id="shinkansen_move" style="opacity: 0;">
                            <div id="box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399.47 261.23">
                                    <path id="shinkansen-line" d="M398.55.39c-29.89 70.4-242.42 155.47-257.5 159.5S46.74 230.21.55 260.39" style="fill:none;stroke:none;stroke-miterlimit:10;stroke-width:2px" data-name="レイヤー 1"/>
                                </svg>
                                <img id="shinkansen" src="../assets/kakegawa-img/map_shinkansen_R.png" alt="">
                            </div>
                            <div id="box2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.68 89.79">
                                    <path id="shinkansen-line2" d="M.61.79c88.53 68.25 171.22 82.33 253 88" style="fill:none;stroke:none;stroke-miterlimit:10;stroke-width:2px" data-name="レイヤー 1"/></svg>
                                    <img id="shinkansen2" src="../assets/kakegawa-img/map_shinkansen_L.png" alt="">
                                </div>
                            </div>
                        </div>
                            
                            
                            <div id="map_car" style="opacity: 0;">
                            <svg id="car_lineR" xmlns="http://www.w3.org/2000/svg" data-name="レイヤー 2" viewBox="0 0 406.41 260.13">
                                <path id="lineR" d="M405.44.24S390.5 60.13 243.5 130.13c0 0-15 6-21 9-13.62 6.81-14 8-25 15s-41 5-74 20c-11.37 5.17-19 19-21 20s-36 45-43 51-39.78 14-39.78 14H0" data-name="レイヤー 4" style="fill:none;stroke:none;stroke-miterlimit:10;stroke-width:2px"/>
                            </svg>
                                
                                
                            <svg id="car_lineL" xmlns="http://www.w3.org/2000/svg" data-name="レイヤー 2" viewBox="0 0 233.37 73.42">
                                <path id="lineL" d="m.45.89 28.72 14.55s36.03 21.35 52 28c12 5 57.56 10.02 57.56 10.02l94.44 18.98" data-name="レイヤー 4" style="fill:none;stroke:none;stroke-miterlimit:10;stroke-width:2px"/>
                            </svg>
                                
                                <img class="map_carLine_pic" src="../assets/kakegawa-img/map_car_line.png">
                                <img id="map_car_pic_R" src="../assets/kakegawa-img/map_car.png">
                                <img id="map_car_pic_L" src="../assets/kakegawa-img/map_car_L.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="map_button">
                <font-awesome-icon :icon="['fas', 'circle-plus']" size="2xl" class="plus_button" />
                <font-awesome-icon :icon="['fas', 'circle-minus']" size="2xl" class="minus_button"/>
            </div>
        
        <div class="access-nav">
            <div class="access-navButton1">
                <ul>
                    <li class="access_car"><font-awesome-icon class="car_icon" :icon="['fas', 'car-side']" />お車を<br>ご利用の方</li>
                    <li class="access_shinkansen"><img src="../assets/kakegawa-img/map_navButton_shinkansen.png" alt="">新幹線/電車をご利用の方</li>
                </ul>
            </div>
            <div class="access-navButton2">
                <ul>
                    <li class="access_plen"><img src="../assets/kakegawa-img/map_navButton_plane.png" alt="">飛行機を<br>ご利用の方</li>
                    <li class="access_walk"><img src="../assets/kakegawa-img/map_navbutton_walk.png" alt="">徒歩/バスで<br>お越しの方</li>
                </ul>
            </div>
        </div>

        <div class="map-link">
            <a href="#">Google Mapで見る</a>
        </div>
</div>


</template>

<style scoped>
/* アクセスマップ 設定*/
    .map{
        margin-top: 200px;
        font-family: "Zen Kaku Gothic Antique", sans-serif;
        font-weight: 600;
        font-style: normal;
        text-align: center;
    }
    .map_title{
        font-size: 24px;
    }
    .map_title span{
        padding-left: 8px;
    }
    
    .map_inner{
        position: relative;
        padding: 5px;
        max-width: 1400px;
        height: 700px
    }
    
    .map_bird{
        margin-bottom: 35px;
    }
    
    #map_pic{
        overflow: hidden;
        margin: 0 auto;

        max-width: 1400px;
        height: 700px;
        max-height: 1400px;
        box-shadow: 1px 1px 20px -3px #ecececbf;
        transform: scale(1, 1);
    }
    #map_drag_img{
        position:relative;
        width: 90%;
    }
    .map_img{
        position: absolute;
        top: 0;
        left: 0;
        object-position: top -40px left 70%;
        z-index: -1;
        width: 2500px;
    }
    .map_img img{
        width: 100%;
    }

    /* アクセスマップ　拡大縮小ボタン */
    .map_inner{
        position: relative;
    }
    .map_button{
        position: absolute;
        color: #4b3636;
    }
    .plus_button{
        position: inherit;
        top: -110px;
        left: 1200px;
    }
    .minus_button{
        position: inherit;
        top: -70px;
        left: 1200px;
    }

    /* アクセスマップ　ロゴ */
    .map_logo{
        position:relative;
    }
    .logo_line{
        position:absolute;
        top: -295px;
        left: 500px;
        width: 120px;
        border: 0.5px solid #000;
        transform: rotate(5deg);
        animation: logo-line 2s ease infinite;
    }

    @keyframes logo-line{
        0%{ width: 0px;}
        100%{width: 120px;}
    }

    
    .map_logo img{
        position: absolute;
        top: -315px;
        left: 478px;
        width: 400px;
    }
    .map_logo svg{
        position: absolute;
        top: -300px;
        left: 500px;
        width: 120px;
    }
    
    #map_pic_inner{
        position: relative;
    }
    .map_mark{
        position: absolute;
        top: 518px;
        left: 480px;
        width: 20px;
        height: 20px;
        background-color: rgb(255, 161, 211);
        border-radius: 20px;
        transform: scale(1, 1);
    }

    .map_img{
        position: relative;
    }
    .map_line{
        position: absolute;
        top: 0;
        left: 0;
    }

    /* Map 新幹線 */

    #box{
          margin-top: 20px;
            position:relative;
        }
    #box svg{
        position: absolute;
        top: -795px;
        left: 500px;
        width:700px; 
    }
    #box img{
        position: absolute;
        top: -110px;
        width:100px;
    }

    #box2{
        position: relative;
    }
    #box2 svg{
        position: absolute;
        top: -470px;
        left: 70px;
        width:400px;
    }
    #box2 img{
        width:100px;
    }

    #map_shinkansen{
        position: relative;
    }
    
    .shinkansen-line-pic{
        position: absolute;
        top: -750px;
        left: -20px;
        width: 2900px;
        height: auto;
        z-index: -1;
    }
    .shinkansen-line-pic img{
        width: 100%;
        height: 100%;
    }
    

    /* Map 自動車 */
    #map_car{
        position: relative;
    }
    
    #car_lineR{
        position: absolute;
        top: -780px;
        left: 500px;
        width: 660px;
    }
    #car_lineL{
        position: absolute;
        top: -480px;
        left: 80px;
        width: 400px;
    }

    #map_car_pic_R,
    #map_car_pic_L{
        width: 80px;
        height: 60px;
    }
    #map_car_pic_R img,
    #map_car_pic_L img{
        z-index: 100;
    }
    .map_carLine_pic{
        position: inherit;
        top: -800px;
        left: -40px;
        width: 1600px;
        height: auto;
        z-index: -1;
    }
    .map_carLine_pic img{
        width: 100%;
        height: 100%;
    }

/* Map　マップ装飾 */
.map_bird1{
    position: relative;
}

.map_bird1::before{
    position: absolute;
    content: '';
    top: 580px;
    left: 0;
    background: url(../assets/kakegawa-sub-img/animal_flamingoR.png) no-repeat;
    width: 180px;
    height: 200px;
    background-size: cover;
    z-index: 1;
}
.map_bird1::after{
    position: absolute;
    content: '';
    top: -100px;
    left: 0;
    background: url(../assets/kakegawa-sub-img/flower_syakunage.png) no-repeat;
    width: 220px;
    height: 220px;
    background-size: cover;
    z-index: 2;
}
.map_bird2{
    position: relative;
}
.map_bird2::before{
    position: absolute;
    content: '';
    top: -80px;
    left: 190px;
    background: url(../assets/kakegawa-sub-img/animal_mimizuku.png) no-repeat;
    width: 120px;
    height: 120px;
    transform: rotate(20deg);
    background-size: cover;
    z-index: 1;
}
.map_bird2::after{
    position: absolute;
    content: '';
    top: -100px;
    right: 190px;
    background: url(../assets/kakegawa-sub-img/animal_parrot.png) no-repeat;
    width: 120px;
    height: 120px;
    transform: rotate(-10deg);
    background-size: cover;
    z-index: 1;
}


    /* Map　アクセスナビ */
    .access-nav{
        margin-top: 20px;
        display: flex;
        gap: 20px;
        margin: 0 auto;
        justify-content: center;
    }
    .access-navButton1 ul,
    .access-navButton2 ul{
        display: flex;
        gap: 20px;
    }
    .access-nav img{
        width: 80px;
        height: 70px;
        object-fit: cover;
    }

    .access-nav li{
        width: 148px;
        height: 148px;
        border-radius: 100px;
        color: white;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 15px;
    }
    .access-nav li:hover{
        opacity: 0.7;
        transition: all 0.5s;
    }
    
    .access_car{
        background-color: #6ab031;
    }
    .access_car span{
        display: block;
    }
    .car_icon{
        font-size: 50px;
    }

    .access_shinkansen{
        background-color: #72bdaf;
    }
    .access_plen{
        background-color: #889ecb;
    }
    .access_walk{
        background-color: #ab88b7;
    }

    /* Map マップリンク */
    .map-link{
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
    .map-link a{
        display: inline-block;
        width: 250px;
        height: 59px;
        padding: 15px;
    }
    .map-link:hover{
        opacity: 0.7;
        transition: all 0.5s;
    }


    @media (max-width:1024px) {
        /* Map 装飾 */

        .map_bird1::after{
            width: 180px;
            height: 180px;
            animation: map_bird_Move3 5s infinite ease;
            }
        .map_bird2::before{
            left: 150px;
            width: 90px;
            height: 90px;
            animation: map_bird_Move 5s infinite ease;
        }
        .map_bird2::after{
            animation: map_bird_Move2 5s infinite ease;

        }

        @keyframes map_bird_Move {
            0%{transform: translateY(0%) rotate(20deg);}
            30%{transform: translateY(-3%) rotate(20deg);}
            60%{transform: translateY(3%) rotate(20deg);}
            100%{transform: translateY(0%) rotate(20deg);}
        }
        @keyframes map_bird_Move2 {
            0%{transform: translateY(0%) rotate(-10deg);}
            30%{transform: translateY(-3%) rotate(-10deg);}
            60%{transform: translateY(3%) rotate(-10deg);}
            100%{transform: translateY(0%) rotate(-10deg);}
        }
        @keyframes map_bird_Move3 {
            0%{transform: translateY(0%);}
            30%{transform: translateY(1%);}
            60%{transform: translateY(-1%);}
            100%{transform: translateY(0%);}
        }

    }
    

    /* Map　モバイル画面設定 */
    @media (max-width:480px) {
        .map{
        margin-top: 55px;
        }
        .map_title{
            margin-bottom: 30px;
        }
        #map_pic{
            box-shadow: none;
            border: #000 1px solid;
            height: 290px;
            width: 90%;
        }
        /* Map 装飾 */
        .map_bird1::before{
            top: 250px;
            left: -10px;
            width: 75px;
            height: 80px;
        }
        .map_bird1::after{
            top: -40px;
            width: 100px;
            height: 100px;
        }
        .map_bird2::before{
            top: -30px;
            left: 80px;
            width: 50px;
            height: 50px;
        }
        .map_bird2::after{
            top: -90px;
            right: 20px;
            width: 50px;
            height: 55px;
        }
        
        /* Map　アクセスナビ */
        .access-nav{
            display: inline-block;
            background-color: #eee;
            width: 100%;
            gap: 0px;
            margin: 0 auto;
            padding: 3vw;
        }
        .access-navButton1 ul,
        .access-navButton2 ul{
            display: flex;
            justify-content: space-around;
            gap: 3px;
        }
        .access-nav .access_shinkansen{
            font-size: 14px;
        }
        .access-nav li{
            font-size: 15px;
            max-width: 185px;
            width: 185px;
            height: 50px;
            border-radius: 10px;
            padding-bottom: 0
        }
        .access-nav br{
            display: none;
        }
        .access-nav img{
            width: 50px;
            height: 20px;
        }
        .access_walk img{
            height: 30px;
            width: 25px;
        }
        .car_icon{
            font-size: 25px;
        }
        .map-link{
            margin-top: 30px;
        }
        
    /* アクセスマップ　拡大縮小ボタン */

        .plus_button{
            top: -110px;
            left: 40px;
        }
        .minus_button{
            top: -70px;
            left: 40px;
        }
    }

    @media (max-width:320px) {
        .access-nav li{
            font-size: 13px;
        }
        .access_shinkansen{
            overflow: hidden;
        }
    }
    
</style>