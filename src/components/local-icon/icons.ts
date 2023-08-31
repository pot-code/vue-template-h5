// icons 是一个 Record 类型对象，对象的键值是通过 glob 引入的文件名，值是 VueElement 对象
const icons = import.meta.glob('../../assets/icons/*.svg', { eager: true })

export default icons
