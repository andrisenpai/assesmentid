<template>
    <blockquote id="blockquote-prose">
      <slot />
    </blockquote>
</template>

<style lang="scss">

    #blockquote-prose {
        position: relative;
        padding-left: 50px;

        &::after {
            position: absolute;
            content: "";
            width: 2px;
            background: $primary;
            left: 0;
            top: 0;
            height: 100%;
        }

        p {
            color: #666;
            font-size: 18px;
        }
    }

</style>