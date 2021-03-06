# 项目说明

> 项目本身其实和VUE没有太大的关系，而是一种布局，利用这种布局能够更好的去理清楚业务逻辑并进行项目迭代。


`build、config`是`vue cli 自带的`目录，主要是构建项目相关的配置选项。`dist`是打包压缩后的选项。

在`src`目录下，一共建立了`assets/components/container/config/directives/models/pages/services/utils`几个目录。


## pages
存放业务逻辑

## services 
存放服务

## utils

公共工具

## assets

静态资源文件，包括图片、css等

## components  /   container

`components`组件，这些是被抽象出来的可以复用的组件，总的来讲，这些组件和业务无关，可以做到极好的扩展。

`container`则是另一个角度的组件，如果做一个比喻的话，    `container`相当于有了灵魂的动物，它不仅仅是组件，而是能够实实在在的在业务中使用的，并能够直接和自身的服务相关连。

## config

顾名思义，`config`表示的是配置，配置主要是对系统的一些配置，这些配置包括对一些功能的开启与关闭，包括一些常用变量的定义，以及路由等，这些配置都是和业务相关的。

## directives 指令 同 components

## models

`model`是一个数据中心，它就单纯的是数据，但，又不完全是数据，它是数据流，你可以在任何地方使用它，同时，当它发生了变化，你又能够随时的去获知变化的情况。也就是说，对于一个数据，他已经不仅仅是一个数据，而是一个数据、事件的集合。

这么做的好处是，我能够清晰的知道自己的整体的数据的流向，也能够清晰的知道数据与数据之间的关联，数据和业务分离，也能够便于离线操作。

**我可以知道:**

谁，在什么时候，因为什么调用了这个数据，也就是说，对于一个数据，我有清晰的数据流程，这个流程不仅仅是一个subscribe,他还包含了整个的过程，这些数据，这些信息都属于这个流，在这个流下面，我可以做很多的事情。

1. 数据的更新状态。 什么时候，被谁，因为什么，更新了什么。
2. 数据的订阅状态。 什么时候，因为什么，被谁订阅，订阅了多少次了？订阅后做了什么处理？
3. 数据的使用状态。 谁，在哪里使用了这个数据
4. 数据的关联状态。 谁，和数据相关。一个数据可能经过各种各样的处理，在这些处理之后会以不同的状态呈现 它是一个链式的

为什么这么做？有什么必要性？这么做是有必要的，在将来，不，即使是现在，一个网页已经远远不只是一个网页了，他可以定义很多的东西，有时，你可能会感觉不到它和一个操作系统之间的区别。

系统是个大应用，可能还有不同的小应用，不同的应用拥有不同的数据。调用不同的应用的数据都将会有统一的接口，在将来。
接口都会是统一的，不同的只是界面的展示。

*数据的这些状态保存在哪里？*

状态的保存是一个很大的问题，对于前端来讲，这个可能根本不是问题，但是，随着应用的复杂化，数据的多元化，如果都占用着内存，势必会对性能造成
很大的影响，因此，需要将这些状态都存放于前台数据库，然而，对内，这些数据都是不可见的，对外直接提供统一的接口。