import Layout from "./Layout/Layout.js"
import Posts from "./Post/Posts.js"

export default {
    components: { Layout, Posts },
    data() {
        return {
            posts: []
        }
    },
    created() {
        fetch("http://localhost:3001/posts")
            .then(res => res.json())
            .then(data => {
                this.posts = data
            });
    },
    template:  `
        <layout>
            <Posts :posts="posts"></Posts>
        </layout>
    `
}