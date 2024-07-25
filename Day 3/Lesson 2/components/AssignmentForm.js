
export default {
    template: `
        <form @submit.prevent="add">
            <input type="text" v-model="newAssignment" />
            <input type="submit" />
        </form>
    `,

    data(){
        return {
            newAssignment: ""
        }
    },
    methods: {
        add() {
            this.$emit("add", this.newAssignment);
            this.newAssignment = "";
        }
    }
}