<template>
    <div class="item">
        <b-button v-b-modal.modal-1 variant="outline-success"><i class="fa fa-plus" aria-hidden="true"></i> Add
        </b-button>
        <div>
            <b-modal id="modal-1" size="lg" title="Create" centered no-close-on-backdrop>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Coffee name:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" v-model="title" size="sm" placeholder="Enter your name">
                        </b-form-input>
                    </b-col>
                </b-row>
                <label for="input-small">Imgage file:</label>
                <InputImg />
                <label for="input-small">Detail:</label>
                <div class="textEditor">
                    <textEditor />
                </div>
                <template v-slot:modal-footer>
                    <b-button class="float-right" variant="outline-secondary" @click="hideModal">Close</b-button>
                    <b-button class="float-right" variant="outline-primary" @click="postData()">Save</b-button>
                </template>
            </b-modal>
        </div>

        <b-table hover :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
    </div>
</template>

<script>
    import textEditor from './textEditor'
    import InputImg from './inputIMG'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        components: {
            textEditor,
            InputImg,
        },
        data() {
            return {
                perPage: 5,
                currentPage: 1,
                items: [{
                        age: 40,
                        first_name: 'Dickerson',
                        last_name: 'Macdonald'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                    {
                        age: 29,
                        first_name: 'Dick',
                        last_name: 'Dunlap'
                    },
                ],
                title: null,
                detail: null,
                file: null
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions('coffee',[
                'post', 'update', 'delete' ,'updateObj'
            ]),
            postData() {
                console.log('obj',this.getObj);
                // this.post().then((result) => {
                //     console.log(result);
                // }).catch((err) => {
                //     console.log(err);
                // });
            },
            hideModal() {
                this.$root.$emit('bv::hide::modal', 'modal-1')
            },
        },
        computed: {
            ...mapGetters('coffee',[
                'getObj',
            ]),
            rows() {
                return this.items.length
            }
        },
        watch: {
            title(val){
                this.updateObj({key:'title',data:val})
            }
        },
    }

</script>
<style>
    label {
        font-size: 15px;
    }
</style>
