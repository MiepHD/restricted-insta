setInterval(() => {
    const url = location.href.split(".com/")[1];
    if (url === "" || url === "?variant=home" || url === "?__pwa=1") location.href = "https://www.instagram.com/?variant=following";
    
    const sidebar = document.querySelector(".x78zum5.xaw8158.xh8yej3");
    const vid = document.querySelector(".x78zum5.xdt5ytf.x16xn7b0.x6ikm8r.x1rife3k.x67bb7w.xuvww63.x1rohswg.xk8sdt9.x168l2et");
    if (sidebar != null && sidebar.children[0].children.length > 4) {sidebar.children[0].children[2].remove();}
    if (vid != null && vid.style.getPropertyValue("overflow") != "hidden") vid.style.setProperty("overflow", "hidden");
    
    if (location.href === "https://www.instagram.com/?variant=following") {
        const following = document.querySelector("._ab1a");
        if (following != null) {following.remove();}
    }
    
    if (location.href.includes("https://www.instagram.com/explore/")) {
        const recommendations = document.querySelector(".x78zum5.xdt5ytf.x1iyjqo2.xdj266r.x11t971q.x4n8cb0.xvc5jky.x1ykew4q.xh8yej3.x19b80pe.xhae0no.xmjrnx3.x103t36t.xlph30v.x1e49onv.x57odl9.x1ugxg0y");
        if (recommendations != null) {
            if (location.href === "https://www.instagram.com/explore/") {
                recommendations.style.visibility = "hidden";
            } else {
                recommendations.style.visibility = "visible";
            }
        }
    }
}, 500);
