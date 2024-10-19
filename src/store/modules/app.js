import Cookies from 'js-cookie'

const useAppStore = defineStore(
    'app', {
    state: () => ({
        sidebar: {
            opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
            hide: false
        },
        // 使用detailShow为各页面查询下的详情面板隐藏功能服务
        detailShow: {
            status: true,
            label: '',
        },
    }),
    actions: {
        toggleSideBar() {
            if (this.sidebar.hide) {
                return false;
            }
            this.sidebar.opened = !this.sidebar.opened
            if (this.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
        },
        changeHideDetail(detailShow) {
            this.detailShow = detailShow;
        },
    },
}
)

export default useAppStore;