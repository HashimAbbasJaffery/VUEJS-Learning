import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <section id="completed" v-show="assignments.length">
            <p class="font-bold mb-3">{{ title }}</p>
            <assignment-tags
                v-model="currentTag"
                :assignments="assignments"
            >
            </assignment-tags>
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
        }
    }
}