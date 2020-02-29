<template>
    <div class="wrapper ">
        <div class="top_navbar">
            <div class="hamburger">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
            <div class="top_menu">
                <div class="logo">Coffee manager</div>
                <ul>
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-user"></i></a></li>
                </ul>
            </div>
        </div>

        <div  :class="`sidebar ${active}`">
            <ul>
                <li>
                    <a href="#" class="home" @click="makeActive('home')">
                        <span class="icon"><i class="fa fa-home"></i></span>
                        <span class="title">Coffee recipe</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="create" @click="makeActive('create')">
                        <span class="icon"><i class="fa fa-pencil-square-o"></i></span>
                        <span class="title">Create</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="main_container">
            <home v-if="active=='home'"/>
            <create v-else/>
        </div>
    </div>
</template>
<script>
    import home from './home'
    import create from './create'
    export default {
        components:{
            home,
            create
        },
        data() {
            return {
                active: "home"
            }
        },
        methods: {
            makeActive: function (item) {
                this.active = item;
            },
        },
    }

</script>
