import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template: `
        <section id="completed" v-show="assignments.length">
            <p class="font-bold mb-3">{{ title }}</p>
            <ul>
                <Assignment v-for="assignment in assignments" :assignment="assignment" :key="assignment.id"></Assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}