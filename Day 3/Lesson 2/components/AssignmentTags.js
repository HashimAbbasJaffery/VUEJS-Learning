export default {
    template: `
        <div class="tags flex">
            <p v-for="tag in tags" @click="this.$emit('update:modelValue', tag)" class="mr-2" :class="{ 'border border-green-800': modelValue == tag }">{{ tag }}</p>
        </div>
    `,

    props: {
        assignments: Array,
        modelValue: String
    },
    computed: {
        tags() {
            return ["all", ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}