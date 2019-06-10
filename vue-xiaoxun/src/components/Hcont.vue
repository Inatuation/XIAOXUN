<template>
    <div id="contBox">
        <Hnav />
        <Hmain/>
    </div>
</template>

<script>
import Hmain from './Hmain.vue';
import Hnav from './Hnav.vue';

export default {
    components : {
        Hnav,
        Hmain,
    }
}
</script>

