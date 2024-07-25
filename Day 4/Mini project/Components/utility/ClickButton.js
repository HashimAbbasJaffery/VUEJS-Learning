export default {
    template: `
        <button 
            v-if="isVisible"
            @click="like"
            :disabled="isDisabled"
            class="disabled:bg-amber-300 disabled:cursor-not-allowed bg-amber-600 text-white w-full rounded mt-3 hover:bg-black transition"
        >
            <slot></slot>
        </button>
    `,

    data() {
        return {
            isDisabled: false,
        }
    },
    props: {
        isVisible: Boolean,
        canDisable: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        like() {
            this.$emit("liked");
            
            if(this.canDisable)
                this.isDisabled = true
        }
    },
}