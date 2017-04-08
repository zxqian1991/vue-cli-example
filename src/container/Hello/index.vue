<template>
    <div class="mmm">
        <hello class="hello" :test="test | tt"></hello>
        <div>
            <div>
                <h1>aklsmlkdmlkm</h1>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .mmm {
        .hello {
            color: green!important;
        }
    }
</style>

<style lang="less">
    .mmm {
        .el-tree {}
    }
</style>

<script>
    import Hello from '@/components/Hello';
    export default {
        data: function() {
            return {
                test: "1991",
            }
        },
        // render (h) {
        //     return <div>asdsad</div>;
        // },
        directives: {
            dddd: {
                bind: function() {
    
                },
                inserted: function(el, binding, vnode, oldVnode) {
                    console.log(el, binding, vnode, oldVnode)
                },
                update: function() {
    
                },
                componentUpdated: function() {
    
                },
                unbind: function() {
    
                }
            }
        },
        components: {
            Hello
        },
        filters: {
            tt: function(value) {
                return `${value}莱卡棉索拉卡什么的乐客玛`;
            },
            pp: function(value) {
                console.log(value);
                return value;
            }
        },
        beforeCreate: function() {
            console.log("i am before created")
        },
        created: function() {
            console.log("i am created");
        },
        beforeMount: function() {
            console.log("i am before mount");
        },
        mounted: function() {
            console.log("mounted");
        },
        beforeUpdate: function() {
            console.log("before update");
        },
        updated: function() {
            console.log("updated");
        },
        beforeDestroy: function() {
            console.log("beforeDestroy");
        },
        destroyed: function() {
            console.log("destroyed");
        }
    
    }
</script>