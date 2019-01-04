import base from './base.module.css'
import custom from './custom.module.css'

console.log(base)
console.log(custom)
const styles = {...base, ...custom}
console.log(styles)

export default styles
