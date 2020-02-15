<template>
    <v-row>
        <v-col :cols="12">
            <v-card id="phaser-div"></v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    beforeDestroy: function () {
        window.removeEventListener('resize', this.resizeScene);
    },
    mounted() {
        this.width = window.innerWidth;
        this.create();
        window.addEventListener('resize', this.resizeScene);
    },
    data() {
        return {
            game: null,
            width: 0,
            heght: 0,
            circleList: []
        }
    },
    methods: {
        create() {
            this.height = 200;

            this.game = new Phaser.Game({
                parent: 'phaser-div',
                type: Phaser.AUTO,
                width: this.width,
                height: this.height,
                physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: { y: 200 }
                    }
                },
                scene: {
                    create: this.createScene,
                }
            });
        },
        createScene: function() {
            this.circleList = [];

            let start = (this.width - 600) / 2;

            for(let index = 0; index < 6; index++) {
                this.circleList.push(this.game.scene.scenes[0].add.circle(start + 50 + (index * 100), 100, 50, 0x6666ff));
            }
        },
        resizeScene: function() {
            this.width = window.innerWidth;
            let start = (this.width - 600) / 2;

            this.game.scale.resize(this.width, this.height);
            this.circleList.forEach((element, index) => {
                element.x = start + 50 + (index * 100);
            });
        }
    }
}
</script>

<style>

</style>