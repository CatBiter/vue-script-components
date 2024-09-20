const useAppStore = defineStore(
    'app', {
    state: () => ({
        // 使用detailShow为各页面查询下的详情面板隐藏功能服务
        detailShow: {
            status: true,
            label: '',
        },
    }),
    actions: {
        changeHideDetail(detailShow) {
            this.detailShow = detailShow
        },
    },
}
)

export default useAppStore;