import make from '../make.ts';

const p = Deno.run({
    cmd:  ["cmd", "/c", "dir"],
    stdout: "piped"
});
console.log(new TextDecoder().decode(await p.output()))

make({
    async test() {

        console.log('test')
    },
    async build() {
        console.log('build')
    },
    b: 'build',
    t: 'test',
    main: ['t', 'b', () => {
        console.log("running main")
    }]
})
