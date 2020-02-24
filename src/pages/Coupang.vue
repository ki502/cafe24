<template>
    <v-row>
        <v-row>
            <!-- Left 영역 -->
            <v-col :cols="1">
                <left-view></left-view>
            </v-col>
            <!-- Center 영역 -->
            <v-col :cols="10">
                <v-row>
                    <v-col v-for="(card,index) in cards" :key="index" :cols="card.flex">
                        <card 
                            :link="card.link" 
                            :imageUrl="card.src" 
                            :title="card.title" 
                            :maxWidth="card.maxWidth" 
                            :iconColor="card.iconColor" 
                            :description="card.description" 
                            :cardLink="card.cardLink">
                        </card>
                    </v-col>
                </v-row>
            </v-col>
            <!-- Right 영역  -->
            <v-col :cols="1">
                <right-view></right-view>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
import Card from "../component/Card.vue";
import LeftView from "../component/LeftView.vue";
import RightView from "../component/RightView.vue";

export default {
    components: {
        Card: Card,
        LeftView: LeftView,
        RightView: RightView
    },
    data() {
        return {
            cards: [
                { title: '곰곰 오리지날 닭가슴살 슬라이스 (냉동), 120g, 5개'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/retail/images/4620734802352-97ea9ce2-fc18-4836-83ee-7338abbbb997.jpg'
                , cardLink: "https://coupa.ng/bpbjCS"
                , iconColor: "red"
                , description: "싸길래 먹어봤다. 나쁘진 않았다. 맛이 뛰어나진 않고 싼 맛에 먹을만하다. 다이어트는 독하게 하는게 맞는 것 같다."
                , flex: 3
                , maxWidth:300 },
                { title: '[정관장]홍삼정 에브리타임 밸런스 30포/1박스, 없음, 상세설명 참조'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/f9ff/c835f7077b6720fc34bd3ab1955c4c1e2919c0b72d6267283e5e8f372d57.jpeg'
                , cardLink: "https://coupa.ng/bpaVDz"
                , iconColor: "green"
                , description: "먹어 봤는데 정말 맛있더라.. 부모님이랑 같이 먹고 있다."
                , flex: 3
                , maxWidth:300 },
                { title: '로지텍 서라운드사운드 게임 헤드셋 G933 무선 새상품'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/images/2018/07/10/16/3/d55ff7d1-4f20-4071-b834-52e26fc140e2.jpg'
                , cardLink: "https://coupa.ng/bpa5Hu"
                , iconColor: "yellow"
                , description: "쓰고 있는데 악평에 비해 무선 기능과 음질은 좋다. 다만 마이크 소리가 작다."
                , flex: 3
                , maxWidth:300 },
                { title: '로지텍 G903 HERO 무선 게이밍 마우스'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/retail/images/2019/11/25/15/4/ec2d7fef-7838-4136-8102-2653cc295656.jpg'
                , cardLink: "https://coupa.ng/bpa6e3"
                , iconColor: "green"
                , description: "정말 괜찮다. 무게도 FPS하기에 좋고, 무엇보다 무선인데 유선보다 반응이 빠르다. 정말 최고"
                , flex: 3
                , maxWidth:300 },
                { title: '부자 아빠 가난한 아빠 (20주년 특별 기념판)'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/d13d/abca68c965907f7beee6dece825fe018f6cf1996884d14f90a955d11b824.jpg'
                , cardLink: "https://coupa.ng/bpa7pQ"
                , iconColor: "green"
                , description: "요즘 읽고있다. 감명받으면서 읽는다. 난 노예가 되지 않고 주인이 되어 세상을 살아가겠다."
                , flex: 3
                , maxWidth:300 },
                { title: '자바의 정석'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/48db/ae604f78ea57163b9779131d492d56de9005e3d2ac5d701baff6b31b8830.jpg'
                , cardLink: "https://coupa.ng/bpa80v"
                , iconColor: "green"
                , description: "회사에서 다시 Java를 쓰게됐다. 다시 봐야된다. Java 책 중에선 가장 좋은것 같다."
                , flex: 3
                , maxWidth:300 },
                { title: 'GoF의 디자인 패턴 :재사용성을 지닌 객체지향 소프트웨어의 핵심요소, 프로텍미디어'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/3be8/915d36489361d0d21b5f191ee0e6642dd74203c77fff9bec1c95c00fac9a.jpg'
                , cardLink: "https://coupa.ng/bpa91U"
                , iconColor: "green"
                , description: "디자인 패턴 중에선 갑중 갑인 것 같다. 다만 어렵다... 아직도 많이 어렵다."
                , flex: 3
                , maxWidth:300 }
            ],
        }
    }
}
</script>

<style>

</style>