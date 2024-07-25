import AssignmentList from "./AssignmentList.js";
import AssignmentForm from "./AssignmentForm.js";

export default {
    components: { AssignmentList, AssignmentForm },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filter.inProgress" title="In Progress"></AssignmentList>
            <AssignmentList :assignments="filter.complete" title="Completed"></AssignmentList>
            <assignment-form @add="add"></assignment-form>
        </section>
    `,
    computed: {
        filter() {
            return {
                complete: this.assignments?.filter(assignment => assignment.completed),
                inProgress: this.assignments?.filter(assignment => !assignment.completed)
            }
        }
    },
    data() {
        return {
            assignments: []
        }
    },
    created() {
        fetch("http://localhost:3001/assignments")
            .then(res => res.json())
            .then(data => {
                this.assignments = data;
            })
            .catch(err => {
                console.log(err)
            })
    },

    methods: {
        add(newAssignment) {
            this.assignments.push({
                task: newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}