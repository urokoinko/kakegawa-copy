<template>
    <div class="sns">
        <div class="sns-parts-1">
            <div class="youtube sns-parts">
                <div class="sns-logo">
                    <img src="https://k-hana-tori.com/new/img/youtube.png" alt="">
                </div>
                <div class="bg-move">
                    <video muted playsinline autoplay loop  src="../assets/kakegawa-img/top_move02.mp4">
                    </video>
                </div>
            </div>
            <div class="instagram sns-parts">
                <div class="sns-logo">
                    <img src="https://k-hana-tori.com/new/img/insta.png" alt="">
                </div>
            </div>
        </div>
        <div class="sns-parts-2">
            <div class="facebook sns-parts">
                <div class="sns-logo">
                    <img src="https://k-hana-tori.com/new/img/facebook.png" alt="">
                </div>
            </div>
            <div class="blog sns-parts">
                <div class="sns-logo">
                    <img src="https://k-hana-tori.com/new/img/stuff_blog.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sns{
        display: flex;
        margin-top: 150px
    }
    /* SNSコンテンツ */
    
    .sns-parts-1{
        padding-bottom: 5px;
        width: calc((100% - 3px) /3 *2);
    }
    .sns-parts-2{
        padding-bottom: 5px;
        width: calc(100%/3);
        z-index: -1;
    }

    .sns-parts{
        position: relative;
        top: 0;
        left: 0;
        width: auto;
        height: 24vw;
        display: flex ;
        align-items: center;
        justify-content: center;
    }
    .sns-logo{
        position: absolute;
        max-width: 239px;
        height: auto;
        z-index: 100;
    }
    
    /* SNSコンテンツ 　youtube*/
    .youtube{
        padding-right: 3px;
        overflow: hidden;
    }
    .youtube video{
        position: relative;
        z-index: 1;
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .bg-move::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 99.8%;
        height: 100%;
        background-color: #333;
        opacity: 0.5;
        z-index: 10;
    }

    .facebook{
        background-color: #6bb92d;
    }
    .blog{
        background-color: #c1d600;
    }


    /* mobile 設定 */
    @media (max-width: 480px) {
        .sns{
            display: block
        }
        .sns-parts-1,
        .sns-parts-2{
            width: 100%;
        }
        .sns-parts{
            margin-bottom: 20px;        
            height: 15vw;
        }
        .sns-logo{
            max-width: 150px;
            height: auto;
            z-index: 100;
        }
    
        .youtube{
            height: 48vw;
        }
    }
</style>