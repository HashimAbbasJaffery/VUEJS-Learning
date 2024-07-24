export default {
    template: `
        <div class="tags flex">
            <p v-for="tag in tags" @click="this.$emit('changeTag', tag)" class="mr-2">{{ tag }}</p>
        </div>
    `,

    props: {
        assignments: Array
    },
    computed: {
        tags() {
            return ["all", ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}