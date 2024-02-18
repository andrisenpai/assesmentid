<template>
    <ol id="proseOl">
        <slot />
    </ol>
</template>

<style lang="scss">
    #proseOl {
        padding-left: 15px;
        margin-bottom: 50px;

        @media #{$large-mobile} {
            margin-bottom: 30px;
        }
    }
</style>