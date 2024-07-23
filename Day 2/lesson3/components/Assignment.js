export default {
    template: `
        <li>
            {{ assignment.task }} <input type="checkbox" v-model="assignment.completed">
        </li>
    `,

    props: {
        assignment: Object
    }
}