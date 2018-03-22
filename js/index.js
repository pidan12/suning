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
    let imgs = document.querySelectorAll(".bannerxia3_3 .bannerxia3_3shangzong");
    let banner = document.querySelector(".bannerxia3");
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
            imgs[i].classList.remove("bannerxia3_3shangzong_active");
        }
        imgs[n].classList.add("bannerxia3_3shangzong_active");
    }
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
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