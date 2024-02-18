<template>
    <ul id="proseUl">
      <slot />
    </ul>
</template>

<style lang="scss">

    #proseUl {
        margin-bottom: 50px;
        padding-left: 18px;
        @media #{$large-mobile} {
            margin-bottom: 30px;
        }
        
        li {
            list-style: disc;
        }
    }
</style>