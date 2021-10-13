
    let navigationBar = document.getElementById("navigationBar");
    
    function showmenu(){
        navigationBar.style.right = "0";
        navigationBar.classList.add('navigation__bar__show');
    }

    function hidemenu(){
        navigationBar.style.right = "-60%";
        navigationBar.classList.remove('navigation__bar__show');
    }

