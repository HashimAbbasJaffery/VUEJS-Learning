import ClickButton from "../utility/ClickButton.js"
export default {
    components: { ClickButton },
    template: `
        <ClickButton v-if="!showForm" :isVisible="true" @click="showPostForm" :canDisable="false">Create Post</ClickButton>
        <form v-if="showForm" @submit.prevent="addPost">
            <input v-model="previewPost.title" type="text" class="w-full mt-3 px-2 h-8 rounded" placeholder="Heading..." /> <br>
            <textarea v-model="previewPost.description" class="w-full mt-3 px-2 rounded" style="height: 200px; resize: none" placeholder="description..."></textarea> <br>
            <input v-model="previewPost.footer_info" type="text" class="w-full mt-3 px-2 h-8 rounded" placeholder="Footer (Optional)" />
            <div class="flex space-x-2" v-if="showForm">
                <ClickButton type="cancel" :isVisible="true" :canDisable="false" @click="hidePostForm">Cancel</ClickButton>
                <ClickButton :isVisible="true" :canDisable="false">Submit</ClickButton>
            </div>
        </form>
    `,
    props: {
        previewPost: Object,
        showForm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        addPost() {
            this.$emit("create")
        },
        showPostForm() {
            this.$emit("show", true);
        },
        hidePostForm() {
            this.$emit("show", false);
        }
    }
}