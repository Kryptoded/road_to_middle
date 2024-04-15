window.blockTemplate = (function(){
    return `
        <div class='{{ className }}'>
            <span onClick='{{ handleClick }}'> {{ text }} </span>
            <span> {{ user.info.firstName }} </span>
        </div>
    `;
})();