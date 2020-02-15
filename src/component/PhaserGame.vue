<template>
    <v-row>
        <v-col :cols="12">
            <v-card id="phaser-div"></v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    mounted() {
       this.create();
    },
    data() {
        return {
            game: null
        }
    },
    methods: {
        create() {
            this.game = new Phaser.Game({
                parent: 'phaser-div',
                type: Phaser.AUTO,
                width: 800,
                height: 600,
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
            var r1 = this.game.scene.scenes[0].add.circle(200, 200, 80, 0x6666ff);

            var r2 = this.game.scene.scenes[0].add.circle(400, 200, 80, 0x9966ff);

            r2.setStrokeStyle(4, 0xefc53f);

            var r3 = this.game.scene.scenes[0].add.circle(600, 200, 80);

            r3.setStrokeStyle(2, 0x1a65ac);

            var r4 = this.game.scene.scenes[0].add.circle(200, 400, 80, 0xff6699);

            var r5 = this.game.scene.scenes[0].add.circle(400, 400, 80, 0xff33cc);

            var r6 = this.game.scene.scenes[0].add.circle(600, 400, 80, 0xff66ff);

            //  WebGL only
            r6.setIterations(0.2);

            this.game.scene.scenes[0].tweens.add({

                targets: r4,
                scaleX: 0.25,
                scaleY: 0.5,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'

            });

            this.game.scene.scenes[0].tweens.add({

                targets: r5,
                alpha: 0.2,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'

            });

            this.game.scene.scenes[0].tweens.add({

                targets: r6,
                angle: 90,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'

            });
        }
    }
}
</script>

<style>

</style>