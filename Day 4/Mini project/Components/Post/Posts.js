import Post from "./Post.js"
import ClickButton from "../utility/ClickButton.js"
import Create from "./Create.js"
import Pagination from "../utility/Pagination.js"

export default {
    components: { Post, ClickButton, Create, Pagination },
    template: `
        <Create @create="addPost" :showForm="showForm" :previewPost="previewPost" @show="showForm = $event"></Create>
        <Post v-if="showForm" :post="previewPost" :likeable="true">
            <template v-slot:footer>
                {{ previewPost.footer_info }}
            </template>
        </Post>
        <Post v-for="post in posts" :post="post" :key="post.id" :likeable="post.likeable">
            <template v-slot:footer>
                {{ post.footer_info }}
            </template>
        </Post>
        <Pagination></Pagination>
    `,
    data() {
        return {
            showForm: false,
            previewPost: {
                "title": "",
                "description": "",
                "footer_info": "",
                "likes": 0,
                "likeable": true
            }
        }
    },
    props: {
        posts: Array
    },
    methods: {
        addPost() {
            this.posts.push(this.previewPost);
            this.previewPost = {
                "title": "",
                "desription": "",
                "footer_info": "",
                "likes": 0,
                "likeable": true
            }
            this.showForm = false;
        }
    }
}