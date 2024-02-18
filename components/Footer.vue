<template>
    <footer class="container-fluid footer-container">
        <div class="footer-wrapper-2">
            <div class="text-wrapper">
                <h1 class="footer-title">Hubungi Kami</h1>
                <span class="footer-subtitle">Terima kasih atas kunjungan anda pada situs Assessment Indonesia</span>
            </div>
            <div class="cs-button-wrapper">
                <button class="cs-button">
                    <i class="icofont-phone"></i>
                    <span>Customer Service 1</span>
                </button>
                <button class="cs-button">
                    <i class="icofont-phone"></i>
                    <span>Customer Service 2</span>
                </button>
            </div>
            <ul class="contact-list">
                <li class="list-wrapper">
                    <i class="icofont-phone"></i>
                    <span><a href="">(021) 50-233-203</a></span>
                </li>
                <li class="list-wrapper">
                    <i class="icofont-phone"></i>
                    <span><a href="">(021) 50-233-203</a> / <a href="">(021) 50-233-203</a></span>
                </li>
                <li class="list-wrapper">
                    <i class="icofont-envelope"></i>
                    <span><a href="">admin@example.com</a></span>
                </li>
                <li class="list-wrapper">
                    <i class="icofont-location-pin"></i>
                    <span><a href="">Jl. Wijaya Kusuma No.2, Rt.1/Rw.1 , Jatipulo, Kec. Palmerah, Jakarta Barat
                            11430</a></span>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts">

export default {
}

</script>

<style lang="scss">
.footer-container {
    background-image: url('/images/icon/footer-background.png');
    background-repeat: no-repeat;
    background-size: cover;

    @media #{$extraBig-device} {
        background-position-y: 28%;
    }

    @media #{$desktop-device} {
        background-position-x: 80%;
    }

    @media #{$tablet-device, $large-mobile} {
        background-image: none;
        background-color: #1F8C7Fff;
    }
}

.footer-wrapper-2 {
    padding: 90px 100px;

    @media #{$large-mobile} {
        padding: 80px 30px;
    }
}

.footer-title {
    color: white;
    font-weight: 600;
}

.footer-subtitle {
    color: white;
    font-weight: 500;
}

.cs-button-wrapper {
    display: flex;
    flex-direction: row;
    margin: 30px 0;

    @media #{$large-mobile} {
        flex-direction: column;

        .cs-button {
            width: fit-content;
            margin-bottom: 10px;
        }
    }

    .cs-button {
        margin-right: 10px;
        padding: 10px 30px;
        background-color: rgb(37, 211, 102);
        color: white;
        font-size: 16px;
        font-weight: 600;
        border-radius: 64px;

        &:hover {
            background-color: rgb(34, 197, 94);
        }

        i {
            margin-right: 10px;
        }
    }
}

.list-wrapper {
    color: $white;
    font-size: 20px;
    transition: $transition-base;
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;

    @media #{$large-mobile, $tablet-device} {
        width: 100%;
        margin-bottom: 18px;
    }

    span a {
        font-size: 17px;
        color: $white;
        font-weight: 500;

        &:hover {
            color: $gray-200;
        }
    }

    i {
        margin-top: 5px;
        margin-right: 17px;
        font-size: 30px;
        display: inline-block;
    }
}
</style>

