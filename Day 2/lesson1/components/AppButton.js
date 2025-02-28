export default {
    template: `
        <button 
            :class="{ 
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'bg-blue-200 hover:bg-blue-400': type === 'primary',
                'bg-red-200 hover:bg-red-400': type === 'secondary',
                'spinner': processing
            }" 
        >
            <slot />
        </button>
    `,
    
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }
}