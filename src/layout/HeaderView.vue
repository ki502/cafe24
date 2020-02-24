<template>
    <v-row no-gutters class="text-center display-4">
        <v-app-bar color="deep-purple accent-4" dark scroll-target="#scrolling-techniques-6">
            <v-toolbar-title>MyApp</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs align-with-title>
                <v-tab @click="move('/game')">게임</v-tab>
                <v-tab @click="move('/coupang')">쿠팡 파트너스</v-tab>
                <v-tab @click="move('/lotto')">로또</v-tab>
            </v-tabs>
        </v-app-bar>
    </v-row>
</template>

<script>
export default {
    methods: {
        move: function(url) {
            this.$router.push({ path: url, })
        }
    }
}
</script>

<style>

</style>