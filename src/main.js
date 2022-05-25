let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*你好，我是一名前端菜鸟
* 接下来我要加样式了
* 我要加的样式是*/
body{
    font-size:20px;
}
/* 你好，我叫小白
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我要把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加阴和阳，叫做阴中有阳，阳中有阴*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
`

// string = string.replace(/\n/g, '<br>') // 把字符串的东西变成另外一个东西 /\n/g 所有的空格
let string2 = ''
let n = 0

// string[n] 显示第几个字

let step = () => {
    // console.log('1秒后把n加1并显示');
    setTimeout(() => {
        // console.log(n);
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else { // 如果不是回车就照搬
            string2 += string[n]
        }
        // demo.innerHTML = string.substring(0, n);
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            // 不是最后一个继续运行函数
            n += 1
            step()
        } else {} // 是最后一个就什么都不做
        //如果不知道该是n还是n+1 就都试试
    }, 50)

}

step();
// setTimeout(() => {
//     style.innerHTML = `
//     body{
//         color:red
//     }
//     `
// }, 3000)