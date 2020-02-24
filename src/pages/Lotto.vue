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
            this.height = 200;

            this.game = new Phaser.Game({
                parent: 'phaser-div',
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

            let radius = this.radius;
            let ballCount = this.ballCount;
            let pointX = 0;
            let operationX = 20;
            let gap = 10;
            let start = (this.width - (radius * ballCount * 2) - (operationX * 4) - (radius * 2 )) / 2;

            // 1~6 번호
            for(let index = 0; index < ballCount; index++) {
                pointX = start + radius + (index * radius * 2) + (index * gap);

                this.itemList.push({
                    type: 'circle',
                    circle: this.game.scene.scenes[0].add.circle(pointX, this.height / 2, radius, 0x6666ff),
                    text: this.game.scene.scenes[0].add.text(pointX, this.height / 2, '-').setFontSize(50).setOrigin(0.5)
                });
            }

            // + 연산자
            this.itemList.push({
                type: 'operation',
                text: this.game.scene.scenes[0].add.text(pointX + radius + operationX, this.height / 2, '+').setFontSize(50).setOrigin(0.5)
            });

            //보너스 번호
            this.itemList.push({
                type: 'lastNumber',
                circle: this.game.scene.scenes[0].add.circle(pointX + (radius * 2) + (operationX * 2), this.height / 2, 50, 0x6666ff),
                text: this.game.scene.scenes[0].add.text(pointX + (radius * 2) + (operationX * 2), this.height / 2, '-').setFontSize(50).setOrigin(0.5)
            });
            
            this.getLottoInfo();
        },
        resizeScene: function() {
            this.width = window.innerWidth - 24 - 17;
            
            let radius = this.radius;
            let ballCount = this.ballCount;
            let pointX = 0;
            let operationX = 20;
            let gap = 10;
            let start = (this.width - (radius * ballCount * 2) - (operationX * 4) - (radius * 2 )) / 2;

            this.game.scale.resize(this.width, this.height);

            // 1~6 번호
            for(let index = 0; index < ballCount; index++) {
                pointX = start + radius + (index * radius * 2) + (index * gap);

                this.itemList[index].circle.x = pointX;
                this.itemList[index].text.x = pointX;
            }

            // + 연산자
            this.itemList[ballCount].text.x = pointX + radius + operationX;

            // 보너스 번호
            this.itemList[ballCount + 1].circle.x = pointX + radius + (operationX * 2) + radius;
            this.itemList[ballCount + 1].text.x = pointX + radius + (operationX * 2) + radius;
        },
        calcurateLotto() {
            let startDate = new Date("2002-12-07");
            let nowDate = new Date();
            let diffDate = nowDate - startDate;
            
            // 주 단위로 짤라서 구하기 현재 주 + 1주기 때문에 더하기 1을 해준다.
            return parseInt(diffDate / (24 * 60 * 60 * 1000) / 7) + 1;
        },
        getColorByNumber(value){
            /*
                바탕색상표
                1~10 : #FBC400
                11~20 : #69C8F2
                21~30 : #FF9090
                31~40 : #AAAAAA
                41~46 : #B0D840
            */
            let colorList = [16499712, 6932722, 16748688, 11184810, 11589696];
            return colorList[parseInt(value / 10)];
        },
        getLottoInfo() {
            let count = this.calcurateLotto();
            /*
                drwNoDate: "2020-02-08"
                totSellamnt: 88231474000
                firstWinamnt: 1619922520
                firstPrzwnerCo: 13
                bnusNo: 29
                firstAccumamnt: 21058992760
                drwNo: 897
                drwtNo1: 6
                drwtNo2: 7
                drwtNo3: 12
                drwtNo4: 22
                drwtNo5: 26
                drwtNo6: 36
            */

            axios.get(`${this.$store.state.axios}/apis/lotto/${count}`).then((result) => {
                let lottoInfo = result.data;

                this.itemList.forEach((element, index) => {
                    if(element.type === 'circle') {
                        let propertyName = 'drwtNo' + (index + 1);
                        let value = lottoInfo[propertyName];

                        element.text.setText(value);
                        this.itemList[index].circle.fillColor = this.getColorByNumber(value);
                    }

                    if(element.type === 'lastNumber') {
                        let value = lottoInfo.bnusNo;

                        element.text.setText(value);
                        this.itemList[index].circle.fillColor = this.getColorByNumber(value);
                    }
                }); 
            });                       
        }
    }
}
</script>

<style>

</style>