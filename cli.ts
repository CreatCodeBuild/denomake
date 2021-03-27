import { cac } from 'https://unpkg.com/cac/mod.ts'

const cli = cac('my-program')

try {
    const mod = await import('./denomake.ts')
}   catch (e) {
    console.log(e)
}
