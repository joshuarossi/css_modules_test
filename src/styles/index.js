import base from './base.module.css';
import custom from './custom.module.css';

const styles = { ...base, ...custom };
console.log(styles);

export default styles;
