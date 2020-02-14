<template>
    <v-card :href="cardLink">
        <v-img class="mx-auto white--text align-end" :src="imageUrl" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
            <v-card-title v-text="title"></v-card-title>
        </v-img>
        <v-card-text class="black--text"><v-icon 
        :color="iconColor">
        {{
            iconColor == "green" ? "sentiment_very_satisfied" :
            iconColor == "yellow" ? "sentiment_dissatisfied" :
            iconColor == "red" ? "sentiment_very_dissatisfied" :
            "contact_support"
        }}
        </v-icon>{{ description }}</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["imageUrl", "title", "cardLink", "iconColor", "description"]
}
</script>

<style>

</style>