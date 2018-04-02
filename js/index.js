//banner效果
{
    let imgs = document.querySelectorAll(".bannerxia2 .bannerxia2_img1");
    let pagers = document.querySelectorAll(".banner_lunbo li");
    let banner = document.querySelector(".bannerxiadi");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    //点击切换下一张
    let flag = true;//左右点击图片不会换的太快
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n = n - 2;
            move();
        }
    };
    imgs.forEach(function (ele, index) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        })
    })
}
//回顶部效果
{
    let totop = document.querySelector(".ceding34");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25);
    };
}
//顶部定搜索框的效果
{
    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 700) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (st > 2200) {
            leftbar.style.display = "block";
        }
        else {
            leftbar.style.display = "none";
        }
    };
}
{
    let tips = document.querySelectorAll(".tips");
    let contents = document.querySelectorAll(".contentz");
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = contents[index].offsetTop - 80;
            document.documentElement.scrollTop = ot;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < contents.length; i++) {
            if (st > contents[i].offsetTop - 100) {
                for (let i = 0; i < tips.length; i++) {
                    tips[i].classList.remove("active");
                }
                tips[i].classList.add("active");
            }
        }
    })
}
//头部左边导航弹框
{
    {
        let text = document.querySelectorAll(".toubu_di_left1");
        let box = document.querySelectorAll(".toubu_di_left1_chu");
        let obj = box[0];
        text.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                obj.style.display = "none";
                box[index].style.display = "block";
                obj = box[index];
            };
            ele.onmouseleave = function () {
                box[index].style.display = "none";
            };
        })
    }
}
// 头部右边导航弹框
{
    {
        let text = document.querySelectorAll(".toubu_di_right1");
        let box = document.querySelectorAll(".toubu_di_right1_chu");
        let obj = box[0];
        text.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                obj.style.display = "none";
                box[index].style.display = "block";
                obj = box[index];
            };
            ele.onmouseleave = function () {
                box[index].style.display = "none";
            };
        })
    }
}
//购物车弹出效果
{
    {
        let text = document.querySelectorAll(".toubu_di_right4");
        let box = document.querySelectorAll(".toubu_di_right4_chu");
        let obj = box[0];
        text.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                obj.style.display = "none";
                box[index].style.display = "block";
                obj = box[index];
            };
            ele.onmouseleave = function () {
                box[index].style.display = "none";
            };
        })
    }
}
//侧导航
{
    let sidenav = document.querySelectorAll(".bannerxia1 li");
    let menu = document.querySelectorAll(".bannerxia1_chu");
    let obj = menu[0];
    sidenav.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            menu[index].style.display = "block";
            obj = menu[index];
        };
        ele.onmouseleave = function () {
            menu[index].style.display = "none";
        }
    })
}
//右侧话费上内容
{
        let inner=document.querySelector(".ax33_inner");
        let contents=document.querySelectorAll(".bannerxia3_3shangzong");
        let box=document.querySelector(".bannerxia3_3");
        let n=1;
        let t=setInterval(move,3000);
        function move(){
            n++;
            inner.style.transition="all 1s";
            inner.style.marginTop=n*-114+"px";
        }
        inner.addEventListener("transitionend",function(){
            if(n===3){
                inner.style.transition="none";
                inner.style.marginTop="-114px";
                n=1;
            }
            if(n===0){
                inner.style.transition="none";
                inner.style.marginTop="-342px";
                n=2;
            }
        });
        box.onmouseenter=function () {
            clearInterval(t);
        };
        box.onmouseleave=function () {
            t=setInterval(move,3000);
        };

}
//右侧定框效果
{
    let text = document.querySelectorAll(".ceding31");
    let box = document.querySelectorAll(".ceding31_tab_tip");
    let obj = box[0];
    text.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            box[index].style.cssText = "display:block;background-color: #FF9900;color: #383838;";
            obj = box[index];
        };
        ele.onmouseleave = function () {
            box[index].style.display = "none";
        };
    })
}
{
    let text = document.querySelectorAll(".ceding32");
    let box = document.querySelectorAll(".ceding32_tab_tip");
    let obj = box[0];
    text.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            box[index].style.cssText = "display:block;background-color: #FF9900;color: #383838;";
            obj = box[index];
        };
        ele.onmouseleave = function () {
            box[index].style.display = "none";
        };
    })
}
{
    let text = document.querySelectorAll(".ceding34");
    let box = document.querySelectorAll(".ceding34_tab_tip");
    let obj = box[0];
    text.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            box[index].style.cssText = "display:block;background-color: #FF9900;color: #383838;";
            obj = box[index];
        };
        ele.onmouseleave = function () {
            box[index].style.display = "none";
        };
    })
}
{
    let totop = document.querySelector(".return");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25);
    };
}
//大聚惠
{
    let inner = document.querySelector(".dajuhui_bottom_inner");
    let left = document.querySelector(".dajuhui_zuojiantou");
    let right = document.querySelector(".dajuhui_youjiantou");
    let n = 1;
    let flag = true;
    right.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    left.onclick = function () {
        if (flag) {
            n--;
            flag = false;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1000px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-3000px";
            n = 3;
        }
    });
}
//大聚惠下弹框
{
    let text=document.querySelectorAll(".bannershangli");
    let box=document.querySelectorAll(".bannershangli_chu");
    let obj=box[0];
    text.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            box[index].style.display="block";
            obj=box[index];
        };
        ele.onmouseleave=function () {
            box[index].style.display="none";
        };
    })
}
//排行榜
{
    let inner = document.querySelector(".paihangbang_bottom1_inner");
    let left = document.querySelector(".paihangbang_bottom_left");
    let right = document.querySelector(".paihangbang_bottom_right");
    let n = 1;
    let flag = true;
    right.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -369 * n + "px";
        }
    };
    left.onclick = function () {
        if (flag) {
            n--;
            flag = false;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -369* n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-369px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1107px";
            n = 3;
        }
    });
}
//乐拼购
{
    let inner = document.querySelector(".lepingou2_inner");
    let left = document.querySelector(".lp_zuojiantou");
    let right = document.querySelector(".lp_youjiantou");
    let n = 1;
    let flag = true;
    right.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -590 * n + "px";
        }
    };
    left.onclick = function () {
        if (flag) {
            n--;
            flag = false;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -590 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-590px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1770px";
            n = 3;
        }
    });
}
//视频
{
    let inner = document.querySelector(".sl_inner");
    let left = document.querySelector(".ssxl_zjiantou");
    let right = document.querySelector(".ssxl_yjiantou");
    let n = 1;
    let flag = true;
    right.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -390 * n + "px";
        }
    };
    left.onclick = function () {
        if (flag) {
            n--;
            flag = false;
            inner.style.transition = "all 0.5s";
            inner.style.marginLeft = -390* n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 3) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-390px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-780px";
            n = 2;
        }
    });
}
//搜索框里的商品分类
{
    let s=document.querySelector(".bannershang1");
    let c=document.querySelector(".bns_chu");
    s.onmouseenter=function () {
        console.log(1);
        c.style.display="block";
    };
    s.onmouseleave=function () {
        c.style.display="none";
    }
}