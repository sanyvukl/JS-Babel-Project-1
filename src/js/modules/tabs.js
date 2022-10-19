const tabs = (headerSelector, tabSelector, 
contentSelector, activeClass)=>{

    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent(){
        /* Hide all content */
        content.forEach((item)=>{
            item.style.display="none";
        });
        /* Deactivate class active */
        tab.forEach((elem)=>{
            elem.classList.remove(activeClass);
        });
    }
    function showTabContent(index = 0){
        /* Hide all elements */
        /* hideTabContent(); */

        /* Add dispaly */
        content[index].style.display="block";
        /* Add active class */
        tab[index].classList.add(activeClass);
    }

    /* Default action */
    hideTabContent();
    /* Show first element data */
    showTabContent();


    /* De bylo clicknyto */
    header.addEventListener("click", (e)=>{
        const {target} = e;
        console.log(target);
        console.log(target.parentNode);
        /* Deleting dot */
        if(target && (target.classList.contains(tabSelector.replace(/\./,""))||
           target.parentNode.classList.contains(tabSelector.replace(/\./,"")))){
            tab.forEach((item, index)=>{
                if(target === item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    })
}  

export default tabs;