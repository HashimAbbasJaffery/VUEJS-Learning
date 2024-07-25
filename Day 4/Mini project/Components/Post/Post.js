import ClickButton from "../utility/ClickButton.js"
export default {
    components: {ClickButton },
    template: `
        <div class="bg-white rounded mt-10 px-4 py-2">
            <h1 style="border-bottom: 1px solid black;" class="pb-2 text-xl font-bold">
                {{ post.title }}
                <span v-if="likeable"> - {{ post.likes }} Likes</span>

            </h1>
            <p class="mt-4">{{ post.description }}</p>
            <ClickButton @liked="like" :isVisible="likeable">Like</ClickButton>
            <div class="post-footer text-xs mt-3">
                <slot name="footer"></slot>
            </div>
        </div>
    `,
    props: {
        post: Object,
        likeable: true,
    },
    methods: {
        like() {
            this.post.likes += 1
        }
    }
}