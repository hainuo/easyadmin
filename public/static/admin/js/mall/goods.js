define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.goods/index',
        add_url: 'mall.goods/add',
        edit_url: 'mall.goods/edit',
        del_url: 'mall.goods/del',
        export_url: 'mall.goods/export',
        modify_url: 'mall.goods/modify',
        stock_url: 'mall.goods/stock',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                modifyReload: true,
                toolbar: ['refresh',
                    [{
                        text: ' 添加',
                        open: init.add_url,
                        class: 'layui-btn layui-btn-normal layui-btn-sm',
                        icon: 'fa fa-plus ',
                        title: '确定更新新节点？',
                        auth: 'add',
                        extend: ' data-full="true"',
                    }],
                    'delete', 'export'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID', sort: true, align: "center"},
                    {field: 'sort', width: 80, title: '排序', edit: 'text', sort: true, align: "center"},
                    {field: 'cate.title', minWidth: 80, title: '商品分类', align: "center"},
                    {field: 'title', minWidth: 80, title: '商品名称', align: "center"},
                    {field: 'logo', minWidth: 80, title: '分类图片', search: false, imageHeight: 40, align: "center", templet: ea.table.image},
                    {field: 'market_price', width: 100, title: '市场价', align: "center", templet: ea.table.price},
                    {field: 'discount_price', width: 100, title: '折扣价', align: "center", templet: ea.table.price},
                    {field: 'total_stock', width: 100, title: '库存统计', align: "center"},
                    {field: 'stock', width: 100, title: '剩余库存', align: "center"},
                    {field: 'virtual_sales', width: 100, title: '虚拟销量', align: "center"},
                    {field: 'sales', width: 80, title: '销量', align: "center"},
                    {field: 'status', title: '状态', width: 85, align: "center", search: 'select', selectList: {0: '禁用', 1: '启用'}, filter: 'status', templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', align: "center", search: 'range'},
                    {
                        width: 250,
                        align: 'center',
                        title: '操作',
                        templet: ea.table.tool,
                        operat: [
                            [{
                                class: 'layui-btn layui-btn-xs layui-btn-success',
                                method: 'open',
                                text: '编辑',
                                auth: 'edit',
                                url: init.edit_url,
                                extend: 'data-full="true"',
                            }, {
                                class: 'layui-btn layui-btn-xs layui-btn-normal',
                                method: 'open',
                                text: '入库',
                                auth: 'stock',
                                url: init.stock_url,
                                extend: '',
                            }],
                            'delete']
                    }
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
        stock: function () {
            ea.listen();
        },
    };
    return Controller;
});