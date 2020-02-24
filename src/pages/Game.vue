<template>
    <v-row>
        <v-col :cols="12">
            <v-card id="game"></v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    beforeDestroy: function () {
        window.removeEventListener('resize', this.resizeScene);
    },
    mounted() {
        this.width = window.innerWidth - 24 - 17;
        this.create();
        window.addEventListener('resize', this.resizeScene);
    },
    data() {
        return {
            game: null,
            width: 0,
            heght: 0,
            itemList: [],
            radius: 50,
            ballCount: 6,
        }
    },
    methods: {
        create() {
            this.height = window.innerHeight - 64 - 24 - 12;

            this.game = new Phaser.Game({
                parent: 'game',
                type: Phaser.AUTO,
                width: this.width,
                height: this.height,
                scene: {
                    create: this.createScene,
                }
            });
        },
        createScene: function() {
            this.itemList = [];
        },
        resizeScene: function() {
            this.width = window.innerWidth - 24 - 17;
            this.height = window.innerHeight - 64 - 24 - 12;
            
            this.game.scale.resize(this.width, this.height);
        }
    }
}
</script>

<style>

</style>