<template>
    <article class="dog" @click="goTo(dog.chipNumber)">
        <img :src="dog.img" alt="a dog" >
        <h3>{{ dog.name }}</h3>
        <h4>{{ dog.breed }}</h4>
    </article>
</template>

<script>
export default {
    name: 'Dog',
    props: {
        dog: Object
    },
    methods: {/*for click the dog image and go to info dog page*/
        goTo(id) {
            console.log(id);
            this.$router.push(`/dogs/${id}`)
        }
    }
}
</script>

<style lang="scss">
    .dog {
        background: white;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        border-radius: 3px;
        box-shadow: 0 0 1rem rgba(0,0,0,.1);
        transition: all .2s ease;
        filter: grayscale(1);


        &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 1.5 rgba(0,0,0,.05);
            filter: grayscale(0);
            cursor: pointer;
        }

        img {
            width: 8rem;
            height: 8rem;
            object-fit: cover;
            border-radius: 9999rem;
            margin: 0 0 1rem 0;
        }

        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.6rem;
        }

        h4{
            margin: 0;
            padding: 0;
            font-weight: .1rem;
        }
    }

</style>