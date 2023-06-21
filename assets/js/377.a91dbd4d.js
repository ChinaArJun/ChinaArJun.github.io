(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{956:function(n,t,e){"use strict";e.r(t);var r=e(44),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("在 schedule 函数中，我们简单提过找一个 runnable goroutine 的过程，这一讲我们来详细分析源码。")]),n._v(" "),e("p",[n._v("工作线程 M 费尽心机也要找到一个可运行的 goroutine，这是它的工作和职责，不达目的，绝不罢体，这种锲而不舍的精神值得每个人学习。")]),n._v(" "),e("p",[n._v("共经历三个过程：先从本地队列找，定期会从全局队列找，最后实在没办法，就去别的 P 偷。如下图所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/63647181-f21f6b80-c74f-11e9-9c67-4267e8fb5c87.png",alt:"M 找工作的过程"}})]),n._v(" "),e("p",[n._v("先看第一个：从 P 本地队列找。源码如下：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 从本地可运行队列里找到一个 g\n// 如果 inheritTime 为真，gp 应该继承这个时间片，否则，新开启一个时间片\nfunc runqget(_p_ *p) (gp *g, inheritTime bool) {\n\t// If there's a runnext, it's the next G to run.\n\t// 如果 runnext 不为空，则 runnext 是下一个待运行的 G\n\tfor {\n\t\tnext := _p_.runnext\n\t\tif next == 0 {\n\t\t\t// 为空，则直接跳出循环\n\t\t\tbreak\n\t\t}\n\t\t// 再次比较 next 是否没有变化\n\t\tif _p_.runnext.cas(next, 0) {\n\t\t\t// 如果没有变化，则返回 next 所指向的 g。且需要继承时间片\n\t\t\treturn next.ptr(), true\n\t\t}\n\t}\n\n\tfor {\n\t\t// 获取队列头\n\t\th := atomic.Load(&_p_.runqhead) // load-acquire, synchronize with other consumers\n\t\t// 获取队列尾\n\t\tt := _p_.runqtail\n\t\tif t == h {\n\t\t\t// 头和尾相等，说明本地队列为空，找不到 g\n\t\t\treturn nil, false\n\t\t}\n\t\t// 获取队列头的 g\n\t\tgp := _p_.runq[h%uint32(len(_p_.runq))].ptr()\n\t\t// 原子操作，防止这中间被其他线程因为偷工作而修改\n\t\tif atomic.Cas(&_p_.runqhead, h, h+1) { // cas-release, commits consume\n\t\t\treturn gp, false\n\t\t}\n\t}\n}\n")])])]),e("p",[n._v("整个源码结构比较简单，主要是两个 for 循环。")]),n._v(" "),e("p",[n._v("第一个 for 循环尝试返回 P 的 runnext 成员，因为 runnext 具有最高的运行优先级，因此要首先尝试获取 runnext。当发现 runnext 为空时，直接跳出循环，进入第二个。否则，用原子操作获取 runnext，并将其值修改为 0，也就是空。这里用到原子操作的原因是防止在这个过程中，有其他线程过来“偷工作”，导致并发修改 runnext 成员。")]),n._v(" "),e("p",[n._v("第二个 for 循环则是在尝试获取 runnext 成员失败后，尝试从本地队列中返回队列头的 goroutine。同样，先用原子操作获取队列头，使用原子操作的原因同样是防止其他线程“偷工作”时并发对队列头的并发写操作。之后，直接获取队列尾，因为不担心其他线程同时更改，所以直接获取。注意，“偷工作”时只会修改队列头。")]),n._v(" "),e("p",[n._v("比较队列头和队列尾，如果两者相等，说明 P 本地队列没有可运行的 goroutine，直接返回空。否则，算出队列头指向的 goroutine，再用一个 CAS 原子操作来尝试修改队列头，使用原子操作的原因同上。")]),n._v(" "),e("p",[n._v("从本地队列获取可运行 goroutine 的过程比较简单，我们再来看从全局队列获取 goroutine 的过程。在 schedule 函数中调用 "),e("code",[n._v("globrunqget")]),n._v(" 的代码：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 为了公平，每调用 schedule 函数 61 次就要从全局可运行 goroutine 队列中获取\nif _g_.m.p.ptr().schedtick%61 == 0 && sched.runqsize > 0 {\n\tlock(&sched.lock)\n\t// 从全局队列最大获取 1 个 gorutine\n\tgp = globrunqget(_g_.m.p.ptr(), 1)\n\tunlock(&sched.lock)\n}\n")])])]),e("p",[n._v("这说明，并不是每次调度都会从全局队列获取可运行的 goroutine。实际情況是调度器每调度 61 次并且全局队列有可运行 goroutine 的情况下才会调用 "),e("code",[n._v("globrunqget")]),n._v(" 函数尝试从全局获取可运行 goroutine。毕竟，从全局获取需要上锁，这个开销可就大了，能不做就不做。")]),n._v(" "),e("p",[n._v("我们来详细看下 "),e("code",[n._v("globrunqget")]),n._v(" 的源码：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 尝试从全局队列里获取可运行的 goroutine 队列\nfunc globrunqget(_p_ *p, max int32) *g {\n\t// 如果队列大小为 0\n\tif sched.runqsize == 0 {\n\t\treturn nil\n\t}\n\n\t// 根据 p 的数量平分全局运行队列中的 goroutines\n\tn := sched.runqsize/gomaxprocs + 1\n\tif n > sched.runqsize {\n\t\tn = sched.runqsize // 如果 gomaxprocs 为 1\n\t}\n\n\t// 修正"偷"的数量\n\tif max > 0 && n > max {\n\t\tn = max\n\t}\n\t// 最多只能"偷"本地工作队列一半的数量\n\tif n > int32(len(_p_.runq))/2 {\n\t\tn = int32(len(_p_.runq)) / 2\n\t}\n\n\t// 更新全局可运行队列长度\n\tsched.runqsize -= n\n\t// 如果都要被"偷"走，修改队列尾\n\tif sched.runqsize == 0 {\n\t\tsched.runqtail = 0\n\t}\n\n\t// 获取队列头指向的 goroutine\n\tgp := sched.runqhead.ptr()\n\t// 移动队列头\n\tsched.runqhead = gp.schedlink\n\tn--\n\tfor ; n > 0; n-- {\n\t\t// 获取当前队列头\n\t\tgp1 := sched.runqhead.ptr()\n\t\t// 移动队列头\n\t\tsched.runqhead = gp1.schedlink\n\t\t// 尝试将 gp1 放入 P 本地，使全局队列得到更多的执行机会\n\t\trunqput(_p_, gp1, false)\n\t}\n\t// 返回最开始获取到的队列头所指向的 goroutine\n\treturn gp\n}\n')])])]),e("p",[n._v("代码比较简单。首先根据全局队列的可运行 goroutine 长度和 P 的总数，来计算一个数值，表示每个 P 可平均分到的 goroutine 数量。")]),n._v(" "),e("p",[n._v("然后根据函数参数中的 max 以及 P 本地队列的长度来决定把多少全局队列中的 goroutine 转移到 P 本地。")]),n._v(" "),e("p",[n._v("最后，for 循环挨个把全局队列中 n-1 个 goroutine 转移到本地，并且返回最开始获取到的队列头所指向的 goroutine，毕竟它最需要得到运行的机会。")]),n._v(" "),e("p",[n._v("把全局队列中的可运行 goroutine 转移到本地队列，给了全局队列中可运行 goroutine 运行的机会，不然全局队列中的 goroutine 一直得不到运行。")]),n._v(" "),e("p",[n._v("最后，我们继续看第三个过程，从其他 P “偷工作”：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 从本地运行队列和全局运行队列都没有找到需要运行的 goroutine，\n// 调用 findrunnable 函数从其它工作线程的运行队列中偷取，如果偷不到，则当前工作线程进入睡眠\n// 直到获取到 runnable goroutine 之后 findrunnable 函数才会返回。\nif gp == nil {\n\tgp, inheritTime = findrunnable() // blocks until work is available\n}\n")])])]),e("p",[n._v("这是整个找工作过程最复杂的部分：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 从其他地方找 goroutine 来执行\nfunc findrunnable() (gp *g, inheritTime bool) {\n    _g_ := getg()\n\ntop:\n    _p_ := _g_.m.p.ptr()\n\n    // ……………………\n\n    // local runq\n    // 从本地队列获取\n    if gp, inheritTime := runqget(_p_); gp != nil {\n        return gp, inheritTime\n    }\n\n    // global runq\n    // 从全局队列获取\n    if sched.runqsize != 0 {\n        lock(&sched.lock)\n        gp := globrunqget(_p_, 0)\n        unlock(&sched.lock)\n        if gp != nil {\n            return gp, false\n        }\n    }\n\n    // ……………………\n\n    // Steal work from other P\'s.\n\n    // 如果其他的 P 都处于空闲状态，那肯定没有其他工作要做\n    procs := uint32(gomaxprocs)\n    if atomic.Load(&sched.npidle) == procs-1 {\n        goto stop\n    }\n\n    // 如果有很多工作线程在找工作，那我就停下休息。避免消耗太多 CPU\n    if !_g_.m.spinning && 2*atomic.Load(&sched.nmspinning) >= procs-atomic.Load(&sched.npidle) {\n        goto stop\n    }\n\n    if !_g_.m.spinning {\n        // 设置自旋状态为 true\n        _g_.m.spinning = true\n        // 自旋状态数加 1\n        atomic.Xadd(&sched.nmspinning, 1)\n    }\n    // 从其它 p 的本地运行队列盗取 goroutine\n    for i := 0; i < 4; i++ {\n        for enum := stealOrder.start(fastrand()); !enum.done(); enum.next() {\n            // ……………………\n            stealRunNextG := i > 2 // first look for ready queues with more than 1 g\n            if gp := runqsteal(_p_, allp[enum.position()], stealRunNextG); gp != nil {\n                return gp, false\n            }\n        }\n    }\n\nstop:\n\n    // ……………………\n\n    // return P and block\n    lock(&sched.lock)\n    if sched.gcwaiting != 0 || _p_.runSafePointFn != 0 {\n        unlock(&sched.lock)\n        goto top\n    }\n    if sched.runqsize != 0 {\n        gp := globrunqget(_p_, 0)\n        unlock(&sched.lock)\n        return gp, false\n    }\n    // 当前工作线程解除与 p 之间的绑定，准备去休眠\n    if releasep() != _p_ {\n        throw("findrunnable: wrong p")\n    }\n    // 把 p 放入空闲队列\n    pidleput(_p_)\n    unlock(&sched.lock)\n\n    wasSpinning := _g_.m.spinning\n    if _g_.m.spinning {\n        // m 即将睡眠，不再处于自旋\n        _g_.m.spinning = false\n        if int32(atomic.Xadd(&sched.nmspinning, -1)) < 0 {\n            throw("findrunnable: negative nmspinning")\n        }\n    }\n\n    // check all runqueues once again\n    // 休眠之前再检查一下所有的 p，看一下是否有工作要做\n    for i := 0; i < int(gomaxprocs); i++ {\n        _p_ := allp[i]\n        if _p_ != nil && !runqempty(_p_) {\n            lock(&sched.lock)\n            _p_ = pidleget()\n            unlock(&sched.lock)\n            if _p_ != nil {\n                acquirep(_p_)\n                if wasSpinning {\n                    _g_.m.spinning = true\n                    atomic.Xadd(&sched.nmspinning, 1)\n                }\n                goto top\n            }\n            break\n        }\n    }\n\n    // ……………………\n\n    // 休眠\n    stopm()\n    goto top\n}\n')])])]),e("p",[n._v("这部分也是最能说明 M 找工作的锲而不舍精神：尽力去各个运行队列中寻找 goroutine，如果实在找不到则进入睡眠状态，等待有工作时，被其他 M 唤醒。")]),n._v(" "),e("p",[n._v("先获取当前指向的 g，也就是 g0，然后拿到其绑定的 p，即 "),e("code",[n._v("_p_")]),n._v("。")]),n._v(" "),e("p",[n._v("首先再次尝试从 "),e("code",[n._v("_p_")]),n._v(" 本地队列获取 goroutine，如果没有获取到，则尝试从全局队列获取。如果还没有获取到就会尝试去“偷”了，这也是没有办法的事。")]),n._v(" "),e("p",[n._v("不过，在偷之前，先看大的局势。如果其他所有的 P 都处于空闲状态，就说明其他 P 肯定没有工作可做，就没必要再去偷了，毕竟“地主家也没有余粮了”，跳到 stop 部分。接着再看下当前正在“偷工作”的线程数量“太多了”，就没必要扎堆了，这么多人，竞争肯定大，工作肯定不好找，也不好偷。")]),n._v(" "),e("p",[n._v("在真正的“偷”工作之前，把自己的自旋状态设置为 true，全局自旋数量加 1。")]),n._v(" "),e("p",[n._v("终于到了“偷工作”的部分了，好紧张！整个过程由两层 for 循环组成，外层控制尝试偷的次数，内层控制“偷”的顺序，并真正的去“偷”。实际上，内层会遍历所有的 P，因此，整体看来，会尝试 4 次扫遍所有的 P，并去“偷工作”，是不是非常有毅力！")]),n._v(" "),e("p",[n._v("第二层的循环并不是每次都按一个固定的顺序去遍历所有的 P，这样不太科学，而是使用了一些方法，“随机”地遍历。具体是使用了下面这个变量：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var stealOrder randomOrder\n\ntype randomOrder struct {\n\tcount    uint32\n\tcoprimes []uint32\n}\n")])])]),e("p",[n._v("初始化的时候会给 count 赋一个值，例如 8，根据 count 计算出 coprimes，里面的元素是小于 count 的值，且和 8 互质，算出来是：[1, 3, 5, 7]。")]),n._v(" "),e("p",[n._v("第二层循环，开始随机给一个值，例如 2，则第一个访问的 P 就是 P2；从 coprimes 里取出索引为 2 的值为 5，那么，第二个访问的 P 索引就是 2+5=7；依此类推，第三个就是 7+5=12，和 count 做一个取余操作，即 12%8=4……")]),n._v(" "),e("p",[n._v("在最后一次遍历所有的 P 的过程中，连人家的 runnext 也要尝试偷过来，毕竟前三次的失败经验证明，工作太不好“偷”了，民不聊生啊，只能做得绝一点了，"),e("code",[n._v("stealRunNextG")]),n._v(" 控制是否要打 runnext 的主意：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("stealRunNextG := i > 2\n")])])]),e("p",[n._v("确定好准备偷的对象 "),e("code",[n._v("allp[enum.position()")]),n._v(" 之后，调用 "),e("code",[n._v("runqsteal(_p_, allp[enum.position()], stealRunNextG)")]),n._v(" 函数执行。")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 从 p2 偷走一半的工作放到 _p_ 的本地\nfunc runqsteal(_p_, p2 *p, stealRunNextG bool) *g {\n    // 队尾\n    t := _p_.runqtail\n    // 从 p2 偷取工作，放到 _p_.runq 的队尾\n    n := runqgrab(p2, &_p_.runq, t, stealRunNextG)\n    if n == 0 {\n        return nil\n    }\n    n--\n    // 找到最后一个 g，准备返回\n    gp := _p_.runq[(t+n)%uint32(len(_p_.runq))].ptr()\n    if n == 0 {\n        // 说明只偷了一个 g\n        return gp\n    }\n    // 队列头\n    h := atomic.Load(&_p_.runqhead) // load-acquire, synchronize with consumers\n    // 判断是否偷太多了\n    if t-h+n >= uint32(len(_p_.runq)) {\n        throw("runqsteal: runq overflow")\n    }\n    // 更新队尾，将偷来的工作加入队列\n    atomic.Store(&_p_.runqtail, t+n) // store-release, makes the item available for consumption\n    return gp\n}\n')])])]),e("p",[n._v("调用 "),e("code",[n._v("runqgrab")]),n._v(" 从 p2 偷走它一半的工作放到 "),e("code",[n._v("_p_")]),n._v(" 本地：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("n := runqgrab(p2, &_p_.runq, t, stealRunNextG)\n")])])]),e("p",[e("code",[n._v("runqgrab")]),n._v(" 函数将从 p2 偷来的工作放到以 t 为地址的数组里，数组就是 "),e("code",[n._v("_p_.runq")]),n._v("。 我们知道，"),e("code",[n._v("t")]),n._v(" 是 "),e("code",[n._v("_p_.runq")]),n._v(" 的队尾，因此这行代码表达的真正意思是将从 p2 偷来的工作，神不知，鬼不觉地放到 "),e("code",[n._v("_p_.runq")]),n._v(" 的队尾，之后，再悄悄改一下 ``"),e("em",[n._v("p")]),n._v(".runqtail` 就把这些偷来的工作据为己有了。")]),n._v(" "),e("p",[n._v("接着往下看，返回的 n 表示偷到的工作数量。先将 n 自减 1，目的是把第 n 个工作（也就是 g）直接返回，如果这时候 n 变成 0 了，说明就只偷到了一个 g，那就直接返回。否则，将队尾往后移动 n，把偷来的工作合法化，简直完美！")]),n._v(" "),e("p",[n._v("我们接着往下看 "),e("code",[n._v("runqgrab")]),n._v(" 函数的实现：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 从 _p_ 批量获取可运行 goroutine，放到 batch 数组里\n// batch 是一个环，起始于 batchHead\n// 返回偷的数量，返回的 goroutine 可被任何 P 执行\nfunc runqgrab(_p_ *p, batch *[256]guintptr, batchHead uint32, stealRunNextG bool) uint32 {\n    for {\n        // 队列头\n        h := atomic.Load(&_p_.runqhead) // load-acquire, synchronize with other consumers\n        // 队列尾\n        t := atomic.Load(&_p_.runqtail) // load-acquire, synchronize with the producer\n        // g 的数量\n        n := t - h\n        // 取一半\n        n = n - n/2\n        if n == 0 {\n            if stealRunNextG {\n                // 连 runnext 都要偷，没有人性\n                // Try to steal from _p_.runnext.\n                if next := _p_.runnext; next != 0 {\n                    // 这里是为了防止 _p_ 执行当前 g，并且马上就要阻塞，所以会马上执行 runnext，\n                    // 这个时候偷就没必要了，因为让 g 在 P 之间"游走"不太划算，\n                    // 就不偷了，给他们一个机会。\n                    // channel 一次同步的的接收发送需要 50ns 左右，因此 3us 差不多给了他们 50 次机会了，做得还是不错的\n                    if GOOS != "windows" {\n                        usleep(3)\n                    } else {\n                        osyield()\n                    }\n                    if !_p_.runnext.cas(next, 0) {\n                        continue\n                    }\n                    // 真的偷走了 next\n                    batch[batchHead%uint32(len(batch))] = next\n                    // 返回偷的数量，只有 1 个\n                    return 1\n                }\n            }\n            // 没偷到\n            return 0\n        }\n        // 如果 n 这时变得太大了，重新来一遍了，不能偷的太多，做得太过分了\n        if n > uint32(len(_p_.runq)/2) { // read inconsistent h and t\n            continue\n        }\n        // 将 g 放置到 bacth 中\n        for i := uint32(0); i < n; i++ {\n            g := _p_.runq[(h+i)%uint32(len(_p_.runq))]\n            batch[(batchHead+i)%uint32(len(batch))] = g\n        }\n        // 工作被偷走了，更新一下队列头指针\n        if atomic.Cas(&_p_.runqhead, h, h+n) { // cas-release, commits consume\n            return n\n        }\n    }\n}\n')])])]),e("p",[n._v("外层直接就是一个无限循环，先用原子操作取出 p 的队列头和队列尾，算出一半的 g 的数量，如果 n == 0，说明地主家也没有余粮，这时看 "),e("code",[n._v("stealRunNextG")]),n._v(" 的值。如果为假，说明不偷 runnext，那就直接返回 0，啥也没偷到；如果为真，则要尝试偷一下 runnext。")]),n._v(" "),e("p",[n._v('先判断 runnext 不为空，那就真的准备偷了。不过在这之前，要先休眠 3 us。这是为了防止 p 正在执行当前的 g，马上就要阻塞（可能是向一个非缓冲的 channel 发送数据，没有接收者），之后会马上执行 runnext。这个时候偷就没必要了，因为 runnext 马上就要执行了，偷走它还不是要去执行，那何必要偷呢？大家的愿望就是提高效率，这样让 g 在 P 之间"游走"不太划算，索性先不偷了，给他们一个机会。'),e("code",[n._v("channel")]),n._v(" 一次同步的的接收或发送需要 50ns 左右，因此休眠 3us 差不多给了他们 50 次机会了，做得还是挺厚道的。")]),n._v(" "),e("p",[n._v("继续看，再次判断 n 是否小于等于 p.runq 长度的一半，因为这个时候很可能 p 也被其他线程偷了，它的 p.runq 就没那么多工作了，这个时候就不能偷这么多了，要重新再走一次循环。")]),n._v(" "),e("p",[n._v("最后一个 for 循环，将 p.runq 里的 g 放到 batch 数组里。使用原子操作更新 p 的队列头指针，往后移动 n 个位置，这些都是被偷走的，伤心！")]),n._v(" "),e("p",[n._v("回到 "),e("code",[n._v("findrunnable")]),n._v(" 函数，经过上述三个层面的“偷窃”过程，我们仍然没有找到工作，真惨！于是就走到了 "),e("code",[n._v("stop")]),n._v(" 这个代码块。")]),n._v(" "),e("p",[n._v("先上锁，因为要将 P 放到全局空闲 P 链表里去。在这之前还不死心，再瞧一下全局队列里是否有工作，如果有，再去尝试偷全局。")]),n._v(" "),e("p",[n._v("如果没有，就先解除当前工作线程和当前 P 的绑定关系：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 解除 p 与 m 的关联\nfunc releasep() *p {\n\t_g_ := getg()\n\n\t// ……………………\n\n\t_p_ := _g_.m.p.ptr()\n\t\n\t// ……………………\n\n\t// 清空一些字段\n\t_g_.m.p = 0\n\t_g_.m.mcache = nil\n\t_p_.m = 0\n\t_p_.status = _Pidle\n\treturn _p_\n}\n")])])]),e("p",[n._v("主要的工作就是将 p 的 m 字段清空，并将 p 的状态修改为 "),e("code",[n._v("_Pidle")]),n._v("。")]),n._v(" "),e("p",[n._v("这之后，将其放入全局空闲 P 列表：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 将 p 放到 _Pidle 列表里\n//go:nowritebarrierrec\nfunc pidleput(_p_ *p) {\n\tif !runqempty(_p_) {\n\t\tthrow("pidleput: P has non-empty run queue")\n\t}\n\t_p_.link = sched.pidle\n\tsched.pidle.set(_p_)\n\t// 增加全局空闲 P 的数量\n\tatomic.Xadd(&sched.npidle, 1) // TODO: fast atomic\n}\n')])])]),e("p",[n._v("构造链表的过程其实比较简单，先将 p.link 指向原来的 sched.pidle 所指向的 p，也就是原空闲链表的最后一个 P，最后，再更新 sched.pidle，使其指向当前 p，这样，新的链表就构造完成。")]),n._v(" "),e("p",[n._v("接下来就要真正地准备休眠了，但是仍然不死心！还要再查看一次所有的 P 是否有工作，如果发现任何一个 P 有工作的话（判断 P 的本地队列不空），就先从全局空闲 P 链表里先拿到一个 P：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 试图从 _Pidle 列表里获取 p\n//go:nowritebarrierrec\nfunc pidleget() *p {\n\t_p_ := sched.pidle.ptr()\n\tif _p_ != nil {\n\t\tsched.pidle = _p_.link\n\t\tatomic.Xadd(&sched.npidle, -1) // TODO: fast atomic\n\t}\n\treturn _p_\n}\n")])])]),e("p",[n._v("比较简单，获取链表最后一个，再更新 sched.pidle，使其指向前一个 P。调用 "),e("code",[n._v("acquirep(_p_)")]),n._v(" 绑定获取到的 p 和 m，主要的动作就是设置 p 的 m 字段，更改 p 的工作状态为 "),e("code",[n._v("_Prunning")]),n._v("，并且设置 m 的 p 字段。做完这些之后，再次进入 top 代码段，再走一遍之前找工作的过程。")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 休眠，停止执行工作，直到有新的工作需要做为止\nfunc stopm() {\n\t// 当前 goroutine，g0\n\t_g_ := getg()\n\n\t// ……………………\nretry:\n\tlock(&sched.lock)\n\t// 将 m 放到全局空闲链表里去\n\tmput(_g_.m)\n\tunlock(&sched.lock)\n\t// 进入睡眠状态\n\tnotesleep(&_g_.m.park)\n\t// 这里被其他工作线程唤醒\n\tnoteclear(&_g_.m.park)\n\n\t// ……………………\n\n\tacquirep(_g_.m.nextp.ptr())\n\t_g_.m.nextp = 0\n}\n")])])]),e("p",[n._v("先将 m 放入全局空闲链表里，注意涉及到全局变量的修改，要上锁。接着，调用 "),e("code",[n._v("notesleep(&_g_.m.park)")]),n._v(" 使得当前工作线程进入休眠状态。其他工作线程在检测到“当前有很多工作要做”，会调用 "),e("code",[n._v("noteclear(&_g_.m.park)")]),n._v(" 将其唤醒。注意，这两个函数传入的参数都是一样的："),e("code",[n._v("&_g_.m.park")]),n._v("，它的类型是：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("type note struct {\n\tkey uintptr\n}\n")])])]),e("p",[n._v("很简单，只有一个 key 字段。")]),n._v(" "),e("blockquote",[e("p",[n._v("note 的底层实现机制跟操作系统相关，不同系统使用不同的机制，比如 linux 下使用的 futex 系统调用，而 mac 下则是使用的 pthread_cond_t 条件变量，note 对这些底层机制做了一个抽象和封装。")])]),n._v(" "),e("blockquote",[e("p",[n._v("这种封装给扩展性带来了很大的好处，比如当睡眠和唤醒功能需要支持新平台时，只需要在 note 层增加对特定平台的支持即可，不需要修改上层的任何代码。")])]),n._v(" "),e("p",[n._v("上面这一段来自阿波张的系列教程。我们接着来看下 notesleep 的实现：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// runtime/lock_futex.go\nfunc notesleep(n *note) {\n\t// g0\n\tgp := getg()\n\tif gp != gp.m.g0 {\n\t\tthrow("notesleep not on g0")\n\t}\n\t// -1 表示无限期休眠\n\tns := int64(-1)\n\n\t// ……………………\n\t\n\t// 这里之所以需要用一个循环，是因为 futexsleep 有可能意外从睡眠中返回，\n\t// 所以 futexsleep 函数返回后还需要检查 note.key 是否还是 0，\n\t// 如果是 0 则表示并不是其它工作线程唤醒了我们，\n\t// 只是 futexsleep 意外返回了，需要再次调用 futexsleep 进入睡眠\n\tfor atomic.Load(key32(&n.key)) == 0 {\n\t\t// 表示 m 被阻塞\n\t\tgp.m.blocked = true\n\t\tfutexsleep(key32(&n.key), 0, ns)\n\n\t\t// ……………………\n\n\t\t// 被唤醒，更新标志\n\t\tgp.m.blocked = false\n\t}\n}\n')])])]),e("p",[n._v("继续往下追：")]),n._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// runtime/os_linux.go\nfunc futexsleep(addr *uint32, val uint32, ns int64) {\n\tvar ts timespec\n\n\tif ns < 0 {\n\t\tfutex(unsafe.Pointer(addr), _FUTEX_WAIT, val, nil, nil, 0)\n\t\treturn\n\t}\n\n\t// ……………………\n}\n")])])]),e("p",[n._v("当 *addr 和 val 相等的时候，休眠。"),e("code",[n._v("futex")]),n._v(" 由汇编语言实现：")]),n._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("TEXT runtime·futex(SB),NOSPLIT,$0\n    // 为系统调用准备参数\n\tMOVQ\taddr+0(FP), DI\n\tMOVL\top+8(FP), SI\n\tMOVL\tval+12(FP), DX\n\tMOVQ\tts+16(FP), R10\n\tMOVQ\taddr2+24(FP), R8\n\tMOVL\tval3+32(FP), R9\n\t// 系统调用编号\n\tMOVL\t$202, AX\n\t// 执行 futex 系统调用进入休眠，被唤醒后接着执行下一条 MOVL 指令\n\tSYSCALL\n\t// 保存系统调用的返回值\n\tMOVL\tAX, ret+40(FP)\n\tRET\n")])])]),e("p",[n._v("这样，找不到工作的 m 就休眠了。当其他线程发现有工作要做时，就会先找到空闲的 m，再通过 m.park 字段来唤醒本线程。唤醒之后，回到 "),e("code",[n._v("findrunnable")]),n._v(" 函数，继续寻找 goroutine，找到后返回 schedule 函数，然后就会去运行找到的 goroutine。")]),n._v(" "),e("p",[n._v("这就是 m 找工作的整个过程，历尽千辛万苦，终于修成正果。")]),n._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),e("p",[n._v("【阿波张 Goroutine 调度策略】https://mp.weixin.qq.com/s/2objs5JrlnKnwFbF4a2z2g")])])}),[],!1,null,null,null);t.default=a.exports}}]);