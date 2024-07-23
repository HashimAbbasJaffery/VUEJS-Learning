import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template: `
        <section id="completed" v-show="assignments.length">
            <p class="font-bold mb-3">{{ title }}</p>
            <div class="tags flex">
                <p v-for="tag in tags" class="mr-2" @click="currentTag = tag">{{ tag }}</p>
            </div>
            <ul>
                <Assignment v-for="assignment in filter" :assignment="assignment" :key="assignment.id"></Assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: "all"
        }
    },
    props: {
        assignments: Array,
        title: String
    },
    computed: {
        filter() {
            if(this.currentTag === "all") return this.assignments;
            return this.assignments.filter(a => this.currentTag === a.tag);
        },
        tags() {
            return ["all", ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}