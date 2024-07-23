import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <form @submit.prevent="add">
                <AssignmentList :assignments="filter.inProgress" title="In Progress"></AssignmentList>
                <AssignmentList :assignments="filter.complete" title="Completed"></AssignmentList>
                <input type="text" v-model="newAssignment" />
                <input type="submit" />
            </form>
        </section>
    `,

    data() {
        return {
            assignments: [
                { task: "Hashim", completed: false, id: 1 },
                { task: "Tanzeela", completed: false, id: 2 },
                { task: "Taskeen", completed: false, id: 3 },
            ],
            newAssignment: ''
        }
    },
    methods: {
        add(e) {
            this.assignments.push({
                task: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = "";
        }
    },
    computed: {

        filter() {
            return {
                complete: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed)
            }
        }
    }   
}