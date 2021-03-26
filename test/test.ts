import make from '../make.ts';

make({
    test() {
        console.log('test')
    },
    build() {
        console.log('build')
    },
    main() {
        this.test()
        this.build()
        console.log('main')
    }
})
