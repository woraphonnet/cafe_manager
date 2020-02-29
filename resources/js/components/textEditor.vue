<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">

                <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                    <i class="fa fa-bold" aria-hidden="true"></i>
                </button>

                <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                    <i class="fa fa-italic" aria-hidden="true"></i>
                </button>

                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })">
                    <b>H1</b>
                </button>

                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })">
                    <b>H2</b>
                </button>

                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })">
                    <b>H3</b>
                </button>
            </div>
        </editor-menu-bar>
        <editor-content class="editor__content" :editor="editor" />
    </div>
</template>

<script>
    import {
        Editor,
        EditorContent,
        EditorMenuBar
    } from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
        Placeholder,
    } from 'tiptap-extensions'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        components: {
            EditorContent,
            EditorMenuBar,
        },
        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({
                            levels: [1, 2, 3]
                        }),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Link(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Strike(),
                        new Underline(),
                        new History(),
                        new Placeholder({
                            emptyEditorClass: 'is-editor-empty',
                            emptyNodeClass: 'is-empty',
                            emptyNodeText: 'Write something about coffee …',
                            showOnlyWhenEditable: true,
                            showOnlyCurrent: true,
                        }),
                    ],
                    content: ``,
                    onUpdate: ({
                        getHTML
                    }) => {
                        this.text = getHTML()
                    },
                }),
                text: null
            }
        },
        mounted() {
            //    this.editor.setContent('<p>asdasdsad</p>')
        },
        methods: {
             ...mapActions('coffee',[
                'post','update','delete','updateObj'
            ]),
        },
        watch: {
            text(val) {
                this.updateObj({key:'detail',data:val})
            },
        },
        beforeDestroy() {
            this.editor.destroy()
        },
      
    }

</script>

<style>
    .menubar{
        margin: 6px;
    }
    .menubar__button {
        border: none;
        width: 29px;
        border-radius: 4px;
    }

    .is-active {
        background-color: black;
        color: #fff;
    }

    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }
    p{
        margin-bottom: 6px;
    }

</style>
