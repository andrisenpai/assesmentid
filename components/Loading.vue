<template>
    <div class="loading-section container-fluid">
        <div class="spinner"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

    .loading-section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 9px solid;
        border-color: #dbdcef;
        border-right-color: $primary;
        animation: spinner-d3wgkg 1s infinite linear;
    }
    
    @keyframes spinner-d3wgkg {
        to {
            transform: rotate(1turn);
        }
    }

</style>