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

    data() {
        return {
            assignments: [
                { task: "Differential Equation Homework", completed: false, id: 1, tag: 'mathematics' },
                { task: "FYP", completed: false, id: 2, tag: 'computer'  },
                { task: "Cloud Computing", completed: false, id: 3, tag: 'computer'  },
            ],
        }
    },
    methods: {
        add(newAssignment) {
            this.assignments.push({
                task: newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });
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