import { h, render } from 'vue'

import Menus from './Menus.vue'

export function openContextMenus (targetDom, operationList) {

    let isShow = false          // 显示与否
    let scope = null            // 要获取页面根部的位置标识
    let contaninerEl = null     // 存放目标元素组件的容器

    // 打开菜单 (传参：e(鼠标事件))
    const openMenu = (e) => {
        scope = document.getElementById("RootElementTarget")        // 获取页面根部的位置标识，对于的位置要设置position: relative;方便定位
        contaninerEl = document.createElement("div")        // 创建容器存放目标元素
        const vnode = h(Menus, {operationList})                              // h=>hyperscript，用于生成虚拟dom
        render(vnode, contaninerEl)                         // render渲染函数，参数：要渲染的虚拟dom，要渲染的位置

        contaninerEl.style.position = "absolute"            // 设置样式全局以及浮在最顶层
        contaninerEl.style.zIndex = "9999"

        scope?.appendChild(contaninerEl)                    // `?.`可选操作符，如果scope不为null和undefined就调用它的appendChild方法，如果scope是空也不会抛出异常

        // 设置鼠标位置
        const { offsetWidth } = contaninerEl                // 菜单容器的宽度
        const { clientWidth } = scope                       // 获取屏幕宽度
        const { clientX, clientY } = e                      // 鼠标距离屏幕左边和顶部的距离

        // 避免右键时打开的菜单溢出屏幕右侧边界
        const _X = clientWidth - clientX > offsetWidth ?"left":"right"    //调整方向
        const _X_offset = clientWidth - clientX                           //如果是需要显示在左边，则需要获取当前的差值

        // 设置菜单元素的绝对定位
        contaninerEl.style.top=`${clientY}px`
        contaninerEl.style[_X] = _X === "left" ? `${clientX}px` : `${_X_offset}px`
        isShow = true
    }

    // 关闭菜单
    const closeMenu = () => {
        if(isShow){
            render(null, contaninerEl)                      // 加不加都可以，但是防止一些意外的情况发生
            scope?.removeChild(contaninerEl)                // 移除菜单dom
            isShow = false
        }
    }

    // 重写右键事件
    window.oncontextmenu = (e) => {
        // 判断目标dom元素存在且右键点击的元素在目标元素的子孙级目录下
        if(targetDom && targetDom.contains(e.target)){
            e.preventDefault();             // 阻止默认鼠标右键发生
            if(isShow){                     // 若已经右键展开菜单栏了，则关闭上一个菜单，并且重新生成一个新菜单
                closeMenu();
                setTimeout(() => {
                    openMenu(e)
                }, 50);
            }else{
                openMenu(e)
            }
        }else{
            closeMenu()
        }
    }

    // 如果点击了左键就关闭菜单
    window.addEventListener('click', (e) => {
        if(isShow){
            closeMenu()
        }
    })

    return {
        isShow, 
        openMenu, 
        closeMenu, 
    }
}