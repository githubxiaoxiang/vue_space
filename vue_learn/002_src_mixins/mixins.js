export const m1 = {
    // 数据会和组件内的混入一起  同名优先使用组件内的
    data() {
        return {
            x: 10,
            y: 20
        }
    }
}

export const m2 = {
    methods: {
        showName() {
            console.log(this.name)
        }
    },
    mounted() {
        // 钩子函数会和组件内的一起执行
        console.log('hello')
    },
}